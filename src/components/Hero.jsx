'use client'

export default function Hero() {
	return (
		<header className="relative w-full h-screen overflow-hidden bg-white" id="header">
			{/* Kontener - tekst wycentrowany */}
			<div className="absolute inset-0 flex flex-col items-center pt-40">
				{/* Tekst - każda litera osobno dla animacji stagger */}
				<div className="relative w-full max-w-6xl px-6 text-center z-10" id="hero-text-wrapper">
					<h1 className="text-[17vw] leading-[0.85] font-black tracking-tighter flex justify-center" id="hero-text">
						<span className="hero-letter hero-clip-text inline-block">A</span>
						<span className="hero-letter hero-clip-text inline-block">r</span>
						<span className="hero-letter hero-clip-text inline-block">c</span>
						<span className="hero-letter hero-clip-text inline-block">b</span>
						<span className="hero-letter hero-clip-text inline-block">e</span>
						<span className="hero-letter hero-clip-text inline-block">s</span>
					</h1>
				</div>
			</div>

			{/* Zdjęcie - wystaje z dołu, wjeżdża z animacją */}
			<div
				className="absolute -bottom-[11vh] left-0 right-0 mx-auto w-full max-w-6xl px-6 z-20"
				id="hero-image-wrapper">
				<img
					src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
					alt="Modern Office Interior"
					className="w-full h-[55vh] object-cover rounded-t-xl shadow-2xl"
					id="hero-image"
				/>
			</div>
		</header>
	)
}
