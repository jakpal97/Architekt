'use client'

export default function CTA() {
	return (
		<section
			className="relative py-40 px-6 md:px-12 bg-slate-900 text-white overflow-hidden flex items-center"
			id="cta"
		>
			<div className="absolute inset-0 opacity-40">
				<img
					src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=2070&auto=format&fit=crop"
					className="w-full h-[120%] object-cover absolute top-0 left-0"
					id="cta-bg"
					alt="Abstrakcja Architektoniczna"
				/>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<h2 className="text-5xl md:text-7xl font-medium mb-8 leading-tight">
					Masz Pomysł
					<br />
					Na Projekt Architektoniczny?
				</h2>
				<p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
					Nasza umiejętność łączenia nowoczesnego designu z zrównoważonym rozwojem zaowocowała piękną,
					funkcjonalną przestrzenią, która odzwierciedla nasze wartości. Odkrywamy, jak architektura może
					zamazywać granice.
				</p>
				<button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition flex items-center gap-2 mx-auto">
					Skontaktuj Się <span>→</span>
				</button>
			</div>
		</section>
	)
}
