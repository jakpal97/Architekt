'use client'

import PortfolioCarousel from '@/components/PortfolioCarousel'

const projects = [
	{
		number: '01',
		brand: 'Johnnie Walker',
		name: 'Strefa Festiwalowa Blonde',
		location: 'Snowfest · Szczyrk',
		year: '2024',
		category: 'Produkcja Eventowa',
		description:
			'Kompleksowa zabudowa strefy festiwalowej dla marki Johnnie Walker Blonde w ramach Snowfest Szczyrk. Projekt obejmował projekt koncepcyjny, produkcję konstrukcji aluminiowych, zadruk wielkoformatowy oraz pełny montaż i demontaż na miejscu. Strefa przyciągnęła ponad 8 000 uczestników przez trzy dni festiwalu.',
		tags: ['Konstrukcja ALU', 'Druk Wielkoformatowy', 'Montaż', 'Branding'],
		images: ['/Obraz2.jpg', '/Obraz7.jpg', '/Obraz8.jpg'],
		reverse: false,
	},
	{
		number: '02',
		brand: "Levi's",
		name: 'Strefa Kontenerowa',
		location: 'Warszawa',
		year: '2024',
		category: 'Aktywacja Marki',
		description:
			'Pop-up strefa kontenerowa dla marki Levi\'s w centrum Warszawy. Zaprojektowaliśmy i zbudowaliśmy mobilną przestrzeń handlową z elementami interaktywnymi, dedykowaną brandingiem zewnętrznym oraz oświetleniem ekspozycyjnym. Projekt był częścią ogólnopolskiej kampanii promocyjnej nowej kolekcji.',
		tags: ['Kontenery', 'Pop-up Store', 'Branding', 'Ekspozytory'],
		images: ['/Obraz3.jpg', '/Obraz2.jpg', '/Obraz9.jpg'],
		reverse: true,
	},
	{
		number: '03',
		brand: 'Sephora',
		name: 'Beauty Bus',
		location: '7 lokalizacji · Cała Polska',
		year: '2023',
		category: 'Kampania Ogólnopolska',
		description:
			'Beauty Bus to mobilna strefa beauty marki Sephora, która odwiedziła 7 miast w Polsce. Projekt wymagał stworzenia kompletnej identyfikacji wizualnej autobusa, stref ekspozycyjnych wewnątrz i na zewnątrz oraz modułowego systemu wystawienniczego. Koordynowaliśmy całą logistykę trasy.',
		tags: ['Vehicle Wrap', 'Ekspozytory', 'Logistyka', 'Identyfikacja'],
		images: ['/Obraz4.jpg', '/Obraz1.jpg', '/Obraz6.jpg'],
		reverse: false,
	},
	{
		number: '04',
		brand: 'Storytel',
		name: 'Targi Książki',
		location: 'Kraków EXPO',
		year: '2023',
		category: 'Stoisko Targowe',
		description:
			'Stoisko targowe dla Storytel na Krakowskich Targach Książki. Koncepcja zakładała stworzenie przestrzeni zachęcającej do odkrywania audiobooków — z fotelami odsłuchowymi, interaktywnymi displejami i wyciszającą akustyką. Stoisko zdobyło nagrodę za najlepszy design na targach.',
		tags: ['Stoisko Targowe', 'Design Wnętrza', 'Akustyka', 'Interaktywność'],
		images: ['/Obraz5.png', '/Obraz3.jpg', '/Obraz7.jpg'],
		reverse: true,
	},
	{
		number: '05',
		brand: "L'Oréal Paris",
		name: 'Strefa Kontenerowa',
		location: 'Opener · Gdynia',
		year: '2023',
		category: 'Produkcja Festiwalowa',
		description:
			'Przestrzeń beauty dla L\'Oréal Paris na festiwalu Opener w Gdyni. Dwupiętrowy kontener ekspozycyjny z salonem makijażu, strefą foto i interaktywną aplikacją AR. Projekt obejmował pełną realizację — od wizualizacji 3D po demontaż po festiwalu.',
		tags: ['Kontenery 2-piętrowe', 'Strefa Foto', 'AR', 'Beauty'],
		images: ['/Obraz6.jpg', '/Obraz4.jpg', '/Obraz8.jpg'],
		reverse: false,
	},
	{
		number: '06',
		brand: 'Porsche',
		name: 'Kontenery Ekspozycyjne',
		location: 'Warszawa · 2 lokalizacje',
		year: '2022',
		category: 'Ekspozycja Premium',
		description:
			'Ekskluzywne kontenery ekspozycyjne dla marki Porsche w dwóch lokalizacjach w Warszawie. Projekt wymagał najwyższych standardów wykończenia — lakiery premium, aluminium szczotkowane, podłogi epoksydowe. Przestrzeń była miejscem prezentacji nowych modeli Porsche 911 oraz Taycan.',
		tags: ['Premium Finish', 'Ekspozycja', 'Konstrukcja Modułowa', 'Branding'],
		images: ['/Obraz7.jpg', '/Obraz1.jpg', '/Obraz5.png'],
		reverse: true,
	},
	{
		number: '07',
		brand: 'Garage · Snowfest',
		name: 'Strefa Festiwalowa',
		location: 'Szczyrk',
		year: '2022',
		category: 'Produkcja Eventowa',
		description:
			'Strefa après-ski marki Garage na Snowfest Szczyrk. Projekt zakładał stworzenie drewniano-stalowej konstrukcji inspirowanej alpejską architekturą. Całość uzupełniały duże formaty graficzne, oświetlenie nastrojowe LED oraz mobilne bary. Strefa stała się jednym z najchętniej fotografowanych miejsc festiwalu.',
		tags: ['Konstrukcja Mieszana', 'Drewno i Stal', 'LED', 'Apres-ski'],
		images: ['/Obraz8.jpg', '/Obraz2.jpg', '/Obraz4.jpg'],
		reverse: false,
	},
	{
		number: '08',
		brand: 'Disney+',
		name: 'Strefa Promocyjna Wonderman',
		location: 'Warszawa · Nowy Świat',
		year: '2022',
		category: 'Kampania Premierowa',
		description:
			'Strefa promocyjna Disney+ z okazji premiery serialu Wonderman na warszawskim Nowym Świecie. Interaktywna przestrzeń z elementami dekoracyjnymi w skali 1:1, strefą foto 360°, gadżetami i animatorami w kostiumach. Przez 3 dni strefę odwiedziło ponad 12 000 osób.',
		tags: ['Dekoracje Wielkoformatowe', 'Foto 360°', 'Animatorzy', 'Branding'],
		images: ['/Obraz9.jpg', '/Obraz6.jpg', '/Obraz3.jpg'],
		reverse: true,
	},
]

