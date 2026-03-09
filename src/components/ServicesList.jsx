'use client'

import Link from 'next/link'

const services = [
	{
		number: '01',
		slug: 'projekty',
		title: 'Projekty & Koncepcja',
		description:
			'Każdy projekt zaczyna się od idei. Tworzymy koncepcje przestrzeni eventowych — od szkicu po fotorealistyczną wizualizację 3D. Zanim wbijemy pierwszy gwóźdź, widzisz dokładnie efekt końcowy',
		image: '/Obraz1.jpg',
		features: ['KONCEPCJA', 'WIZUALIZACJA 3D', 'DOBÓR MATERIAŁÓW'],
		reverse: false,
	},
	{
		number: '02',
		slug: 'outdoor-events',
		title: ' Kampanie Outdoor & Produkcja Eventowa',
		description:
			'Budujemy przestrzenie, które zatrzymują ludzi w miejscu. Stoiska targowe, strefy aktywacji marki, zabudowy eventowe — projektowane z myślą o Twoim kliencie i jego emocjach.',
		image: '/Obraz2.jpg',
		features: ['STOISKA TARGOWE', 'AKTYWACJE MARKI', 'PRODUKCJA EVENTOWA'],
		reverse: true,
	},
	{
		number: '03',
		slug: 'druk-wielkoformatowy',
		title: 'Druk Wielkoformatowy',
		description:
			'Własny park maszynowy pozwala nam kontrolować każdy etap produkcji. Wielkoformatowy druk, cięcie, wyklejanie i montaż — wszystko pod jednym dachem, bez pośredników.',
		image: '/Obraz3.jpg',
		features: [' DRUK WIELKOFORMATOWY',' WYKLEJANIE','MONTAŻ'],
		reverse: false,
	},
	{
		number: '04',
		slug: 'produkcja-nosnikow-i-kostrukcji',
		title: 'Produkcja Nośników & Konstrukcji',
		description:
			'Specjalizujemy się w budowie konstrukcji aluminiowych i ekspozytorów na wymiar. Jeśli nie istnieje gotowe rozwiązanie — projektujemy i produkujemy je od zera.',
		image: '/Obraz4.jpg',
		features: ['KONSTRUKCJE ALU', 'EKSPOZYTORY','PRODUKCJA CUSTOM'],
		reverse: true,
	},
	{
		number: '05',
		slug: 'logistyka-i-montaz',
		title: ' Logistyka & Montaż',
		description:
			'Dostarczamy, montujemy i nadzorujemy. Nasz zespół obsługuje cały proces na miejscu — od załadunku po demontaż po evencie. Ty skupiasz się na gościach, my na reszcie.',
		image: '/Obraz6.jpg',
		features: ['TRANSPORT', 'MONTAŻ NA MIEJSCU',' DEMONTAŻ'],
		reverse: false,
	},
]

export default function ServicesList() {
	return (
		<section className="pb-24 px-6 md:px-12 bg-white" id="services-container">
			<div className="max-w-7xl mx-auto">
				{services.map((service, index) => (
					<div
						key={service.number}
						className={`service-item py-24 flex flex-col md:flex-row gap-16 items-center ${
							index < services.length - 1 ? 'border-b border-gray-200' : ''
						}`}
					>
						<div
							className={`w-full md:w-1/2 overflow-hidden rounded-lg ${service.reverse ? 'md:order-2' : ''}`}
						>
							<img
								src={service.image}
								className="w-full h-[500px] object-cover hover:scale-105 transition duration-700 ease-out service-img"
								alt={service.title}
							/>
						</div>
						<div className={`w-full md:w-1/2 ${service.reverse ? 'md:order-1' : ''}`}>
							<span className="text-gray-400 text-6xl font-light mb-6 block">{service.number}</span>
							<h2 className="text-4xl md:text-5xl font-medium mb-6">{service.title}</h2>
							<p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
							{service.features.length > 0 && (
								<ul className="space-y-2 text-gray-500 mb-8">
									{service.features.map(feature => (
										<li key={feature} className="flex items-center gap-2">
											● {feature}
										</li>
									))}
								</ul>
							)}
							<Link
								href={`/uslugi/${service.slug}`}
								className="border border-black rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition inline-flex items-center gap-2"
							>
								Zobacz Projekty <span>→</span>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
