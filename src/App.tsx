import './App.css'
import Header from './components/shared/Header'
import ArrowIcon from './components/shared/ArrowIcon'
import HeroCollage, { type CollageColumn } from './components/HeroCollage'

// No lazy loading: clipped collage images would only load (and pop in) as they scroll into view
const heroColumns: CollageColumn[] = [
  {
    images: [
      { src: 'images/forsamlingshelg/ultra-lq/service-1.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/community-1.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/service-3.avif', loading: 'eager', fetchPriority: 'low' },
    ],
    duration: '25s',
    delay: '0s',
    direction: 'up',
    width: 1.7,
    aspectRatio: '5 / 3',
    priority: 1,
  },
  {
    images: [
      { src: 'images/forsamlingshelg/ultra-lq/community-13.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/service-2.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/community-12.avif', loading: 'eager', fetchPriority: 'low' },
    ],
    duration: '88s',
    delay: '-12s',
    direction: 'down',
    width: 1.4,
    aspectRatio: '4 / 4',
    priority: 2,
  },
  {
    images: [
      { src: 'images/pioneer/ultra-lq/service-9.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/community-2.avif', loading: 'eager', fetchPriority: 'high' },
      { src: 'images/forsamlingshelg/ultra-lq/prayer-1.avif', loading: 'eager', fetchPriority: 'high' },
    ],
    duration: '55s',
    delay: '-20s',
    direction: 'up',
    width: 1,
    aspectRatio: '4 / 3',
    priority: 3,
  },
]

function App() {
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
                  Ny besökare <ArrowIcon />
                </a>
                <a className="button button--light" href="#gudstjanster">Gudstjänster</a>
              </div>
              <p className="hero__details">Söndagar 16:00 <span aria-hidden="true">/</span> EFS Råå</p>
            </div>
            <HeroCollage columns={heroColumns} />
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
                  Mer om oss <ArrowIcon />
                </a>
                <a className="text-link" href="#gudstjanster">
                  Gudstjänster <ArrowIcon />
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
                  För dig som ny <ArrowIcon />
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
                Mer info <ArrowIcon />
              </a>
              <p className="services__address">Missionsgatan 8 <span aria-hidden="true">·</span> Helsingborg</p>
            </div>
            <figure className="services__image-wrap">
              <img
                className="services__image"
                src="images/pioneer/worship.avif"
                alt="Lovsång under en gudstjänst"
                loading="lazy"
                fetchPriority='low'
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
                Ge en gåva <ArrowIcon />
              </a>
            </div>
            <img
              src="images/Swish-qr.png"
              alt="Vårt swishnummer"
              width={512}
              height={512}
              loading="lazy"
              fetchPriority='low'
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
                Kontakta oss <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>© 2026 Pionjärkyrkan Helsingborg</p>
          <nav className="site-footer__social" aria-label="Sociala medier">
            <a href="https://www.facebook.com/Pionjarkyrkanhelsingborg/" target="_blank" rel="noreferrer">Facebook <ArrowIcon /></a>
            <a href="https://www.instagram.com/pionjarkyrkanhelsingborg/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
