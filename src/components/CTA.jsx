'use client'

import { useState } from 'react'

const DEFAULT_SCOPE = ['Projekty', 'Outdoor', 'Druk', 'Produkcja', 'Logistyka', 'Kompleksowo']
const DEFAULT_STATS = [
  { number: '340+', label: 'REALIZACJI' },
  { number: '12', label: 'LAT DOŚWIADCZENIA' },
]

export default function AwardWinningCTA({ headline, leadText, stats, scopeOptions }) {
	const [selected, setSelected] = useState([])
	const [step, setStep] = useState(0)

	const ctaHeadline = headline || 'Stwórzmy razem coś niezwykłego.'
	const ctaLead = leadText || 'Masz projekt? Opisz go nam w dwóch zdaniach. Wrócimy z wyceną i koncepcją w ciągu 48 godzin.'
	const ctaStats = stats?.length ? stats : DEFAULT_STATS
	const scope = scopeOptions?.length ? scopeOptions : DEFAULT_SCOPE

	const toggle = s => setSelected(p => (p.includes(s) ? p.filter(x => x !== s) : [...p, s]))

	return (
		<section className="cta-final">
			<div className="cta-wrapper">
				<div className="cta-header">
					<span className="cta-small-label">// KONTAKT</span>
					<h2 className="cta-huge-title">
						{ctaHeadline}
					</h2>
				</div>

				<div className="cta-content-grid">
					<div className="cta-info-col">
						<p className="cta-lead-text">{ctaLead}</p>
						<div className="cta-contact-details">
							{ctaStats.map((stat, i) => (
								<p key={i} className="cta-stat-item">
									{stat.number} {stat.label}
								</p>
							))}
						</div>
					</div>

					<div className="cta-form-col">
						{step === 0 ? (
							<form
								className="minimal-form"
								onSubmit={e => {
									e.preventDefault()
									setStep(1)
								}}>
								<div className="form-row">
									<div className="input-group">
										<label>NAZWISKO / FIRMA</label>
										<input type="text" placeholder="Jan Kowalski" required />
									</div>
									<div className="input-group">
										<label>E-MAIL</label>
										<input type="email" placeholder="hello@firma.pl" required />
									</div>
								</div>

								<div className="input-group">
									<label>ZAKRES</label>
									<div className="pill-grid">
										{scope.map(s => (
											<button
												key={s}
												type="button"
												onClick={() => toggle(s)}
												className={`pill-btn ${selected.includes(s) ? 'active' : ''}`}>
												{s}
											</button>
										))}
									</div>
								</div>

								<div className="input-group">
									<label>TWOJA WIZJA</label>
									<textarea placeholder="O czym myślisz?" rows={1} />
								</div>

								<button type="submit" className="huge-submit-btn">
									WYŚLIJ ZAPYTANIE <span>→</span>
								</button>
							</form>
						) : (
							<div className="success-message">
								<h3 className="success-title">Dziękujemy.</h3>
								<p>Twoja wiadomość jest już w naszej skrzynce.</p>
								<button onClick={() => setStep(0)} className="reset-btn">
									Wyślij ponownie
								</button>
							</div>
						)}
					</div>
				</div>
			</div>

			<style>{`
        .cta-final { background: #fff; padding: 12rem 4rem; color: #0a0a0a; border-top: 1px solid #f0f0f0; }
        .cta-wrapper { max-width: 1400px; margin: 0 auto; }

        .cta-small-label { font-size: 0.7rem; letter-spacing: 0.3em; color: #bbb; font-family: ui-monospace, monospace; }
        
        .cta-huge-title { 
          font-size: clamp(3.5rem, 10vw, 9rem); 
          font-weight: 500; 
          letter-spacing: -0.05em; 
          line-height: 0.9; 
          margin: 2rem 0 8rem;
        }
        .cta-huge-title em { font-style: italic; color: #ddd; font-weight: 400; }

        .cta-content-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 6rem; align-items: start; }

        .cta-lead-text { font-size: 1.4rem; line-height: 1.5; color: #555; margin-bottom: 4rem; max-width: 400px; }
        .cta-link { font-size: 1.1rem; text-decoration: none; color: #0a0a0a; border-bottom: 1px solid #eee; padding-bottom: 5px; transition: border-color 0.3s; }
        .cta-link:hover { border-color: #0a0a0a; }
        
        .cta-stat-item { font-size: 0.7rem; letter-spacing: 0.2em; color: #bbb; margin-top: 2rem; font-weight: 700; }

        .minimal-form { display: flex; flex-direction: column; gap: 4rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        
        .input-group { display: flex; flex-direction: column; gap: 1rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; transition: border-color 0.4s; }
        .input-group:focus-within { border-color: #0a0a0a; }
        
        .input-group label { font-size: 0.65rem; letter-spacing: 0.2em; color: #bbb; font-weight: 700; }
        .input-group input, .input-group textarea { 
          background: transparent; border: none; outline: none; 
          font-size: 1.2rem; color: #0a0a0a; font-family: inherit;
        }

        .pill-grid { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1rem; }
        .pill-btn { 
          padding: 0.6rem 1.4rem; border: 1px solid #eee; background: none; 
          border-radius: 100px; font-size: 0.8rem; cursor: pointer; transition: all 0.3s;
          text-transform: uppercase; letter-spacing: 0.1em; color: #999;
        }
        .pill-btn.active { background: #0a0a0a; color: #fff; border-color: #0a0a0a; }

        .huge-submit-btn { 
          background: #0a0a0a; color: #fff; border: none; 
          padding: 1.5rem 3rem; border-radius: 100px; font-size: 1.1rem; 
          font-weight: 600; cursor: pointer; display: flex; 
          justify-content: space-between; align-items: center;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); margin-top: 2rem;
        }
        .huge-submit-btn:hover { 
          transform: translateY(-5px) scale(1.02); background: #222; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .huge-submit-btn span {
          background: #fff; color: #000; width: 32px; height: 32px;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          margin-left: 2rem; transition: transform 0.3s ease;
        }
        .huge-submit-btn:hover span { transform: translateX(5px); }

        .success-title { font-size: 4rem; letter-spacing: -0.04em; margin-bottom: 1rem; }
        .reset-btn { background: none; border: none; text-decoration: underline; cursor: pointer; margin-top: 2rem; color: #999; }

        @media (max-width: 1024px) {
          .cta-content-grid { grid-template-columns: 1fr; gap: 4rem; }
          .cta-huge-title { margin-bottom: 4rem; }
          .form-row { grid-template-columns: 1fr; gap: 4rem; }
        }
      `}</style>
		</section>
	)
}
