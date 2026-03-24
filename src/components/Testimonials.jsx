'use client'

import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Center, ContactShadows, Environment, OrbitControls, Float } from '@react-three/drei'

// Ścieżki i skale modeli 3D zostają hardcode — zmieniane bezpośrednio w kodzie
const MODEL_SCALES = [2.5, 1.2, 0.4, 0.3]

// --- Inteligentny Renderer Modeli (obsługujący dwa obiekty) ---
function ModelManager({ url, url2, activeIndex, myIndex }) {
  const { scene: mainScene } = useGLTF(url)
  const secondModel = url2 ? useGLTF(url2) : null

  if (activeIndex !== myIndex) return null

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
      <Center top>
        <group rotation={[0, -Math.PI / 4, 0]}>
          <primitive object={mainScene} scale={MODEL_SCALES[myIndex]} position={[0, 0, 0]} />
          
          {secondModel && (
            <primitive 
              object={secondModel.scene} 
              scale={1.8} 
              position={[1.5, -0.5, 0.5]}
              rotation={[0.2, 0.5, 1.2]}
            />
          )}
        </group>
      </Center>
    </Float>
  )
}

// Dane modeli — ścieżki i kolejność zostają hardcode
const MODEL_DATA = [
  { model: '/step01.glb', model2: '/step01-2.glb' },
  { model: '/step02.glb' },
  { model: '/step03.glb' },
  { model: '/step04.glb' },
]

// Domyślne teksty — używane gdy Sanity nie jest jeszcze skonfigurowane
const DEFAULT_STEPS = [
  { id: '01', title: 'Brief', desc: 'Analizujemy Twoje potrzeby i cele biznesowe. Tworzymy fundament pod projekt.', details: ['KICKOFF', 'STRATEGIA'] },
  { id: '02', title: 'Projekt', desc: 'Przekładamy wizję na konkretne rzuty i wizualizacje 3D.', details: ['DESIGN', 'RENDER'] },
  { id: '03', title: 'Produkcja', desc: 'Rzeczywista budowa konstrukcji w naszym parku maszynowym.', details: ['CNC', 'DRUK'] },
  { id: '04', title: 'Montaż', desc: 'Instalacja gotowej przestrzeni u klienta. Finał procesu.', details: ['LOGISTYKA', 'SETUP'] },
]

export default function UltimateProcess({ steps }) {
  const stepsData = (steps && steps.length === 4)
    ? steps.map((s, i) => ({
        id: String(i + 1).padStart(2, '0'),
        title: s.title,
        desc: s.description,
        details: s.tags || [],
      }))
    : DEFAULT_STEPS

  const STEPS = stepsData.map((s, i) => ({
    ...s,
    ...MODEL_DATA[i],
  }))
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(parseInt(entry.target.getAttribute('data-index')))
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    )
    stepRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="aw-sec">
      <div className="aw-top-header">
        <h2 className="aw-main-title">Kroki współpracy</h2>
      </div>

      <div className="aw-container">
        <div className="aw-left">
          {STEPS.map((step, i) => (
            <div 
              key={step.id} 
              className={`aw-step ${activeStep === i ? 'is-active' : ''}`}
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
            >
              <span className="aw-num">{step.id}</span>
              <h3 className="aw-title">{step.title}</h3>
              <p className="aw-desc">{step.desc}</p>
              <div className="aw-tags">
                {step.details.map(d => <span key={d} className="aw-tag">{d}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="aw-right">
          <div className="aw-sticky-canvas">
            <Canvas shadows camera={{ position: [0, 2, 6], fov: 35 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                
                {STEPS.map((s, i) => (
                  <ModelManager 
                    key={s.id} 
                    url={s.model} 
                    url2={s.model2} 
                    activeIndex={activeStep} 
                    myIndex={i} 
                  />
                ))}

                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2} />
                <ContactShadows position={[0, -1.2, 0]} opacity={0.3} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      <style>{`
        .aw-sec { background: #fff; padding: 10rem 0; }
        .aw-top-header { max-width: 1400px; margin: 0 auto 8rem; padding: 0 4rem; }
        .aw-eyebrow { font-size: 0.7rem; letter-spacing: 0.3em; color: #bbb; font-family: monospace; display: block; margin-bottom: 1rem; }
        .aw-main-title { font-size: 4.5rem; font-weight: 500; letter-spacing: -0.04em; }
        .aw-main-title em { font-style: italic; color: #ddd; font-weight: 400; }
        .aw-container { max-width: 1400px; margin: 0 auto; padding: 0 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; }
        .aw-left { display: flex; flex-direction: column; gap: 22rem; padding-bottom: 20rem; }
        .aw-step { opacity: 0.1; transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
        .aw-step.is-active { opacity: 1; transform: translateX(10px); }
        .aw-num { font-family: monospace; color: #000; font-size: 0.8rem; font-weight: 700; margin-bottom: 1.5rem; display: block; }
        .aw-title { font-size: 4rem; font-weight: 500; margin-bottom: 1.5rem; line-height: 0.9; }
        .aw-desc { font-size: 1.2rem; color: #555; line-height: 1.7; max-width: 420px; margin-bottom: 2.5rem; }
        .aw-tag { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em; color: #aaa; border: 1px solid #eee; padding: 0.4rem 1rem; border-radius: 100px; margin-right: 0.8rem; }
        .aw-right { position: relative; height: 100%; }
        .aw-sticky-canvas { position: sticky; top: 15vh; height: 70vh; width: 100%; display: flex; align-items: center; justify-content: center; cursor: grab; }
        @media (max-width: 1024px) { .aw-container { grid-template-columns: 1fr; } .aw-right { display: none; } .aw-left { gap: 10rem; } }
      `}</style>
    </section>
  )
}