'use client'

import Link from 'next/link'

export default function Blog() {
	return (
		<section className="py-32 px-6 md:px-12 bg-gray-50" id="blog">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between mb-16 border-t border-gray-300 pt-12">
					<div className="flex items-center gap-2">
						<span className="text-xl">❖</span>
						<h3 className="text-xl font-medium">Artykuły i Blog</h3>
					</div>
					<h2 className="hidden md:block text-6xl font-medium absolute left-1/2 -translate-x-1/2">
						Nasze Artykuły i Blog
					</h2>
					<Link
						href="/blog"
						className="border border-black rounded-full px-6 py-3 text-sm hover:bg-black hover:text-white transition flex items-center gap-2"
					>
						Zobacz Wszystkie Artykuły <span>→</span>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
					<Link href="/blog/biophilic-design">
						<article className="group cursor-pointer">
							<div className="overflow-hidden rounded-lg mb-6 h-[400px]">
								<img
									src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
									className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
									alt="Architektura"
								/>
							</div>
							<span className="text-sm text-gray-500 mb-2 block">Architektura</span>
							<h3 className="text-3xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
								Łączenie Natury z Przestrzeniami Miejskimi: Wzrost Nowego Biophilic Design
							</h3>
						</article>
					</Link>

					<Link href="/blog/sculptural-buildings">
						<article className="group cursor-pointer">
							<div className="overflow-hidden rounded-lg mb-6 h-[400px]">
								<img
									src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
									className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
									alt="Wnętrze"
								/>
							</div>
							<span className="text-sm text-gray-500 mb-2 block">Wnętrze</span>
							<h3 className="text-3xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
								Punkt Przecięcia Sztuki i Architektury: Tworzenie Rzeźbiarskich Budynków
							</h3>
						</article>
					</Link>
				</div>
			</div>
		</section>
	)
}
