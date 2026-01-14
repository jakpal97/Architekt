'use client'

export default function BlogDetailContent() {
	return (
		<article className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
			{/* Article content with custom styling */}
			<div className="max-w-5xl mx-auto">
				{/* Section 1 */}
				<div className="anim-fade-up mb-16">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						Architektura i Sztuka Zawsze Miały Głęboki i Wewnętrzny Związek
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						Gdy architektura spotyka się ze sztuką, rezultatem są rzeźbiarskie budynki, które wykraczają poza
						zwykłą funkcjonalność, stając się ikonicznymi punktami orientacyjnymi, które prowokują do myślenia,
						zachwytu, a czasem nawet kontrowersji. Te struktury redefiniują znaczenie zamieszkiwania przestrzeni,
						przekształcając zwykłe środowiska w dzieła sztuki, które rezonują z ludzkim duchem.
					</p>
					<p className="text-gray-600 text-xl leading-relaxed">
						Rzeźbiarska architektura zaciera granice między formą a funkcją, pozwalając samemu designowi opowiadać
						historię lub reprezentować ideę. Wyzwala status quo &quot;forma podąża za funkcją&quot;, sugerując,
						że sama forma może być funkcją.
					</p>
				</div>

				{/* Section 2 */}
				<div className="anim-fade-up mb-16">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						Jeden z Najbardziej Znanych Przykładów
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						Sagrada Família Antoniego Gaudíego w Barcelonie jest uderzającym przykładem fuzji sztuki i
						architektury. Dzięki misternym fasadom i strzelistym wieżom, arcydzieło Gaudíego przypomina bardziej
						rzeźbę kamienną niż tradycyjny kościół. Każda powierzchnia budynku jest ozdobiona symbolicznymi
						rzeźbami.
					</p>

					<ul className="space-y-4 mb-12 mt-8">
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Inspirowanie przyszłych pokoleń architektów i artystów do myślenia wolnym od konwencjonalnego
								designu.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Odwiedzający rzeźbiarski budynek są zapraszani do interakcji z architekturą.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Architektura to idea, że budynki mogą wywoływać odpowiedź emocjonalną.
							</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Full Width Images */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
				<div className="overflow-hidden rounded-lg h-[500px] anim-fade-up">
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
						className="w-full h-full object-cover hover:scale-110 transition duration-700"
						alt="Wnętrze"
					/>
				</div>
				<div className="overflow-hidden rounded-lg h-[500px] anim-fade-up">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
						className="w-full h-full object-cover hover:scale-110 transition duration-700"
						alt="Schody"
					/>
				</div>
			</div>

			{/* Quote */}
			<div className="max-w-5xl mx-auto">
				<div className="bg-gray-50 p-12 md:p-16 rounded-xl border-l-4 border-black my-16 relative anim-fade-up">
					<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-lg text-3xl font-serif">
						&quot;
					</div>
					<blockquote className="text-center">
						<p className="text-3xl md:text-4xl font-medium text-black leading-tight italic mb-0">
							&quot;Każda powierzchnia budynku jest ozdobiona symbolicznymi rzeźbami, mozaikami i organicznymi
							formami, które przywołują świat naturalny, tworząc poczucie płynności i ruchu.&quot;
						</p>
					</blockquote>
				</div>

				{/* Section 3 */}
				<div className="anim-fade-up">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						Otaczająca Architektura i Przestrzeń Publiczna
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						Te struktury to nie tylko miejsca do życia, pracy czy zabawy - to same w sobie doświadczenia.
						Odwiedzający rzeźbiarski budynek są zapraszani do interakcji z architekturą, poruszania się przez
						nią i doświadczania, jak światło, cień i przestrzeń zmieniają się podczas eksploracji.
					</p>
					<p className="text-gray-600 text-xl leading-relaxed">
						Ta dynamiczna interakcja między użytkownikiem a strukturą tworzy wielozmysłowe doświadczenie, które
						często brakuje w bardziej tradycyjnych formach architektury.
					</p>
				</div>
			</div>
		</article>
	)
}
