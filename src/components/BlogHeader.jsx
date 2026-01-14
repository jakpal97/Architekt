'use client'

export default function BlogHeader() {
	return (
		<header className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-200">
			<div className="flex items-center gap-2 text-sm text-gray-500 mb-6" id="blog-badge">
				<span className="text-xl">❖</span>
				<span className="uppercase tracking-widest">Strona Główna / Blog</span>
			</div>
			<h1 className="text-5xl md:text-8xl font-medium tracking-tight overflow-hidden pb-4" id="blog-title">
				Poznaj Nasze Artykuły i Blog
			</h1>
		</header>
	)
}
