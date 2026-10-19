import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/shared/Header'

const heroSlides = [
  'images/forsamlingshelg/service-1.avif',
  'images/forsamlingshelg/community-13.avif',
  'images/pioneer/service-9.avif',
  'images/forsamlingshelg/community-1.avif',
  'images/forsamlingshelg/service-2.avif',
  'images/forsamlingshelg/community-2.avif',
  'images/forsamlingshelg/service-3.avif',
  'images/forsamlingshelg/community-12.avif',
  'images/forsamlingshelg/prayer-1.avif',
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideshowPaused, setSlideshowPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [slideTransitionEnabled, setSlideTransitionEnabled] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (slideshowPaused || prefersReducedMotion) return

    const intervalId = window.setInterval(() => {
      setActiveSlide((slide) => slide + 1)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [slideshowPaused, prefersReducedMotion])

  useEffect(() => {
    if (slideTransitionEnabled) return

    const frameId = window.requestAnimationFrame(() => setSlideTransitionEnabled(true))
    return () => window.cancelAnimationFrame(frameId)
  }, [slideTransitionEnabled])

  function handleSlideTransitionEnd() {
    if (activeSlide === heroSlides.length) {
      setSlideTransitionEnabled(false)
      setActiveSlide(0)
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Gå till innehåll</a>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__layout">
            <div className="hero__content">
              <p className="hero__eyebrow">Pionjärkyrkan Helsingborg</p>
              <h1 id="hero-title">Välkommen hem</h1>
              <div className="hero__actions">
                <a className="button button--warm" href="#ny-besokare">
                  Ny besökare <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--light" href="#gudstjanster">Gudstjänster</a>
              </div>
              <p className="hero__details">Söndagar 16:00 <span aria-hidden="true">/</span> EFS Råå</p>
            </div>
            <div className="hero__visual">
              <div
                className="hero__slideshow"
                aria-hidden="true"
              >
                <div
                  className={`hero__slide-track${slideTransitionEnabled ? '' : ' is-resetting'}`}
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  onTransitionEnd={handleSlideTransitionEnd}
                >
                  {[...heroSlides, heroSlides[0]].map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      className="hero__slide"
                      src={image}
                      alt=""
                      style={{ left: `${index * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              <button
                className="hero__slideshow-toggle"
                type="button"
                aria-label={slideshowPaused ? 'Spela bildspelet' : 'Pausa bildspelet'}
                aria-pressed={slideshowPaused}
                title={slideshowPaused ? 'Spela bildspelet' : 'Pausa bildspelet'}
                onClick={() => setSlideshowPaused((paused) => !paused)}
              >
                <span
                  className={`hero__slideshow-icon${slideshowPaused ? ' is-play' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </section>

        <section className="intro section" id="vilka-ar-vi" aria-labelledby="intro-title">
          <div className="container intro__grid">
            <div className="intro__copy" style={
              { 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                marginInline: 'auto'
              }
            }>
              <p className="section-label" style={{textAlign: 'center'}}>Vilka är vi</p>
              <h2 id="intro-title" style={{textAlign: 'center'}}>Pionjärkyrkan i Helsingborg</h2>
              <p style={{textAlign: 'center'}}>
                Vi är en församling i Helsingborg som längtar efter att människor i Helsingborg
                ska få möta Jesus. Vi vill vara en gemenskap där Jesus står i centrum, där
                Helige Ande får leda och en plats där människor får bli förvandlade!
              </p>
              <div className="text-links">
                <a className="text-link" href="https://www.pionjarkyrkanhelsingborg.com/om-oss" target="_blank" rel="noreferrer">
                  Mer om oss <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#gudstjanster">
                  Gudstjänster <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="visitor section" id="ny-besokare" aria-labelledby="visitor-title">
          <div className="container visitor__grid">
            <div className="visitor__copy">
              <p className="section-label">Ny besökare</p>
              <h2 id="visitor-title">Är du nyfiken på Pionjärkyrkan?</h2>
              <p>
                Vi vet att man kan ha massor med frågor när man ska besöka en kyrka. Därför vill
                vi göra allt vi kan för att du ska känna dig så välkommen som möjligt.
              </p>
              <div className="visitor__actions">
                <a className="button button--warm" href="#gudstjanster">
                  För dig som ny <span aria-hidden="true">↗</span>
                </a>
                <a className="visitor__contact" href="#kontakt">Kontakta oss</a>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="gudstjanster" aria-labelledby="services-title">
          <div className="container services__grid">
            <div className="services__copy">
              <p className="section-label">Detta händer i Pionjärkyrkan</p>
              <h2 id="services-title">Gudstjänster</h2>
              <p>
                Våra gudstjänster är en plats där alla ska känna sig välkomna. Vi firar gudstjänst
                varje söndag i EFS Råås lokaler på Missionsgatan 8, klockan 16:00.
              </p>
              <a className="text-link" href="https://www.pionjarkyrkanhelsingborg.com/gudstjanster" target="_blank" rel="noreferrer">
                Mer info <span aria-hidden="true">↗</span>
              </a>
              <p className="services__address">Missionsgatan 8 <span aria-hidden="true">·</span> Helsingborg</p>
            </div>
            <figure className="services__image-wrap">
              <img
                className="services__image"
                src="images/worship.jpg"
                alt="Lovsång under en gudstjänst"
                loading="lazy"
              />
              <figcaption>Söndag · 16:00</figcaption>
            </figure>
          </div>
        </section>

        <section className="giving section" id="givande" aria-labelledby="giving-title">
          <div className="container giving__grid">
            <div className="giving__copy">
              <p className="section-label">Givande</p>
              <h2 id="giving-title">Vill du ge en gåva?</h2>
              <p>
                Vår församling bygger på att många tillsammans ger av sin tid, energi och pengar.
                Du behövs för att göra församlingen möjlig. Vi tar tacksamt emot din gåva.
              </p>
              <a className="button button--dark" href="https://www.pionjarkyrkanhelsingborg.com/ge-en-gava" target="_blank" rel="noreferrer">
                Ge en gåva <span aria-hidden="true">↗</span>
              </a>
            </div>
            <img
              src="images/Swish-qr.png"
              alt="Vårt swishnummer"
              width={512}
              height={512}
              loading="lazy"
            />
          </div>
        </section>

        <section className="contact section" id="kontakt" aria-labelledby="contact-title">
          <div className="container contact__grid">
            <div className="contact__copy" style={
              { 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                marginInline: 'auto'
              }
            }>
              <p className="section-label">Frågor</p>
              <h2 id="contact-title">Kontakta oss</h2>
              <p style={{textAlign: 'center'}}>
                Är det något du undrar över eller vill du bara veta mer om vilka vi är?
                Tveka inte att kontakta oss!
              </p>
              <a className="contact__email" href="mailto:pionjarkyrkan@gmail.com">
                Kontakta oss<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>© 2026 Pionjärkyrkan Helsingborg</p>
          <nav className="site-footer__social" aria-label="Sociala medier">
            <a href="https://www.facebook.com/Pionjarkyrkanhelsingborg/" target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href="https://www.instagram.com/pionjarkyrkanhelsingborg/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
