'use client'
import { motion } from 'framer-motion'

const defaultStats = [
    { number: '340+', label: 'Realizacji', description: "Dla marek takich jak Porsche, L'Oréal, Disney+" },
    { number: '12', label: 'Lat doświadczenia', description: 'Doświadczenie zdobyte na rynkach w Polsce i Europie' },
    { number: '48h', label: 'Czas reakcji', description: 'Błyskawiczne wsparcie i przystąpienie do działania' },
    { number: '200+', label: 'Klientów', description: 'Zaufali nam liderzy branży z całej Polski' },
]

export default function AboutNumbers({ stats }) {
    const statList = (stats && stats.length > 0) ? stats : defaultStats
    return (
        <section className="bg-black py-32 px-6 md:px-12 border-y border-stone-900" id="about-numbers">
            <div className="max-w-7xl mx-auto">
                
                {/* Poprawiony tytuł: Bold, Tighter, Sentence Case jak na Home */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-white text-xl">❖</span>
                        <span className="uppercase text-[11px] tracking-[0.3em] font-bold text-stone-500">
                            WPM Solutions w liczbach
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                        Nasza skala <br /> działania
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {statList.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col"
                        >
                            {/* Linia - teraz jaśniejsza na starcie */}
                            <div className="w-full h-[1px] bg-stone-800 mb-8 group-hover:bg-white transition-colors duration-500" />
                            
                            {/* Liczba: Bold i Biała */}
                            <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                                {stat.number}
                            </span>
                            
                            {/* Etykieta: Czysta biel dla lepszej widoczności */}
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-3">
                                {stat.label}
                            </span>
                            
                            {/* Opis: Stone-400 zamiast 600 - znacznie czytelniejszy na czarnym tle */}
                            <p className="text-sm text-stone-400 leading-relaxed font-light max-w-[220px]">
                                {stat.description || stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}