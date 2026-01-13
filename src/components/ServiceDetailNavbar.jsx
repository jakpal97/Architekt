'use client'

import Link from 'next/link'

export default function ServiceDetailNavbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
			<Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M2 20h20v2H2v-2zm2-8h4v6H4v-6zm6-6h4v12h-4V6zm6-4h4v16h-4V2z" />
				</svg>
				Arcbes
			</Link>
			<div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
				<Link href="/" className="hover:opacity-60 transition">
					Home
				</Link>
				<a href="#" className="hover:opacity-60 transition">
					About
				</a>
				<Link href="/uslugi" className="text-black font-bold">
					Services
				</Link>
				<a href="#" className="hover:opacity-60 transition">
					Blog
				</a>
			</div>
			<a
				href="#"
				className="border border-black/20 rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition flex items-center gap-2"
			>
				Contact Us <span>→</span>
			</a>
		</nav>
	)
}
