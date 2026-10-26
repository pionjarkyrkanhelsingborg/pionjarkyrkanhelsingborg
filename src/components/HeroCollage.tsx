import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ImgHTMLAttributes,
} from 'react'

export type CollageImage = ({ src: string } & Pick<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'fetchPriority'>)

export type CollageColumn = {
  images: CollageImage[]
  duration: string
  delay: string
  direction: 'up' | 'down'
  // Multiple of --collage-column-width, e.g. 1.5 is 50% wider than 1
  width: number
  // Image frame width / height, e.g. '3 / 4'
  aspectRatio: string
  // 1 is kept longest; the highest number is dropped first when space runs out
  priority: number
}

type CollageSize = { width: number; height: number; gap: number; columnWidth: number }

function parseRatio(ratio: string) {
  const [width, height = 1] = ratio.split('/').map(Number)
  return width / height
}

function layoutColumns(columns: CollageColumn[], size: CollageSize | null) {
  if (!size || size.width <= 0 || size.height <= 0) return []

  const { width, height, gap, columnWidth } = size
  const ranked = [...columns].sort((a, b) => a.priority - b.priority)
  const span = (kept: CollageColumn[]) =>
    kept.reduce((sum, column) => sum + column.width * columnWidth + gap, -gap)

  // Fewest top-priority columns that fill the width; any more would sit entirely past the edge
  let count = 1
  while (count < ranked.length && span(ranked.slice(0, count)) < width) count++
  const kept = ranked.slice(0, count)

  // Columns keep their base width and only stretch when all of them together fall short
  const totalWidth = kept.reduce((sum, column) => sum + column.width, 0)
  const unit = Math.max(columnWidth, (width - gap * (kept.length - 1)) / totalWidth)

  return columns
    .filter((column) => kept.includes(column))
    .map((column) => {
      const frameHeight = (column.width * unit) / parseRatio(column.aspectRatio) + gap
      // Enough copies to cover the height, plus one so the loop never shows a gap
      const copies = Math.ceil(height / (column.images.length * frameHeight)) + 1
      return { column, copies, width: column.width * unit }
    })
}

export default function HeroCollage({ columns }: { columns: CollageColumn[] }) {
  const collageRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<CollageSize | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const collage = collageRef.current
    if (!collage) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      const style = getComputedStyle(collage)
      setSize({
        width,
        height,
        gap: parseFloat(style.columnGap) || 0,
        columnWidth: parseFloat(style.getPropertyValue('--collage-column-width')) || 0,
      })
    })
    observer.observe(collage)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hero__visual">
      <div
        ref={collageRef}
        className={`hero__collage${paused ? ' is-paused' : ''}`}
        aria-hidden="true"
      >
        {layoutColumns(columns, size).map(({ column, copies, width }) => (
          <div
            className="hero__collage-column"
            key={columns.indexOf(column)}
            style={{ width, '--collage-frame-ratio': column.aspectRatio } as CSSProperties}
          >
            <div
              className="hero__collage-track"
              style={{
                '--collage-copies': copies,
                animationDuration: column.duration,
                animationDelay: column.delay,
                animationDirection: column.direction === 'down' ? 'reverse' : 'normal',
              } as CSSProperties}
            >
              {Array.from({ length: copies }, () => column.images).flat().map(({ src, ...attributes }, index) => (
                <div className="hero__collage-frame" key={index}>
                  <img className="hero__collage-image" src={src} alt="" {...attributes} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="hero__collage-toggle"
        type="button"
        aria-label={paused ? 'Spela bildkollaget' : 'Pausa bildkollaget'}
        aria-pressed={paused}
        title={paused ? 'Spela bildkollaget' : 'Pausa bildkollaget'}
        onClick={() => setPaused((isPaused) => !isPaused)}
      >
        <span className={`hero__collage-icon${paused ? ' is-play' : ''}`} aria-hidden="true" />
      </button>
    </div>
  )
}
