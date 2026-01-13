'use client'

export default function BlogCTA() {
	return (
		<section
			className="relative h-[70vh] overflow-hidden flex items-center justify-center text-white"
			id="cta-video-section"
		>
			<video
				className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
				autoPlay
				muted
				loop
				playsInline
				poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
			>
				<source
					src="https://player.vimeo.com/external/371836154.sd.mp4?s=d08405aa6b6b7724283597d5b1216d6833f7c460&profile_id=164"
					type="video/mp4"
				/>
			</video>

			<div className="absolute inset-0 bg-black/40 z-10"></div>

			<div className="relative z-20 text-center max-w-4xl px-6">
				<h2 className="text-5xl md:text-7xl font-medium mb-8 leading-tight tracking-tight" id="cta-heading">
					Have a Story to Tell?
					<br />
					Let&apos;s Build It.
				</h2>
				<p className="text-gray-200 text-lg mb-12 max-w-2xl mx-auto">
					Join our newsletter to get the latest architectural insights or start your own project with us
					today.
				</p>
				<div className="flex gap-4 justify-center">
					<button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2">
						Contact Us <span>→</span>
					</button>
				</div>
			</div>
		</section>
	)
}
