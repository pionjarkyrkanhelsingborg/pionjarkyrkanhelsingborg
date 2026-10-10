import './App.css'
import Header from './components/shared/Header'

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
                  Ny besökare <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--light" href="#gudstjanster">Gudstjänster</a>
              </div>
              <p className="hero__details">Söndagar 16:00 <span aria-hidden="true">/</span> EFS Råå</p>
            </div>

            <svg className="hero__drawing" viewBox="0 0 700 640" aria-hidden="true" focusable="false">
              <path
                className="hero__drawing-path"
                pathLength="1000"
                d="M 6 621 C 10 580 37 552 70 535 C 109 515 128 518 162 519 C 143 522 135 504 140 485 C 145 464 166 460 178 476 C 194 495 182 514 162 519 C 193 522 211 511 242 494 L 298 461 C 324 446 340 421 341 390 L 344 189 L 250 188 Q 244 188 244 182 L 244 150 Q 244 144 250 144 L 344 144 L 345 51 Q 345 44 352 44 L 383 48 Q 389 49 389 55 L 389 144 L 482 145 Q 488 145 488 151 L 488 182 Q 488 188 482 188 L 395 189 L 397 385 C 397 411 395 432 403 441 C 419 459 443 460 461 453 C 481 440 494 424 518 430 C 543 435 554 457 586 460 C 619 463 654 456 693 448"
              />
            </svg>
          </div>
        </section>

        <section className="intro section" id="vilka-ar-vi" aria-labelledby="intro-title">
          <div className="container intro__grid">
            <div className="intro__copy">
              <p className="section-label">Vilka är vi</p>
              <h2 id="intro-title">Pionjärkyrkan i Helsingborg</h2>
              <p>
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
                src="/images/worship.jpg"
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
          </div>
        </section>

        <section className="contact section" id="kontakt" aria-labelledby="contact-title">
          <div className="container contact__grid">
            <div className="contact__copy">
              <p className="section-label">Pionjärkyrkan Helsingborg</p>
              <h2 id="contact-title">Kontakta oss</h2>
              <p>
                Är det något du undrar över eller vill du bara veta mer om vilka vi är?
                Tveka inte att kontakta oss!
              </p>
              <a className="contact__email" href="mailto:pionjarkyrkan@gmail.com">
                pionjarkyrkan@gmail.com <span aria-hidden="true">↗</span>
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
