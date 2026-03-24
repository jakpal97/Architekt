'use client'

import Link from 'next/link'

export default function Blog({ posts = [] }) {
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
					{posts.map((post) => (
						<Link href={`/blog/${post.slug}`} key={post._id}>
							<article className="group cursor-pointer">
								<div className="overflow-hidden rounded-lg mb-6 h-[400px]">
									<img
										src={post.heroImage}
										className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
										alt={post.category || post.title}
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
