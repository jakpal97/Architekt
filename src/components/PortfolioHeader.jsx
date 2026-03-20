'use client'

export default function PortfolioHeader() {
	return (
		<header className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
			<div className="border-b border-gray-200 pb-12">
				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-hidden" id="portfolio-badge">
							<span className="text-xl">❖</span>
							<span className="uppercase tracking-widest">Strona Główna / Portfolio</span>
						</div>
						<div className="overflow-hidden">
							<h1
								className="text-6xl md:text-8xl font-medium tracking-tight"
								id="portfolio-title"
							>
								Nasze Realizacje
							</h1>
						</div>
					</div>
					<div className="hidden md:flex flex-col items-end gap-2 text-right" id="portfolio-meta">
						<span className="text-5xl font-light text-gray-200 tracking-tight">340+</span>
						<span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
							Zrealizowanych projektów
						</span>
					</div>
				</div>
			</div>
		</header>
	)
}
