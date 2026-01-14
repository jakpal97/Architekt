'use client'

export default function Works() {
	return (
		<section
			id="works-container"
			className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden"
		>
			<div className="absolute top-12 left-0 w-full text-center z-20">
				<h2 className="text-[12vw] leading-none font-medium tracking-tighter" id="recent-text">
					Najnowsze
				</h2>
			</div>

			<div className="flex items-center justify-center relative w-full h-full z-10">
				<div className="text-[12vw] font-bold tracking-tighter" id="work-left">
					Pro
				</div>

				<div id="work-img-wrapper" className="w-0 h-[10vw] overflow-hidden mx-0 relative rounded-lg">
					<img
						src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2084&auto=format&fit=crop"
						id="work-main-img"
						className="w-full h-full object-cover scale-[2]"
						alt="Najnowsze Projekty"
					/>
				</div>

				<div className="text-[12vw] font-bold tracking-tighter" id="work-right">
					jekty
				</div>
			</div>
		</section>
	)
}
