'use client'

import Link from 'next/link'

const defaultStory = [
	{
		title: 'Ponad dekada doświadczenia w produkcji eventowej.',
		subtitle: 'Nasza Historia',
		description: 'WPM Solutions to firma specjalizująca się w kompleksowej obsłudze produkcji eventowej. Działamy na rynku od ponad 12 lat, realizując projekty dla największych marek na polskim i europejskim rynku. Naszą siłą jest pełna kontrola nad procesem — od projektu koncepcyjnego, przez druk wielkoformatowy, aż po montaż i demontaż na miejscu eventu.',
		image: '/Obraz1.jpg',
	},
	{
		title: 'Tworzymy przestrzenie, które zostają w pamięci.',
		subtitle: 'Nasza Misja',
		description: 'Wierzymy, że każde wydarzenie to historia, którą warto opowiedzieć. Dlatego do każdego projektu podchodzimy indywidualnie — z pasją, precyzją i dbałością o każdy detal. Nasz zespół to specjaliści z wieloletnim doświadczeniem, którzy doskonale rozumieją potrzeby klientów i przekładają je na spektakularne realizacje.',
		image: '/Obraz5.png',
	},
]

export default function AboutStory({ story }) {
	const blocks = (story && story.length > 0) ? story : defaultStory

	return (
		<section className="px-6 md:px-12 max-w-7xl mx-auto" id="about-story">
			{blocks.map((block, i) => (
				<div
					key={i}
					className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24 about-block ${i < blocks.length - 1 ? 'border-b border-gray-200' : ''}`}
				>
					{i % 2 === 0 ? (
						<>
							<div>
								<div className="flex items-center gap-2 mb-4">
									<span className="text-xl">❖</span>
									<span className="uppercase text-sm tracking-widest text-gray-500">{block.subtitle}</span>
								</div>
								<h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
									{block.title}
								</h2>
								<p className="text-gray-600 text-lg leading-relaxed">{block.description}</p>
							</div>
							<div className="overflow-hidden rounded-xl">
								<img
									src={block.image}
									className="w-full h-[520px] object-cover hover:scale-105 transition duration-700 ease-out"
									alt={block.subtitle}
								/>
							</div>
						</>
					) : (
						<>
							<div className="overflow-hidden rounded-xl md:order-1">
								<img
									src={block.image}
									className="w-full h-[520px] object-cover hover:scale-105 transition duration-700 ease-out"
									alt={block.subtitle}
								/>
							</div>
							<div className="md:order-2">
								<div className="flex items-center gap-2 mb-4">
									<span className="text-xl">❖</span>
									<span className="uppercase text-sm tracking-widest text-gray-500">{block.subtitle}</span>
								</div>
								<h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
									{block.title}
								</h2>
								<p className="text-gray-600 text-lg leading-relaxed mb-8">{block.description}</p>
								<Link
									href="/uslugi"
									className="inline-flex items-center gap-2 border border-black rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition group"
								>
									Nasze Usługi <span className="group-hover:translate-x-1 transition">→</span>
								</Link>
							</div>
						</>
					)}
				</div>
			))}
		</section>
	)
}
