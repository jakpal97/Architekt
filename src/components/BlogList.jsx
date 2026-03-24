'use client'

import Link from 'next/link'

export default function BlogList({ posts = [] }) {
	const blogPosts = posts
	return (
		<section className="py-24 px-6 md:px-12 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
					{blogPosts.map(post => (
						<Link href={`/blog/${post.slug}`} key={post._id || post.slug}>
							<article className="blog-card group cursor-pointer">
								<div className="overflow-hidden rounded-lg mb-8 h-[400px] relative">
									<img
										src={post.heroImage || post.image}
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
