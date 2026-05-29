'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null)

  const handleStartPlan = (planName: string, planPrice: number) => {
    setSelectedPlan({ name: planName, price: planPrice })
    setShowPaymentModal(true)
  }

  useEffect(() => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.nav-hamburger')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav a')

    if (hamburger) {
      hamburger.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        target.classList.toggle('open')
        mobileNav?.classList.toggle('open')
      })
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav?.classList.remove('open')
        hamburger?.classList.remove('open')
      })
    })

    // Fade-in scroll animation - delayed to ensure DOM is ready
    const setupObserver = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      // Observe all fade-in elements
      const fadeElements = document.querySelectorAll('.fade-in-element')
      fadeElements.forEach(el => {
        observer.observe(el)
      })
    }

    // Use requestAnimationFrame to ensure DOM is fully painted
    requestAnimationFrame(() => {
      setTimeout(setupObserver, 0)
    })
  }, [])

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">🏠</div>
          BoostMyRealEstate
        </a>
        <div className="nav-pill">
          <a href="#examples">Voorbeelden</a>
          <a href="#how">Hoe het werkt</a>
          <a href="#features">Features</a>
          <a href="#pricing">Prijzen</a>
        </div>
        <a href="#pricing" className="nav-cta">Gratis starten →</a>
        <button className="nav-hamburger" id="navHamburger" aria-label="Menu openen" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobiel menu">
        <a href="#examples">Voorbeelden</a>
        <a href="#how">Hoe het werkt</a>
        <a href="#features">Features</a>
        <a href="#pricing">Prijzen</a>
        <a href="#pricing" className="mob-cta">Gratis starten →</a>
      </div>

      <section className="hero">
        <div className="hero-photo"></div>
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-kicker">
              <div className="hero-kicker-dot"></div>
              Websites voor vakantieverhuurders
            </div>
            <h1 className="hero-title">
              Jouw Airbnb verdient<br />
              een <em>eigen</em> website
            </h1>
            <p className="hero-sub">
              Professionele websites voor vakantiewoningen die directe boekingen genereren — zonder commissie aan Airbnb of Booking.com.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-white">Start jouw website →</a>
              <a href="#examples" className="btn-glass-light">Bekijk voorbeelden</a>
            </div>
          </div>
          <div className="hero-glass-card">
            <div className="hgc-label">Jouw website</div>
            <div className="hgc-stat">
              <div className="hgc-num">+340%</div>
              <div className="hgc-desc">meer directe boekingen</div>
            </div>
            <div className="hgc-divider"></div>
            <div className="hgc-stat">
              <div className="hgc-num">€0</div>
              <div className="hgc-desc">commissie aan platforms</div>
            </div>
            <div className="hgc-divider"></div>
            <a href="#pricing" className="hgc-cta">Bekijk →</a>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">500<sup>+</sup></div>
            <div className="stat-label">Actieve websites</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">€12M</div>
            <div className="stat-label">In directe boekingen</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4.9/5</div>
            <div className="stat-label">Gemiddelde rating</div>
          </div>
        </div>
      </section>

      <section className="examples-section" id="examples">
        <div className="section-inner fade-in-element">
          <div className="examples-header">
            <div>
              <div className="s-eyebrow">VOORBEELDEN</div>
              <h2 className="s-title">Ontdek onze portfolio</h2>
              <p className="s-sub">Professioneel ontworpen websites die conversie drijven</p>
            </div>
            <a href="#" className="explore-link">
              Alle voorbeelden
              <div className="explore-arrow">→</div>
            </a>
          </div>

          <div className="properties-grid">
            <div className="prop-card">
              <div className="prop-img-wrap">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop&q=80" alt="Villa Toscana" />
                <div className="prop-tag">POPULAIR</div>
                <div className="prop-fav">❤️</div>
                <div className="prop-browser-bar">
                  <div className="pbb-dots">
                    <div className="pbb-dot" style={{background: '#ff605c'}}></div>
                    <div className="pbb-dot" style={{background: '#ffbd44'}}></div>
                    <div className="pbb-dot" style={{background: '#00ca4e'}}></div>
                  </div>
                  <div className="pbb-url">villaToscana.nl</div>
                </div>
              </div>
              <div className="prop-body">
                <div className="prop-location">📍 Toscane, Italië</div>
                <h3 className="prop-name">Villa Toscana</h3>
                <div className="prop-meta">
                  <div className="prop-meta-item">4 Slaapkamers</div>
                  <div className="prop-meta-item">2 Badkamers</div>
                </div>
                <div className="prop-footer">
                  <div className="prop-price">€189<span>/nacht</span></div>
                  <div className="prop-rating">
                    <span className="prop-stars">★★★★★</span> 4.9
                  </div>
                </div>
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-img-wrap">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop" alt="Coastal Escape" />
                <div className="prop-tag">STRANDVILLA</div>
                <div className="prop-fav">🤍</div>
                <div className="prop-browser-bar">
                  <div className="pbb-dots">
                    <div className="pbb-dot" style={{background: '#ff605c'}}></div>
                    <div className="pbb-dot" style={{background: '#ffbd44'}}></div>
                    <div className="pbb-dot" style={{background: '#00ca4e'}}></div>
                  </div>
                  <div className="pbb-url">coastalEscape.nl</div>
                </div>
              </div>
              <div className="prop-body">
                <div className="prop-location">🏖️ Algarve, Portugal</div>
                <h3 className="prop-name">Coastal Escape</h3>
                <div className="prop-meta">
                  <div className="prop-meta-item">3 Slaapkamers</div>
                  <div className="prop-meta-item">2 Badkamers</div>
                </div>
                <div className="prop-footer">
                  <div className="prop-price">€225<span>/nacht</span></div>
                  <div className="prop-rating">
                    <span className="prop-stars">★★★★★</span> 5.0
                  </div>
                </div>
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-img-wrap">
                <img src="/alpine-lodge.png" alt="Alpine Lodge" />
                <div className="prop-tag">BERGHUT</div>
                <div className="prop-fav">🤍</div>
                <div className="prop-browser-bar">
                  <div className="pbb-dots">
                    <div className="pbb-dot" style={{background: '#ff605c'}}></div>
                    <div className="pbb-dot" style={{background: '#ffbd44'}}></div>
                    <div className="pbb-dot" style={{background: '#00ca4e'}}></div>
                  </div>
                  <div className="pbb-url">alpineLodge.nl</div>
                </div>
              </div>
              <div className="prop-body">
                <div className="prop-location">⛷️ Zwitserland</div>
                <h3 className="prop-name">Alpine Lodge</h3>
                <div className="prop-meta">
                  <div className="prop-meta-item">5 Slaapkamers</div>
                  <div className="prop-meta-item">3 Badkamers</div>
                </div>
                <div className="prop-footer">
                  <div className="prop-price">€320<span>/nacht</span></div>
                  <div className="prop-rating">
                    <span className="prop-stars">★★★★★</span> 4.8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-inner fade-in-element">
          <div className="s-eyebrow">SFEER</div>
          <h2 className="s-title">Onze beste shots</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/luxury-interior.png" alt="Luxe interieur" />
            <div className="gallery-overlay"></div>
            <div className="gallery-label">
              <div className="gallery-label-name">Moderne luxe</div>
              <div className="gallery-label-loc">Amsterdam</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/bedroom.png" alt="Slaapkamer" />
            <div className="gallery-overlay"></div>
            <div className="gallery-label">
              <div className="gallery-label-name">Comfort</div>
              <div className="gallery-label-loc">Utrecht</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop" alt="Keuken" />
            <div className="gallery-overlay"></div>
            <div className="gallery-label">
              <div className="gallery-label-name">Gezellig</div>
              <div className="gallery-label-loc">Rotterdam</div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/terrace.png" alt="Terras" />
            <div className="gallery-overlay"></div>
            <div className="gallery-label">
              <div className="gallery-label-name">Buitenruimte</div>
              <div className="gallery-label-loc">Groningen</div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-inner fade-in-element">
          <div className="s-eyebrow">HOE HET WERKT</div>
          <h2 className="s-title">Van aanvraag tot online in 3 stappen</h2>
        </div>

        <div className="section-inner">
          <p className="s-sub">Geen technische kennis nodig. Wij regelen alles, jij ontvangt boekingen.</p>
          <div className="how-inner">
            <div className="how-steps">
              <div className="how-step active">
                <div className="how-step-num">1</div>
                <div>
                  <h4 className="how-step-title">Vertel ons over jouw woning</h4>
                  <p className="how-step-desc">Stuur foto's, een beschrijving en jouw wensen. We stellen de nodige vragen om jouw woning perfect in beeld te brengen.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <div>
                  <h4 className="how-step-title">Wij bouwen jouw website</h4>
                  <p className="how-step-desc">Ons team ontwerpt en ontwikkelt een professionele website op maat — inclusief boekingssysteem en SEO-optimalisatie.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <div>
                  <h4 className="how-step-title">Ontvang directe boekingen</h4>
                  <p className="how-step-desc">Jouw website gaat live op jouw domeinnaam. Gasten boeken direct — zonder commissie aan externe platforms.</p>
                </div>
              </div>
            </div>

            <div className="how-visual">
                <img src="/mas-provencal.png" alt="Mas Provençal" />
              <div className="how-visual-overlay"></div>
              <div className="how-visual-badge">
                <div className="hvb-label">LIVE RESULTAAT</div>
                <div className="hvb-title">Mas Provençal</div>
                <div className="hvb-sub">Provence, Frankrijk</div>
                <div className="hvb-stat">
                  <div>
                    <div className="hvb-stat-num">+52%</div>
                    <div className="hvb-stat-label">Meer boekingen</div>
                  </div>
                  <div>
                    <div className="hvb-stat-num">€3.1k</div>
                    <div className="hvb-stat-label">Bespaardijaar</div>
                  </div>
                </div>
                  <div>
                    <div className="hvb-stat-num">4.9</div>
                    <div className="hvb-stat-label">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-inner fade-in-element">
          <div className="s-eyebrow">FEATURES</div>
          <h2 className="s-title">Alles wat je nodig hebt</h2>
        </div>

        <div className="features-grid">
          <div className="feat-item">
            <div className="feat-icon">📱</div>
            <h4 className="feat-title">Responsive Design</h4>
            <p className="feat-desc">Perfect op alle devices — desktop, tablet en mobiel</p>
          </div>
          <div className="feat-item">
            <div className="feat-icon">🔍</div>
            <h4 className="feat-title">SEO Optimized</h4>
            <p className="feat-desc">Hoog gerankt in Google voor alle relevante zoektermen</p>
          </div>
          <div className="feat-item">
            <div className="feat-icon">💳</div>
            <h4 className="feat-title">Online Boekingen</h4>
            <p className="feat-desc">Veilige payment processing met alle grote providers</p>
          </div>
          <div className="feat-item">
            <div className="feat-icon">📊</div>
            <h4 className="feat-title">Analytics</h4>
            <p className="feat-desc">Bekijk je bezoeken, conversies en ROI real-time</p>
          </div>
          <div className="feat-item">
            <div className="feat-icon">🛡️</div>
            <h4 className="feat-title">100% Secure</h4>
            <p className="feat-desc">SSL encryption en GDPR compliant</p>
          </div>
          <div className="feat-item">
            <div className="feat-icon">⚡</div>
            <h4 className="feat-title">Super Fast</h4>
            <p className="feat-desc">Lightning-quick loading times — onder 1 seconde</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="section-inner fade-in-element">
          <div className="s-eyebrow">GETUIGENISSEN</div>
          <h2 className="s-title">Wat ons klanten zeggen</h2>
        </div>

        <div className="section-inner">
          <div className="t-grid">
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;Mijn boekingen zijn verdrievoudigd sinds ik een eigen website heb. Geen commissie meer betalen is geweldig!&quot;</p>
              <div className="t-author">
                <div className="t-av" style={{background: '#5b3de8'}}>MV</div>
                <div>
                  <div className="t-name">Maria van den Berg</div>
                  <div className="t-role">Eigenaar Villa Toscana</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;Het team was super helpful bij de setup. Mijn website ziet er professioneel uit en het werkt perfect!&quot;</p>
              <div className="t-author">
                <div className="t-av" style={{background: '#7c5cf5'}}>JD</div>
                <div>
                  <div className="t-name">Jan de Wit</div>
                  <div className="t-role">Beheerder Coastal Escape</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;De SEO optimalisatie is echt top notch. Ik word gevonden voor alle relevante zoektermen in mijn regio.&quot;</p>
              <div className="t-author">
                <div className="t-av" style={{background: '#a78bfa'}}>SK</div>
                <div>
                  <div className="t-name">Sophie König</div>
                  <div className="t-role">Host Alpine Lodge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-inner">
          <div className="s-eyebrow">PRIJZEN</div>
          <h2 className="s-title">Transparante prijsstelling</h2>
          <p className="s-sub">Geen verborgen kosten. Upgrade of downgrade wanneer je wilt.</p>
        </div>

        <div className="section-inner">
          <div className="pricing-grid">
            <div className="p-card">
              <div className="p-plan">STARTER</div>
              <div className="p-price">€29<span className="p-price-unit">/mnd</span></div>
              <p className="p-desc">Perfect voor kleine vakantiewoningen</p>
              <div className="p-divider"></div>
              <ul className="p-features">
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Professionele website
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Online boekingssysteem
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  SEO optimalisatie
                </li>
                <li className="p-feature">
                  <span className="p-cross">✕</span>
                  Email support
                </li>
              </ul>
              <button onClick={() => handleStartPlan('STARTER', 29)} className="p-btn p-btn-outline" style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>Starten</button>
            </div>

            <div className="p-card featured">
              <div className="p-badge">POPULAIR</div>
              <div className="p-plan">PROFESSIONAL</div>
              <div className="p-price">€79<span className="p-price-unit">/mnd</span></div>
              <p className="p-desc">Voor actieve verhuurders</p>
              <div className="p-divider"></div>
              <ul className="p-features">
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Alles uit Starter
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Geavanceerde analytics
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Email support 24/7
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Custom domain
                </li>
              </ul>
              <button onClick={() => handleStartPlan('PROFESSIONAL', 79)} className="p-btn p-btn-dark" style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>Starten</button>
            </div>

            <div className="p-card">
              <div className="p-plan">ENTERPRISE</div>
              <div className="p-price">€199<span className="p-price-unit">/mnd</span></div>
              <p className="p-desc">Voor meerdere eigenschappen</p>
              <div className="p-divider"></div>
              <ul className="p-features">
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Alles uit Professional
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Multi-property dashboard
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Phone support
                </li>
                <li className="p-feature">
                  <span className="p-check">✓</span>
                  Custom development
                </li>
              </ul>
              <a href="#" className="p-btn p-btn-outline">Contact ons</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-photo"></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Klaar om je omzet te verhogen?</h2>
          <p className="cta-sub">Laat platforms als Airbnb achter je en groei je eigen empire met je eigen website.</p>
          <div className="cta-actions">
            <a href="#pricing" className="btn-white">Start gratis →</a>
            <a href="#examples" className="btn-glass-light">Zie voorbeelden</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <a href="#" className="footer-logo">
                <div className="footer-logo-mark">🏠</div>
                BoostMyRealEstate
              </a>
              <p className="footer-tagline">De toekomst van vakantiewoningen is hier. Bouw jouw eigen platform.</p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Prijzen</a></li>
                <li><a href="#examples">Voorbeelden</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Bedrijf</h4>
              <ul>
                <li><a href="#">Over ons</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Juridisch</h4>
              <ul>
                <li><a href="#">Privacybeleid</a></li>
                <li><a href="#">Gebruiksvoorwaarden</a></li>
                <li><a href="#">Cookie beleid</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2024 BoostMyRealEstate. Alle rechten voorbehouden.</p>
            <div className="footer-legal">
              <a href="#">Privacybeleid</a>
              <a href="#">Gebruiksvoorwaarden</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPaymentModal(false)}>✕</button>
            <h2>Plan: {selectedPlan?.name}</h2>
            <p>€{selectedPlan?.price}/maand</p>
            
            <div className="payment-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Gegevens invoeren</h3>
                  <p>Vul je contactgegevens in</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Betaling</h3>
                  <p>Veilige betaling via Stripe</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Account aanmaken</h3>
                  <p>Je account is klaar!</p>
                </div>
              </div>
            </div>

            <form className="payment-form">
              <input type="email" placeholder="Email adres" required />
              <input type="text" placeholder="Volledige naam" required />
              <button type="button" className="btn-stripe" onClick={() => alert('Stripe integratie - checkout starten')}>
                Doorgaan naar betaling →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
