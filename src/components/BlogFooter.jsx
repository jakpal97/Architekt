'use client'

export default function BlogFooter() {
	return (
		<footer className="bg-white pt-24 pb-8 px-6 md:px-12 border-t border-gray-100" id="main-footer">
			<div className="max-w-7xl mx-auto">
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
						<p>Designed by Brandbes</p>
						<p>Powered by Webflow</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
