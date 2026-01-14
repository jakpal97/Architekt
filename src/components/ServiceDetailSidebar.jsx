'use client'

import Link from 'next/link'

const services = [
	{ slug: 'commercial-design', title: 'Projektowanie Komercyjne' },
	{ slug: 'architectural-design', title: 'Projektowanie Architektoniczne' },
	{ slug: 'interior-design', title: 'Projektowanie Wnętrz' },
	{ slug: 'home-decoration', title: 'Dekoracja Wnętrz' },
]

export default function ServiceDetailSidebar({ currentSlug }) {
	return (
		<div className="sticky top-[120px] space-y-12">
			{/* Other Services */}
			<div className="bg-gray-50 p-8 rounded-2xl">
				<h3 className="text-2xl font-bold mb-8">Inne Usługi</h3>
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
				<h3 className="text-2xl font-bold mb-8">Zamów Usługę</h3>
				<form action="#">
					<input
						type="text"
						placeholder="Twoje Imię"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition"
					/>
					<input
						type="email"
						placeholder="Twój Email"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition"
					/>
					<textarea
						placeholder="Napisz swoją wiadomość"
						rows="4"
						className="w-full p-4 border border-gray-200 rounded mb-4 outline-none focus:border-black transition resize-none"
					></textarea>
					<button
						type="submit"
						className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition"
					>
						Wyślij Wiadomość
					</button>
				</form>
			</div>
		</div>
	)
}
