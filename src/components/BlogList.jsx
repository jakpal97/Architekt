'use client'

import Link from 'next/link'

const blogPosts = [
	{
		slug: 'biophilic-design',
		category: 'Architektura',
		title: 'Łączenie Natury z Przestrzeniami Miejskimi: Wzrost Nowego Biophilic Design',
		excerpt:
			'Odkrywamy, jak nowocześni architekci integrują żywe zielone ściany i naturalne światło, aby tworzyć zdrowsze środowiska miejskie.',
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
	},
	{
		slug: 'sculptural-buildings',
		category: 'Wnętrze',
		title: 'Punkt Przecięcia Sztuki i Architektury: Tworzenie Rzeźbiarskich Budynków',
		excerpt: 'Jak funkcjonalne przestrzenie mogą przekroczyć swój cel i stać się zamieszkiwalnymi dziełami sztuki.',
		image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
	},
	{
		slug: 'urban-challenges',
		category: 'Komercyjne',
		title: '5 Wyzwań w Architekturze Miejskiej i Jak Je Przezwyciężyć',
		excerpt: 'Nawigowanie przez przepisy zagospodarowania przestrzennego, ograniczenia przestrzenne i wymagania zrównoważonego rozwoju w gęstych centrach miast.',
		image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
	},
	{
		slug: 'sustainable-landscaping',
		category: 'Krajobraz',
		title: 'Zrównoważone Krajobrazowanie w Architekturze: Łączenie Natury z Designem',
		excerpt: 'Wykorzystywanie rodzimej flory i technik oszczędzania wody do tworzenia odpornych przestrzeni zewnętrznych.',
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop',
	},
]

export default function BlogList() {
	return (
		<section className="py-24 px-6 md:px-12 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
					{blogPosts.map(post => (
						<Link href={`/blog/${post.slug}`} key={post.slug}>
							<article className="blog-card group cursor-pointer">
								<div className="overflow-hidden rounded-lg mb-8 h-[400px] relative">
									<img
										src={post.image}
										className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
										alt={post.category}
									/>
								</div>
								<div className="flex flex-col gap-3">
									<span className="text-sm text-gray-500 uppercase tracking-wider">{post.category}</span>
									<h2 className="text-3xl md:text-4xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
										{post.title}
									</h2>
									<p className="text-gray-500 mt-2 line-clamp-2">{post.excerpt}</p>
								</div>
							</article>
						</Link>
					))}
				</div>

				<div className="mt-24 text-center">
					<button className="border border-black rounded-full px-10 py-4 text-sm font-medium hover:bg-black hover:text-white transition duration-300">
						Załaduj Więcej Artykułów
					</button>
				</div>
			</div>
		</section>
	)
}
