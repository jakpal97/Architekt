'use client'

export default function BlogFooter() {
	return (
		<footer className="bg-white pt-24 pb-8 px-6 md:px-12 border-t border-gray-100" id="main-footer">
			<div className="max-w-7xl mx-auto">
			<div className="border-b border-gray-200 mb-8 overflow-hidden">
					<div className="text-black font-bold tracking-tighter w-full select-none" aria-label="WPM Solutions">
						{/* Pierwsza linia: WPM */}
						<div className="text-[22vw] leading-[0.8] flex justify-between">
							{['W', 'P', 'M'].map((letter, i) => (
								<div key={`line1-${i}`} className="overflow-hidden">
									<span className="block footer-letter">{letter}</span>
								</div>
							))}
						</div>

						{/* Druga linia: Solutions */}
						<div className="text-[14.5vw] leading-[0.8] flex justify-between mt-2">
							{['S', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'].map((letter, i) => (
								<div key={`line2-${i}`} className="overflow-hidden">
									<span className="block footer-letter">{letter}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between text-xs text-gray-500 py-4">
					<p>Copyright © Arcbes</p>
					<div className="flex gap-8">
						<p>Designed by Brandbes</p>
						<p>Powered by Webflow</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
