'use client'

import { motion } from 'framer-motion'

const projects = [
	{ img: '/Obraz2.jpg', brand: 'Johnnie Walker', name: 'Strefa Festiwalowa Blonde', location: 'Snowfest · Szczyrk' },
	{ img: '/Obraz3.jpg', brand: "Levi's", name: 'Strefa Kontenerowa', location: 'Warszawa' },
	{ img: '/Obraz4.jpg', brand: 'Sephora', name: 'Beauty Bus', location: '7 lokalizacji · Cała Polska' },
	{ img: '/Obraz5.png', brand: 'Storytel', name: 'Targi Książki', location: 'Kraków EXPO' },
	{ img: '/Obraz6.jpg', brand: "L'Oréal Paris", name: 'Strefa Kontenerowa', location: 'Opener · Gdynia' },
	{ img: '/Obraz7.jpg', brand: 'Porsche', name: 'Kontenery Ekspozycyjne', location: 'Warszawa · 2 lokalizacje' },
	{ img: '/Obraz8.jpg', brand: 'Garage · Snowfest', name: 'Strefa Festiwalowa', location: 'Szczyrk' },
	{ img: '/Obraz9.jpg', brand: 'Disney+', name: 'Strefa Promocyjna Wonderman', location: 'Warszawa · Nowy Świat' },
]

const cardVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.46, 0.45, 0.94],
			delay: (i % 2) * 0.15, // lewa kolumna 0ms, prawa 150ms
		},
	}),
}

export default function Projects() {
	return (
		<section className="relative bg-white z-20 pt-24 pb-24 px-6 md:px-12" id="project-list">
			<div className="max-w-7xl mx-auto">

				<div className="flex items-end justify-between mb-16">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-2 mb-4">
							<span className="text-xl">❖</span>
							<span className="uppercase text-sm tracking-widest text-gray-500">Portfolio</span>
						</div>
						<h3 className="text-5xl md:text-6xl font-medium tracking-tight leading-none">
							Wybrane<br />realizacje
						</h3>
					</motion.div>
					<motion.a
						href="/portfolio"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="hidden md:flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm hover:bg-black hover:text-white transition"
					>
						Wszystkie projekty →
					</motion.a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
					{projects.map((p, i) => (
						<motion.div
							key={i}
							custom={i}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-80px' }}
							className={`group cursor-pointer ${i % 2 === 1 ? 'md:mt-24' : ''}`}
						>
							<div className="overflow-hidden rounded-xl mb-5">
								<motion.img
									src={p.img}
									className="w-full h-[400px] object-cover"
									alt={p.name}
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
								/>
							</div>
							<div className="flex items-start justify-between">
								<div>
									<p className="uppercase text-xs tracking-widest text-gray-400 mb-1">{p.brand}</p>
									<h4 className="text-2xl font-medium leading-tight">{p.name}</h4>
									<p className="text-gray-500 text-sm mt-1">{p.location}</p>
								</div>
								<span className="mt-1 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-sm group-hover:bg-black group-hover:text-white group-hover:border-black transition shrink-0">
									→
								</span>
							</div>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	)
}