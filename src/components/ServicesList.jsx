'use client'

import Link from 'next/link'

const services = [
	{
		number: '01',
		slug: 'home-decoration',
		title: 'Home Decoration',
		description:
			'Integrating the natural environment with architectural design through outdoor space planning. We focus on curating spaces that feel personal, organic, and inherently peaceful.',
		image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
		features: ['Furniture Selection', 'Color Consultation', 'Lighting Design'],
		reverse: false,
	},
	{
		number: '02',
		slug: 'interior-design',
		title: 'Interior Design',
		description:
			'Designing functional, aesthetically pleasing interiors that complement the architecture. We balance form and function to create workspaces and homes that inspire creativity.',
		image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
		features: ['Space Planning', 'Custom Millwork', 'Material Selection'],
		reverse: true,
	},
	{
		number: '03',
		slug: 'architectural-design',
		title: 'Architectural Design',
		description:
			"Creating initial design concepts, sketches, and ideas based on the client's vision. From skyscrapers to boutique villas, we shape the skyline.",
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
		features: [],
		reverse: false,
	},
	{
		number: '04',
		slug: 'commercial-design',
		title: 'Commercial Design',
		description:
			'Designing spaces to be inclusive and accessible, complying with new ADA standards. We build retail and office environments that drive business growth.',
		image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1932&auto=format&fit=crop',
		features: [],
		reverse: true,
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
								View Projects <span>→</span>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
