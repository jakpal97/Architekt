'use client'

import Link from 'next/link'

export default function About() {
	return (
		<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white" id="about">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
				<div id="about-text">
					<div className="flex items-center gap-2 mb-4">
						<span className="text-xl">❖</span>
						<span className="uppercase text-sm tracking-widest text-gray-500">O Nas</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
						Jesteśmy młodą i prężnie działającą ekipą z ogromnym doświadczeniem w produkcji eventowej.
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed">
						Specjalizujemy się w działaniach outdoor, produkcjach eventowych, akcjach promocyjnych i eventach.
						Zajmujemy się wydrukami wielkoformatowymi – od siatek mesh po folię polimerową poprzez nadruk
						na materiałach płaskich.
					</p>
					<Link href="/o-nas" className="mt-8 inline-flex border border-black rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition items-center gap-2 group">
						Dowiedz Się Więcej <span className="group-hover:translate-x-1 transition">→</span>
					</Link>
				</div>

				<div className="flex flex-col gap-4">
					<div className="about-img-wrapper overflow-hidden rounded-xl aspect-video">
						<img
							src="/Obraz5.png"
							className="w-full h-full object-cover about-img"
							alt="Strefa eventowa"
						/>
					</div>
					<div className="about-img-wrapper overflow-hidden rounded-xl aspect-video">
						<img
							src="/Obraz4.jpg"
							className="w-full h-full object-cover about-img"
							alt="Wnętrze strefy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}