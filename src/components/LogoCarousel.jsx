'use client'

import React, { useRef, useEffect, useState } from 'react'

const brands = [
  { name: "Levi's",        cat: "Fashion" },
  { name: "Sephora",       cat: "Beauty" },
  { name: "Johnnie Walker",cat: "Spirits" },
  { name: "L'Oreal Paris", cat: "Beauty" },
  { name: "Porsche",       cat: "Automotive" },
  { name: "Disney+",       cat: "Entertainment" },
  { name: "Storytel",      cat: "Media" },
  { name: "Techwish",      cat: "Tech" },
  { name: "Garage",        cat: "Fashion" },
]

// Powiel 4x dla płynnej pętli
const track = [...brands, ...brands, ...brands, ...brands]

export default function LogoCarousel() {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(null)

  return (
    <section className="lc-wrap">

      {/* Eyebrow */}
      <div className="lc-eyebrow">
        <span className="lc-line" />
        <span className="lc-label">Zaufały nam</span>
        <span className="lc-line" />
      </div>

      {/* ROW 1 — leci w lewo */}
      <div
        className="lc-track-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHovered(null) }}
      >
        <div className={`lc-track lc-track--left${paused ? ' lc-paused' : ''}`} ref={row1Ref}>
          {track.map((b, i) => (
            <BrandItem
              key={`r1-${i}`}
              brand={b}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
              size="large"
            />
          ))}
        </div>
      </div>

      {/* ROW 2 — leci w prawo, wolniej */}
      <div
        className="lc-track-wrap lc-track-wrap--sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHovered(null) }}
      >
        <div className={`lc-track lc-track--right${paused ? ' lc-paused' : ''}`} ref={row2Ref}>
          {[...track].reverse().map((b, i) => (
            <BrandItem
              key={`r2-${i}`}
              brand={b}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
              size="small"
            />
          ))}
        </div>
      </div>

      

      <style>{`
        .lc-wrap {
          font-family: 'Satoshi', sans-serif;
          background: #fff;
          padding: 5rem 0 6rem;
          overflow: hidden;
          position: relative;
        }

        /* Eyebrow */
        .lc-eyebrow {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto 3.5rem;
          padding: 0 4rem;
        }
        .lc-line {
          flex: 1;
          height: 1px;
          background: #e8e8e6;
        }
        .lc-label {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.35);
          font-weight: 600;
          white-space: nowrap;
        }

        /* Track */
        .lc-track-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 0;
        }
        .lc-track-wrap::before,
        .lc-track-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 160px;
          z-index: 2;
          pointer-events: none;
        }
        .lc-track-wrap::before {
          left: 0;
          background: linear-gradient(to right, #fff 0%, transparent 100%);
        }
        .lc-track-wrap::after {
          right: 0;
          background: linear-gradient(to left, #fff 0%, transparent 100%);
        }

        .lc-track {
          display: flex;
          align-items: center;
          width: max-content;
          padding: 0.5rem 0;
        }
        .lc-track--left {
          animation: scrollLeft 40s linear infinite;
        }
        .lc-track--right {
          animation: scrollRight 55s linear infinite;
        }
        .lc-paused {
          animation-play-state: paused !important;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-25%); }
          to   { transform: translateX(0); }
        }

        /* Brand item */
        .lc-item {
          display: flex;
          align-items: center;
          gap: 0;
          cursor: default;
          flex-shrink: 0;
          position: relative;
        }
        .lc-name {
          display: block;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          color: rgba(10,10,10,0.12);
          transition: color 0.35s cubic-bezier(0.22,1,0.36,1),
                      transform 0.35s cubic-bezier(0.22,1,0.36,1);
          white-space: nowrap;
          padding: 0.6rem 0;
        }
        .lc-item--large .lc-name {
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          padding: 0.4rem 2.5rem;
        }
        .lc-item--small .lc-name {
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          padding: 0.3rem 2rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .lc-item:hover .lc-name {
          color: #0a0a0a;
          transform: translateY(-2px);
        }

        /* Separator dot */
        .lc-sep {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(10,10,10,0.1);
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .lc-item--large .lc-sep { width: 6px; height: 6px; }
        .lc-item:hover + .lc-item .lc-sep,
        .lc-item:hover .lc-sep {
          background: rgba(10,10,10,0.3);
        }

        /* Category tooltip on hover */
        .lc-cat {
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          background: #0a0a0a;
          padding: 0.25rem 0.7rem;
          border-radius: 9999px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          font-weight: 600;
        }
        .lc-item:hover .lc-cat {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Second row gap */
        .lc-track-wrap--sm {
          margin-top: -0.5rem;
        }

        /* Footer counter */
        .lc-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 4rem;
          padding: 0 4rem;
        }
        .lc-count {
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.05em;
          color: #0a0a0a;
          line-height: 1;
        }
        .lc-count sup {
          font-size: 0.4em;
          vertical-align: super;
          color: rgba(10,10,10,0.4);
        }
        .lc-count-label {
          font-size: 0.8rem;
          color: rgba(10,10,10,0.45);
          line-height: 1.6;
          font-weight: 400;
          max-width: 180px;
        }

        @media (max-width: 640px) {
          .lc-eyebrow { padding: 0 1.5rem; }
          .lc-track-wrap--sm { display: none; }
          .lc-footer { gap: 1rem; }
        }
      `}</style>
    </section>
  )
}

function BrandItem({ brand, index, hovered, setHovered, size }) {
  const isHovered = hovered === `${size}-${index}`
  return (
    <>
      <div
        className={`lc-item lc-item--${size}`}
        onMouseEnter={() => setHovered(`${size}-${index}`)}
        onMouseLeave={() => setHovered(null)}
      >
        <span className="lc-name">{brand.name}</span>
        <span className="lc-cat">{brand.cat}</span>
      </div>
      <span className="lc-sep" />
    </>
  )
}