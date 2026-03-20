'use client'

export default function AboutHeader() {
	return (
		<header className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
			<div className="border-b border-gray-200 pb-12">
				<div className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-hidden" id="about-badge">
					<span className="text-xl">❖</span>
					<span className="uppercase tracking-widest">Strona Główna / O Nas</span>
				</div>
				<div className="overflow-hidden">
					<h1
						className="text-6xl md:text-8xl font-medium tracking-tight"
						id="about-title"
					>
						Kim Jesteśmy
					</h1>
				</div>
			</div>
		</header>
	)
}
