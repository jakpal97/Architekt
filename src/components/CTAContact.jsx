'use client'

import { useRef, useEffect, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const SERVICES_OPTIONS = [
  'Projekty & Koncepcja',
  'Kampanie Outdoor',
  'Druk Wielkoformatowy',
  'Produkcja Nośników',
  'Logistyka i Montaż',
  'Kompleksowa Obsługa',
]

export default function CTAContact() {
  const { ref, inView } = useInView(0.05)
  const [selected, setSelected] = useState([])
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const toggleService = (s) =>
    setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="cta-wrap" ref={ref}>

      {/* ── Left: Video CTA ── */}
      <div
        className="cta-left"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-32px)',
          transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Video background */}
        <div className="cta-video-wrap" aria-hidden="true">
          <video
            className="cta-video"
            autoPlay muted loop playsInline
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          >
            <source
              src="https://player.vimeo.com/external/371836154.sd.mp4?s=d08405aa6b6b7724283597d5b1216d6833f7c460&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="cta-video-overlay" />
        </div>

        {/* Content over video */}
        <div className="cta-left-content">
          {/* Top label */}
          <p className="cta-eyebrow">— Zaczynamy?</p>

          {/* Headline */}
          <h2 className="cta-heading">
            Stwórzmy<br/>
            coś, czego<br/>
            <em>nie zapomnisz.</em>
          </h2>

          {/* Stats row */}
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="cta-stat-num">340+</span>
              <span className="cta-stat-lbl">Realizacji</span>
            </div>
            <div className="cta-stat-divider" aria-hidden="true" />
            <div className="cta-stat">
              <span className="cta-stat-num">12</span>
              <span className="cta-stat-lbl">Lat na rynku</span>
            </div>
            <div className="cta-stat-divider" aria-hidden="true" />
            <div className="cta-stat">
              <span className="cta-stat-num">48h</span>
              <span className="cta-stat-lbl">Czas odpowiedzi</span>
            </div>
          </div>

          {/* Bottom info */}
          <div className="cta-contact-info">
            <a href="mailto:hello@wpmsolutions.pl" className="cta-info-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              hello@wpmsolutions.pl
            </a>
            <a href="tel:+48000000000" className="cta-info-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M4.5 1.5c.3 0 .6.2.7.5l.8 2c.1.3 0 .7-.3.9l-.9.7c.6 1.3 1.6 2.3 2.9 2.9l.7-.9c.2-.3.6-.4.9-.3l2 .8c.3.1.5.4.5.7v2c0 .5-.4.9-.9.9C4.7 12.5 1.5 9.3 1.5 5.4c0-.5.4-.9.9-.9h2.1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +48 000 000 000
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: Form ── */}
      <div
        className="cta-right"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(32px)',
          transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s',
        }}
      >
        {sent ? (
          /* ── Success state ── */
          <div className="cta-success">
            <div className="cta-success-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#0a0a0a" strokeWidth="1.5"/>
                <path d="M8 14l4 4 8-8" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="cta-success-h">Wiadomość wysłana</h3>
            <p className="cta-success-p">
              Dziękujemy za kontakt. Odezwiemy się w ciągu 48&nbsp;godzin.
            </p>
            <button onClick={() => setSent(false)} className="cta-success-back">
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="cta-form" noValidate>
            <div className="cta-form-header">
              <p className="cta-form-eyebrow">Napisz do nas</p>
              <p className="cta-form-note">Odpowiadamy w ciągu 48h</p>
            </div>

            {/* Name + Company */}
            <div className="cf-row">
              <div className={`cf-field${focused === 'name' ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="cf-name">Imię i Nazwisko</label>
                <input
                  id="cf-name" name="name" type="text" required
                  placeholder="Jan Kowalski"
                  className="cf-input"
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className={`cf-field${focused === 'company' ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="cf-company">Firma</label>
                <input
                  id="cf-company" name="company" type="text"
                  placeholder="Nazwa firmy"
                  className="cf-input"
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            {/* Email */}
            <div className={`cf-field${focused === 'email' ? ' cf-field--active' : ''}`}>
              <label className="cf-label" htmlFor="cf-email">Adres e-mail</label>
              <input
                id="cf-email" name="email" type="email" required
                placeholder="jan@firma.pl"
                className="cf-input"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Service pills */}
            <div className="cf-services">
              <span className="cf-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                Zakres współpracy
              </span>
              <div className="cf-pills">
                {SERVICES_OPTIONS.map(s => (
                  <button
                    key={s} type="button"
                    onClick={() => toggleService(s)}
                    className={`cf-pill${selected.includes(s) ? ' cf-pill--on' : ''}`}
                    aria-pressed={selected.includes(s)}
                  >
                    {selected.includes(s) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className={`cf-field${focused === 'msg' ? ' cf-field--active' : ''}`}>
              <label className="cf-label" htmlFor="cf-msg">Wiadomość</label>
              <textarea
                id="cf-msg" name="message" rows={4}
                placeholder="Opowiedz nam o swoim projekcie — skala, termin, lokalizacja..."
                className="cf-input cf-textarea"
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="cf-submit">
              <span>Wyślij zapytanie</span>
              <span className="cf-submit-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </form>
        )}
      </div>

      {/* ── Styles ── */}
      <style>{`

        /* Wrap */
        .cta-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          background: #f8f8f6;
          overflow: hidden;
        }

        /* ── LEFT ── */
        .cta-left {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 4rem 4rem;
          min-height: 70vh;
        }

        /* Video */
        .cta-video-wrap {
          position: absolute; inset: 0; z-index: 0;
        }
        .cta-video {
          position: absolute;
          top: 50%; left: 50%;
          min-width: 100%; min-height: 100%;
          width: auto; height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
        .cta-video-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,10,0.88) 0%,
            rgba(10,10,10,0.55) 50%,
            rgba(10,10,10,0.25) 100%
          );
        }

        /* Left content */
        .cta-left-content {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; gap: 2.5rem;
        }
        .cta-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-family: monospace;
        }
        .cta-heading {
          font-size: clamp(2.6rem, 4.5vw, 5rem);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.0;
          color: #fff;
          margin: 0;
        }
        .cta-heading em {
          font-style: italic;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
        }

        /* Stats */
        .cta-stats {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }
        .cta-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .cta-stat-num {
          font-size: 1.9rem;
          font-weight: 500;
          letter-spacing: -0.03em;
          color: #fff; line-height: 1;
        }
        .cta-stat-lbl {
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          font-family: monospace;
        }
        .cta-stat-divider {
          width: 1px; height: 2.5rem;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        /* Contact info links */
        .cta-contact-info {
          display: flex; flex-direction: column; gap: 0.65rem;
        }
        .cta-info-link {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
          width: fit-content;
        }
        .cta-info-link:hover { color: #fff; }

        /* ── RIGHT ── */
        .cta-right {
          background: #fff;
          padding: 4rem 4rem;
          display: flex;
          align-items: center;
          overflow-y: auto;
          border-left: 1px solid #ebebeb;
        }

        /* Form */
        .cta-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cta-form-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ebebeb;
        }
        .cta-form-eyebrow {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: #0a0a0a;
        }
        .cta-form-note {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #bbb;
          font-family: monospace;
        }

        /* Field */
        .cf-field {
          position: relative;
          border-bottom: 1px solid #e8e8e8;
          margin-bottom: 0;
          transition: border-color 0.25s;
        }
        .cf-field--active { border-color: #0a0a0a; }
        .cf-field::after {
          content: '';
          position: absolute; bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #0a0a0a;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .cf-field--active::after { width: 100%; }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 2rem;
        }

        .cf-label {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #bbb;
          font-family: monospace;
          padding-top: 1.2rem;
          padding-bottom: 0.3rem;
        }
        .cf-input {
          width: 100%;
          background: transparent;
          border: none; outline: none;
          font-size: 0.95rem;
          color: #0a0a0a;
          padding-bottom: 1rem;
          font-family: inherit;
          resize: none;
          -webkit-appearance: none;
        }
        .cf-input::placeholder { color: #ccc; }
        .cf-textarea { min-height: 90px; }

        /* Service pills */
        .cf-services { padding: 1.4rem 0 1.2rem; }
        .cf-pills {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
        }
        .cf-pill {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          font-family: monospace;
          text-transform: uppercase;
          color: #888;
          background: #f2f2f0;
          border: 1px solid transparent;
          border-radius: 9999px;
          padding: 0.3rem 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .cf-pill:hover {
          background: #ebebeb;
          color: #0a0a0a;
        }
        .cf-pill--on {
          background: #0a0a0a;
          color: #fff;
          border-color: #0a0a0a;
        }
        .cf-pill--on:hover {
          background: #333;
          color: #fff;
        }

        /* Submit */
        .cf-submit {
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: #0a0a0a;
          color: #f8f8f6;
          border: none;
          padding: 1.1rem 1.4rem 1.1rem 1.8rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
        }
        .cf-submit:hover { background: #222; transform: translateY(-1px); }
        .cf-submit:active { transform: translateY(0); }
        .cf-submit-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .cf-submit:hover .cf-submit-icon { background: rgba(255,255,255,0.2); }

        /* Success */
        .cta-success {
          width: 100%;
          display: flex; flex-direction: column;
          align-items: flex-start; gap: 1.2rem;
        }
        .cta-success-icon {
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
        }
        .cta-success-h {
          font-size: 1.8rem; font-weight: 500;
          letter-spacing: -0.025em; color: #0a0a0a;
          margin: 0;
        }
        .cta-success-p {
          font-size: 0.95rem; line-height: 1.7; color: #666;
          max-width: 320px;
        }
        .cta-success-back {
          margin-top: 0.5rem;
          font-size: 0.78rem; font-weight: 500;
          color: #0a0a0a; background: none; border: none;
          text-decoration: underline; text-underline-offset: 3px;
          cursor: pointer; padding: 0;
          transition: opacity 0.2s;
        }
        .cta-success-back:hover { opacity: 0.5; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cta-wrap { grid-template-columns: 1fr; min-height: auto; }
          .cta-left { min-height: 60vh; padding: 3rem 2.5rem; }
          .cta-right { padding: 3.5rem 2.5rem; border-left: none; border-top: 1px solid #ebebeb; }
          .cta-heading { font-size: clamp(2.4rem, 6vw, 4rem); }
        }

        @media (max-width: 640px) {
          .cta-left { min-height: 55vh; padding: 2.5rem 1.5rem; }
          .cta-right { padding: 3rem 1.5rem; }
          .cf-row { grid-template-columns: 1fr; }
          .cta-stats { gap: 1.2rem; }
          .cta-stat-num { font-size: 1.5rem; }
        }

        @media (max-width: 480px) {
          .cta-left, .cta-right { padding-left: 1.25rem; padding-right: 1.25rem; }
          .cta-form-header { flex-direction: column; gap: 0.4rem; }
        }
      `}</style>
    </section>
  )
}