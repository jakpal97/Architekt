'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const SERVICES = [
  { id: '01', title: 'Projekty', sub: 'Koncepcja & BIM', desc: 'Integracja naturalnego środowiska z architekturą poprzez planowanie przestrzeni.', img: '/Obraz6.jpg' },
  { id: '02', title: 'Kampanie Outdoor', sub: 'Kampanie & Branding', desc: 'Projektowanie funkcjonalnych, estetycznie przyjemnych przestrzeni zewnętrznych.', img: '/Obraz7.jpg' },
  { id: '03', title: 'Druk Wielkoformatowy', sub: 'Wielki Format', desc: 'Od siatek mesh po folię polimerową — perfekcyjna realizacja w każdej skali.', img: '/Obraz6.jpg' },
  { id: '04', title: 'Produkcja nośników i konstrukcji niestandardowych', sub: 'Nośniki & Eventy', desc: 'Niestandardowe nośniki reklamowe i konstrukcje eventowe szyte na miarę.', img: '/Obraz8.jpg' },
  { id: '05', title: 'Logistyka i Montaż', sub: 'Montaż & Transport', desc: 'Pełna obsługa logistyczna — montaż i demontaż na miejscu eventu.', img: '/Obraz7.jpg' },
]

export default function ServiceCube() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const { top, height } = containerRef.current.getBoundingClientRect()
      // Obliczamy postęp scrolla wewnątrz sekcji (0 do 1)
      const scrollFraction = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))
      const step = Math.min(SERVICES.length - 1, Math.floor(scrollFraction * SERVICES.length))
      setActive(step)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="cube-sec">
      <div className="cube-sticky">
        
        {/* Dynamiczny nagłówek */}
        <div className="cube-header">
          <p className="cube-eyebrow">// USŁUGI</p>
          <h2 className="cube-h2">Co <em>tworzymy</em></h2>
        </div>

        {/* Scena 3D */}
        <div className="cube-scene">
          <div 
            className="cube-main" 
            style={{ transform: `rotateX(${active * 90}deg)` }}
          >
            {SERVICES.map((s, i) => (
              <div 
                key={s.id} 
                className={`cube-face face-${i}`}
                style={{ transform: `rotateX(-${i * 90}deg) translateZ(250px)` }}
              >
                <div className="face-content">
                  <div className="face-text">
                    <span className="face-num">{s.id}</span>
                    <h3 className="face-title">{s.title}</h3>
                    <p className="face-sub">{s.sub}</p>
                    <p className="face-desc">{s.desc}</p>
                    <Link href="/uslugi" className="face-link">Szczegóły →</Link>
                  </div>
                  <div className="face-img-wrap">
                    <img src={s.img} alt={s.title} className="face-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nawigacja boczna */}
        <div className="cube-dots">
          {SERVICES.map((_, i) => (
            <div key={i} className={`cube-dot ${active === i ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      <style>{`
        .cube-sec { height: 500vh; background: #fff; position: relative; }
        .cube-sticky { 
          position: sticky; top: 0; height: 100vh; 
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .cube-header { position: absolute; top: 6rem; left: 4rem; z-index: 10; }
        .cube-eyebrow { font-size: 0.7rem; letter-spacing: 0.3em; color: #bbb; margin-bottom: 1rem; }
        .cube-h2 { font-size: 4rem; font-weight: 500; letter-spacing: -0.04em; line-height: 0.9; }
        .cube-h2 em { font-style: italic; font-weight: 300; color: #ccc; }

        /* SCENA 3D */
        .cube-scene {
          perspective: 1500px;
          width: 100%;
          max-width: 1200px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cube-main {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cube-face {
          position: absolute;
          inset: 0;
          background: #fff;
          backface-visibility: hidden;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .face-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          width: 100%;
          align-items: center;
        }

        .face-num { font-size: 0.8rem; font-weight: 700; color: #eee; display: block; margin-bottom: 1rem; }
        .face-title { font-size: 5rem; font-weight: 500; letter-spacing: -0.05em; line-height: 1; margin-bottom: 1rem; }
        .face-sub { font-size: 1rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 2rem; }
        .face-desc { font-size: 1.1rem; color: #555; line-height: 1.6; max-width: 380px; margin-bottom: 2.5rem; }
        .face-link { text-decoration: none; color: #000; font-weight: 600; border-bottom: 1px solid #000; padding-bottom: 5px; }

        .face-img-wrap { width: 100%; height: 400px; overflow: hidden; background: #f9f9f9; border-radius: 0.75rem; }
        .face-img { width: 100%; height: 100%; object-fit: cover; }

        .cube-dots {
          position: absolute; right: 4rem; top: 50%; transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 1rem;
        }
        .cube-dot { width: 4px; height: 4px; background: #eee; border-radius: 50%; transition: all 0.4s ease; }
        .cube-dot.active { background: #000; transform: scale(2.5); }

        @media (max-width: 1024px) {
          .face-content { grid-template-columns: 1fr; gap: 2rem; }
          .face-img-wrap { display: none; }
          .face-title { font-size: 3rem; }
        }
      `}</style>
    </section>
  )
}