'use client'

import Link from 'next/link'

export default function ServicesFooter() {
	return (
		<footer className="bg-white pt-24 pb-8 px-6 md:px-12" id="main-footer">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
					<div className="space-y-6">
						<div className="text-2xl font-bold flex items-center gap-2">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M2 20h20v2H2v-2zm2-8h4v6H4v-6zm6-6h4v12h-4V6zm6-4h4v16h-4V2z" />
							</svg>
							Arcbes
						</div>
						<p className="text-gray-500 text-sm leading-relaxed">
							Jesteśmy dumni z oferowania spersonalizowanych usług architektonicznych, które spełniają Twoje
							specyficzne potrzeby.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition text-xs"
							>
								IG
							</a>
							<a
								href="#"
								className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition text-xs"
							>
								TW
							</a>
							<a
								href="#"
								className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition text-xs"
							>
								FB
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-bold mb-6">Strony</h4>
						<ul className="space-y-4 text-gray-600 text-sm">
							<li>
								<Link href="/" className="hover:text-black">
									Strona Główna
								</Link>
							</li>
							<li>
								<a href="#" className="hover:text-black">
									O Nas
								</a>
							</li>
							<li>
								<Link href="/uslugi" className="hover:text-black">
									Usługi
								</Link>
							</li>
							<li>
								<a href="#" className="hover:text-black">
									Kontakt
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-6">Strony Pomocnicze</h4>
						<ul className="space-y-4 text-gray-600 text-sm">
							<li>
								<a href="#" className="hover:text-black">
									Przewodnik Stylu
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-black">
									Licencje
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-6">Adres</h4>
						<ul className="space-y-4 text-gray-600 text-sm">
							<li>info@arcbes.com</li>
							<li>+48 555 345 678</li>
							<li>
								ul. Przykładowa 123,
								<br />
								Warszawa, 00-000
							</li>
						</ul>
					</div>
				</div>

				<div className="border-b border-gray-200 mb-8 overflow-hidden">
					<h1
						className="text-[19vw] leading-[0.8] font-bold text-black flex justify-between tracking-tighter w-full select-none"
						aria-label="Arcbes"
					>
						<div className="overflow-hidden">
							<span className="block footer-letter">A</span>
						</div>
						<div className="overflow-hidden">
							<span className="block footer-letter">r</span>
						</div>
						<div className="overflow-hidden">
							<span className="block footer-letter">c</span>
						</div>
						<div className="overflow-hidden">
							<span className="block footer-letter">b</span>
						</div>
						<div className="overflow-hidden">
							<span className="block footer-letter">e</span>
						</div>
						<div className="overflow-hidden">
							<span className="block footer-letter">s</span>
						</div>
					</h1>
				</div>

				<div className="flex flex-col md:flex-row justify-between text-xs text-gray-500 py-4">
					<p>Copyright © Arcbes</p>
					<div className="flex gap-8">
						<p>Zaprojektowane przez Brandbes</p>
						<p>Napędzane przez Next.js</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
