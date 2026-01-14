'use client'

export default function About() {
	return (
		<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white" id="about">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
				<div id="about-text">
					<div className="flex items-center gap-2 mb-4">
						<span className="text-xl">❖</span>
						<span className="uppercase text-sm tracking-widest text-gray-500">O Nas</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
						W 2010 roku grupa postępowych architektów założyła Arcbes Architecture z prostym celem:
						zamienić śmiałe wizje w rzeczywistość.
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed">
						Jesteśmy znani nie tylko z budynków, które tworzymy, ale przede wszystkim z doświadczeń, które
						kreujemy. Arcbes Architecture ucieleśnia połączenie wyjątkowego designu z funkcjonalnością.
					</p>
					<button className="mt-8 border border-black rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition flex items-center gap-2 group">
						Dowiedz Się Więcej <span className="group-hover:translate-x-1 transition">→</span>
					</button>
				</div>

				<div className="grid grid-cols-2 gap-4 h-full relative">
					<div className="about-img-wrapper overflow-hidden h-[400px]">
						<img
							src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
							className="w-full h-full object-cover about-img origin-center"
							alt="Nowoczesny Dom"
						/>
					</div>
					<div className="about-img-wrapper overflow-hidden h-[400px] mt-12">
						<img
							src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
							className="w-full h-full object-cover about-img origin-center"
							alt="Wnętrze"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
