'use client'

import PortfolioCarousel from '@/components/PortfolioCarousel'

export default function PortfolioList({ projects = [] }) {
	const projectList = projects.map((p, i) => ({
		...p,
		number: String(i + 1).padStart(2, '0'),
		images: p.images && p.images.length > 0 ? p.images : [p.mainImage].filter(Boolean),
		reverse: i % 2 === 1,
	}))
	return (
		<section className="pb-24 px-6 md:px-12 bg-white" id="portfolio-container">
			<div className="max-w-7xl mx-auto">
			{projectList.map((project, index) => (
				<article
					key={project._id || project.number}
						className={`portfolio-item py-20 flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
							index < projectList.length - 1 ? 'border-b border-gray-200' : ''
						}`}
					>
						{/* ── Karuzela ── */}
						<div
							className={`w-full md:w-[58%] shrink-0 ${
								project.reverse ? 'md:order-2' : ''
							}`}
						>
							<PortfolioCarousel images={project.images} />
						</div>

						{/* ── Info ── */}
						<div className={`w-full md:flex-1 ${project.reverse ? 'md:order-1' : ''}`}>
							{/* Numer projektu */}
							<span className="block text-[5rem] leading-none font-light text-gray-100 mb-2 tracking-tight select-none">
								{project.number}
							</span>

							{/* Marka + kategoria */}
							<div className="flex items-center gap-3 mb-4">
								<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
									{project.brand}
								</span>
								<span className="text-gray-200 text-sm">·</span>
								<span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
									{project.category}
								</span>
							</div>

							{/* Tytuł */}
							<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-4">
								{project.name}
							</h2>

							{/* Lokalizacja + rok */}
							<div className="flex items-center gap-3 mb-6">
								<svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="text-gray-400 shrink-0" aria-hidden="true">
									<path d="M6 1C3.8 1 2 2.8 2 5c0 3.2 4 8 4 8s4-4.8 4-8c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
									<circle cx="6" cy="5" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
								</svg>
								<span className="text-gray-500 text-sm">{project.location}</span>
								<span className="text-gray-200">·</span>
								<span className="text-gray-400 text-sm font-mono">{project.year}</span>
							</div>

							{/* Separator */}
							<div className="w-12 h-px bg-gray-200 mb-6" />

							{/* Opis */}
							<p className="text-gray-600 text-base leading-relaxed mb-8">
								{project.description}
							</p>

							{/* Tagi */}
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 border border-gray-200 rounded-full px-4 py-1.5"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
