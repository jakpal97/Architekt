'use client'

import Link from 'next/link'

export default function BlogDetailHeader({ title, heroImage, author, readTime, date }) {
	return (
		<header className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
			{/* Breadcrumb */}
			<div className="flex items-center gap-2 text-sm text-gray-500 mb-8" id="breadcrumb">
				<span className="text-xl">❖</span>
				<Link href="/" className="hover:text-black transition">
					Home
				</Link>
				<span className="text-xs">/</span>
				<Link href="/blog" className="hover:text-black transition">
					Blog
				</Link>
				<span className="text-xs">/</span>
				<span className="text-black font-medium">Blog Details</span>
			</div>

			{/* Title */}
			<h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-12 leading-[1.1] max-w-6xl anim-text-reveal">
				{title}
			</h1>

			{/* Hero Image */}
			<div className="w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-2xl mb-16 anim-img-reveal">
				<img src={heroImage} className="w-full h-full object-cover scale-110" id="hero-img" alt={title} />
			</div>

			{/* Meta Info */}
			<div className="border border-gray-200 p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 rounded-lg mb-20 anim-fade-up">
				{/* Author */}
				<div className="flex flex-col items-center md:items-start">
					<div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
						</svg>
						Author
					</div>
					<span className="text-xl font-medium">{author}</span>
				</div>

				<div className="w-px h-12 bg-gray-200 hidden md:block"></div>

				{/* Read Time */}
				<div className="flex flex-col items-center md:items-start">
					<div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
						</svg>
						Time
					</div>
					<span className="text-xl font-medium">{readTime}</span>
				</div>

				<div className="w-px h-12 bg-gray-200 hidden md:block"></div>

				{/* Date */}
				<div className="flex flex-col items-center md:items-start">
					<div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
						</svg>
						Date
					</div>
					<span className="text-xl font-medium">{date}</span>
				</div>
			</div>
		</header>
	)
}
