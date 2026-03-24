'use client'
import { motion } from 'framer-motion'

const defaultValues = [
    { index: '01', title: 'Jakość bez kompromisów', description: 'Każdy projekt realizujemy z najwyższą precyzją. Własny park maszynowy pozwala nam kontrolować jakość na każdym etapie — od projektu po gotową realizację.' },
    { index: '02', title: 'Kompleksowa obsługa', description: 'Od projektu koncepcyjnego po demontaż po evencie. Jesteśmy z Tobą na każdym kroku — bez pośredników, bez kompromisów.' },
    { index: '03', title: 'Terminowość', description: 'Dotrzymujemy terminów — nawet tych najtrudniejszych. Wiemy, że w branży eventowej czas to kluczowy zasób.' },
    { index: '04', title: 'Partnerskie podejście', description: 'Traktujemy każdego klienta jako partnera. Słuchamy, doradzamy i wspólnie tworzymy rozwiązania, które realizują Twoje cele.' },
]

export default function AboutValues({ values }) {
    const valueList = (values && values.length > 0) ? values : defaultValues
    return (
        <section className="py-40 px-6 md:px-12 bg-white" id="about-values">
            <div className="max-w-7xl mx-auto">
                
                {/* Intro sekcji */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
                    <div className="lg:col-span-8">
                    
                        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-black uppercase leading-[0.85]">
                            To, co nas <br />
                            <span className="italic font-light text-stone-300 ml-[10%] lowercase">definiuje.</span>
                        </h2>
                    </div>
                </div>

                {/* Alternatywny układ listowy - luksusowy i przejrzysty */}
                <div className="space-y-0">
                    {valueList.map((value, i) => (
                        <motion.div
                            key={value.index || value.number || i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 py-16 border-t border-stone-100 hover:bg-stone-50 transition-colors duration-700 px-4"
                        >
                            {/* Numeracja jako subtelny detal */}
                            <div className="lg:col-span-2 mb-4 lg:mb-0">
                                <span className="text-sm font-light italic text-stone-300 group-hover:text-black transition-colors duration-500">
                                    ({value.index || value.number})
                                </span>
                            </div>

                            {/* Tytuł - Duży, pewny siebie */}
                            <div className="lg:col-span-5 mb-6 lg:mb-0">
                                <h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-black group-hover:translate-x-4 transition-transform duration-700">
                                    {value.title}
                                </h3>
                            </div>

                            {/* Opis - Lekki, szeroki interlinia */}
                            <div className="lg:col-span-5">
                                <p className="text-stone-500 text-lg font-light leading-relaxed max-w-md group-hover:text-black transition-colors duration-500">
                                    {value.description || value.desc}
                                </p>
                            </div>

                            {/* Dekoracyjna linia boczna pojawiająca się na hoverze */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                        </motion.div>
                    ))}
                    {/* Zamknięcie ostatniej linii */}
                    <div className="border-t border-stone-100 w-full" />
                </div>

              

            </div>
        </section>
    )
}