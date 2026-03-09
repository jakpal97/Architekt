export default function Hero() {
	// Rozbijamy słowo na tablicę liter, aby ułatwić renderowanie
	const subtitle = 'SOLUTIONS'

	return (
		<header className="relative w-full h-screen overflow-hidden bg-white" id="header">
			{/* Kontener - tekst wycentrowany */}
			{/* Zmniejszyłem lekko padding-top (z pt-40 na pt-32), żeby zrobić miejsce na nowy tekst */}
			<div className="absolute inset-0 flex flex-col items-center pt-32 md:pt-40">
				{/* Tekst - każda litera osobno dla animacji stagger */}
				<div className="relative w-full max-w-6xl px-6 text-center z-10" id="hero-text-wrapper">
					{/* Zmniejszony tekst WPM z 17vw na 13vw */}
					<h1 className="text-[13vw] leading-[0.85] font-black tracking-tighter flex justify-center" id="hero-text">
						<span className="hero-letter hero-clip-text inline-block">W</span>
						<span className="hero-letter hero-clip-text inline-block">P</span>
						<span className="hero-letter hero-clip-text inline-block">M</span>
					</h1>

					{/* Dodany tekst SOLUTIONS */}
					<h2
						className="text-[4vw] md:text-[3vw] leading-[1] font-bold tracking-[0.3em] uppercase flex justify-center mt-2 md:mt-4 text-gray-800"
						id="hero-subtitle">
						{subtitle.split('').map((letter, index) => (
							<span
								key={index}
								// Używamy tych samych klas, żeby animacja objęła też ten tekst
								className="hero-letter hero-clip-text inline-block">
								{letter}
							</span>
						))}
					</h2>
				</div>
			</div>

			{/* Zdjęcie - wystaje z dołu, wjeżdża z animacją */}
			<div
  className="absolute -bottom-[11vh] left-0 right-0 mx-auto w-full max-w-6xl px-6 z-20"
  id="hero-video-wrapper"
>
  <video
    src="/Generowanie_filmu_z_obrazu.mp4"
    poster="/levis.png"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[55vh] object-cover object-center rounded-t-xl shadow-2xl brightness-90 contrast-110"
    id="hero-video"
  />
</div>
		</header>
	)
}
