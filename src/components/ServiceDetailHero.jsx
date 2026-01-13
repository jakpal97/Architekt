'use client'

export default function ServiceDetailHero({ image, title }) {
	return (
		<section className="px-6 md:px-12 pb-24">
			<div
				className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl relative"
				id="hero-img-container"
			>
				<img
					src={image}
					className="w-full h-full object-cover scale-110"
					id="hero-img"
					alt={`${title} Hero`}
				/>
			</div>
		</section>
	)
}
