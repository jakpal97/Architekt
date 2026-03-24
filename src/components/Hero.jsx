export default function Hero({ title1, title2, videoUrl, posterUrl }) {
	const line1 = title1 || 'WPM'
	const line2 = title2 || 'SOLUTIONS'
	const src = videoUrl || '/vid3.mp4'
	const poster = posterUrl || '/levis.png'

	return (
		<header className="relative w-full h-screen overflow-hidden bg-white" id="header">
			<div className="absolute inset-0 flex flex-col items-center pt-32 md:pt-40">
				<div className="relative w-full max-w-6xl px-6 text-center z-10" id="hero-text-wrapper">
					<h1 className="text-[13vw] leading-[0.85] font-black tracking-tighter flex justify-center" id="hero-text">
						{line1.split('').map((letter, index) => (
							<span key={index} className="hero-letter hero-clip-text inline-block">
								{letter}
							</span>
						))}
					</h1>

					<h2
						className="text-[4vw] md:text-[3vw] leading-[1] font-bold tracking-[0.3em] uppercase flex justify-center mt-2 md:mt-4 text-gray-800"
						id="hero-subtitle">
						{line2.split('').map((letter, index) => (
							<span key={index} className="hero-letter hero-clip-text inline-block">
								{letter}
							</span>
						))}
					</h2>
				</div>
			</div>

			<div
				className="absolute -bottom-[11vh] left-0 right-0 mx-auto w-full max-w-6xl px-6 z-20"
				id="hero-video-wrapper"
			>
				<video
					src={src}
					poster={poster}
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
