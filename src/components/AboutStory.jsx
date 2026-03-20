'use client'

import Link from 'next/link'

export default function AboutStory() {
	return (
		<section className="px-6 md:px-12 max-w-7xl mx-auto" id="about-story">

			{/* Blok 1: tekst po lewej, zdjęcie po prawej */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24 border-b border-gray-200 about-block">
				<div>
					<div className="flex items-center gap-2 mb-4">
						<span className="text-xl">❖</span>
						<span className="uppercase text-sm tracking-widest text-gray-500">Nasza Historia</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
						Ponad dekada doświadczenia<br />w produkcji eventowej.
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed mb-4">
						WPM Solutions to firma specjalizująca się w kompleksowej obsłudze produkcji eventowej.
						Działamy na rynku od ponad 12 lat, realizując projekty dla największych marek
						na polskim i europejskim rynku.
					</p>
					<p className="text-gray-600 text-lg leading-relaxed">
						Naszą siłą jest pełna kontrola nad procesem — od projektu koncepcyjnego,
						przez druk wielkoformatowy, aż po montaż i demontaż na miejscu eventu.
					</p>
				</div>
				<div className="overflow-hidden rounded-xl">
					<img
						src="/Obraz1.jpg"
						className="w-full h-[520px] object-cover hover:scale-105 transition duration-700 ease-out"
						alt="WPM Solutions – historia firmy"
					/>
				</div>
			</div>

			{/* Blok 2: zdjęcie po lewej, tekst po prawej */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24 about-block">
				<div className="overflow-hidden rounded-xl md:order-1">
					<img
						src="/Obraz5.png"
						className="w-full h-[520px] object-cover hover:scale-105 transition duration-700 ease-out"
						alt="WPM Solutions – praca zespołu"
					/>
				</div>
				<div className="md:order-2">
					<div className="flex items-center gap-2 mb-4">
						<span className="text-xl">❖</span>
						<span className="uppercase text-sm tracking-widest text-gray-500">Nasza Misja</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
						Tworzymy przestrzenie,<br />
						<em className="font-normal not-italic text-gray-400">które zostają w pamięci.</em>
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed mb-4">
						Wierzymy, że każde wydarzenie to historia, którą warto opowiedzieć.
						Dlatego do każdego projektu podchodzimy indywidualnie — z pasją, precyzją
						i dbałością o każdy detal.
					</p>
					<p className="text-gray-600 text-lg leading-relaxed mb-8">
						Nasz zespół to specjaliści z wieloletnim doświadczeniem, którzy doskonale
						rozumieją potrzeby klientów i przekładają je na spektakularne realizacje.
					</p>
					<Link
						href="/uslugi"
						className="inline-flex items-center gap-2 border border-black rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition group"
					>
						Nasze Usługi <span className="group-hover:translate-x-1 transition">→</span>
					</Link>
				</div>
			</div>

		</section>
	)
}