export default function PortfolioList() {
	return (
		<section className="pb-24 px-6 md:px-12 bg-white" id="portfolio-container">
			<div className="max-w-7xl mx-auto">
				{projects.map((project, index) => (
					<article
						key={project.number}
						className={`portfolio-item py-20 flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
							index < projects.length - 1 ? 'border-b border-gray-200' : ''
						}`}
					>
						{/* ── Karuzela ── */}
						<div
							className={`w-full md:w-[58%] shrink-0 ${
								project.reverse ? 'md:order-2' : ''
							}`}
						>
							<PortfolioCarousel images={project.images} />
						</div>

						{/* ── Info ── */}
						<div className={`w-full md:flex-1 ${project.reverse ? 'md:order-1' : ''}`}>
							{/* Numer projektu */}
							<span className="block text-[5rem] leading-none font-light text-gray-100 mb-2 tracking-tight select-none">
								{project.number}
							</span>

							{/* Marka + kategoria */}
							<div className="flex items-center gap-3 mb-4">
								<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
									{project.brand}
								</span>
								<span className="text-gray-200 text-sm">·</span>
								<span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
									{project.category}
								</span>
							</div>

							{/* Tytuł */}
							<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-4">
								{project.name}
							</h2>

							{/* Lokalizacja + rok */}
							<div className="flex items-center gap-3 mb-6">
								<svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="text-gray-400 shrink-0" aria-hidden="true">
									<path d="M6 1C3.8 1 2 2.8 2 5c0 3.2 4 8 4 8s4-4.8 4-8c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
									<circle cx="6" cy="5" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
								</svg>
								<span className="text-gray-500 text-sm">{project.location}</span>
								<span className="text-gray-200">·</span>
								<span className="text-gray-400 text-sm font-mono">{project.year}</span>
							</div>

							{/* Separator */}
							<div className="w-12 h-px bg-gray-200 mb-6" />

							{/* Opis */}
							<p className="text-gray-600 text-base leading-relaxed mb-8">
								{project.description}
							</p>

							{/* Tagi */}
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 border border-gray-200 rounded-full px-4 py-1.5"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
