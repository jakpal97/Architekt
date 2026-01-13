'use client'

import Link from 'next/link'

const services = [
	{ slug: 'commercial-design', title: 'Commercial Design' },
	{ slug: 'architectural-design', title: 'Architectural Design' },
	{ slug: 'interior-design', title: 'Interior Design' },
	{ slug: 'home-decoration', title: 'Home Decoration' },
]

export default function ServiceDetailSidebar({ currentSlug }) {
	return (
		<div className="sticky top-[120px] space-y-12">
			{/* Other Services */}
			<div className="bg-gray-50 p-8 rounded-2xl">
				<h3 className="text-2xl font-bold mb-8">Other Services</h3>
				<div className="flex flex-col gap-4">
					{services.map(service => (
						<Link
							key={service.slug}
							href={`/uslugi/${service.slug}`}
							className={`block w-full px-6 py-4 rounded-lg font-medium flex justify-between items-center transition ${
								currentSlug === service.slug
									? 'bg-black text-white'
									: 'bg-white text-gray-600 hover:text-black border border-gray-200 hover:shadow-md'
							}`}
						>
							{service.title} <span>→</span>
						</Link>
					))}
				</div>
			</div>

			{/* Book Service Form */}
			<div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
				<h3 className="text-2xl font-bold mb-8">Book Service</h3>
				<form action="#">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition"
					/>
					<textarea
						placeholder="Write your Message"
						rows="4"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition resize-none"
					></textarea>
					<button
						type="submit"
						className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	)
}
