'use client'

import Link from 'next/link'

export default function ServicesList({ services = [] }) {
	const serviceList = services.map((s, i) => ({
		number: String(i + 1).padStart(2, '0'),
		slug: s.slug,
		title: s.title,
		description: s.shortDescription || '',
		image: s.heroImage || '',
		features: s.features || [],
		reverse: i % 2 === 1,
	}))
	return (
		<section className="pb-24 px-6 md:px-12 bg-white" id="services-container">
			<div className="max-w-7xl mx-auto">
				{serviceList.map((service, index) => (
					<div
						key={service.number}
						className={`service-item py-24 flex flex-col md:flex-row gap-16 items-center ${
							index < serviceList.length - 1 ? 'border-b border-gray-200' : ''
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
