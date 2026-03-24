'use client'

import Link from 'next/link'

export default function BlogDetailMore({ posts = [], currentSlug }) {
	const filteredPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 2)

	return (
		<section className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center gap-2 mb-12">
					<span className="text-xl">❖</span>
					<span className="uppercase text-sm tracking-widest text-gray-500">Więcej Artykułów i Blog</span>
				</div>
				<h2 className="text-5xl font-medium mb-16">Poznaj Więcej Artykułów i Blog</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{filteredPosts.map(post => (
					<Link href={`/blog/${post.slug}`} key={post._id || post.slug}>
						<article className="blog-card group cursor-pointer">
							<div className="overflow-hidden rounded-lg mb-6 h-[400px]">
								<img
									src={post.heroImage || post.image}
									className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
									alt={post.category}
								/>
								</div>
								<span className="text-sm text-gray-500 mb-2 block">{post.category}</span>
								<h3 className="text-3xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
									{post.title}
								</h3>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
