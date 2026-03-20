'use client'

import Link from 'next/link'

export default function PortfolioNavbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-white/90 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
			<Link href="/" className="flex items-center gap-2">
				<img src="/logo.png" alt="WPM Solutions logo" className="w-20 h-10" />
			</Link>

			<div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
				<Link href="/" className="relative group text-black/50 hover:text-black transition-colors duration-300">
					Strona Główna
					<span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
				</Link>
				<Link href="/o-nas" className="relative group text-black/50 hover:text-black transition-colors duration-300">
					O Nas
					<span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
				</Link>
				<Link href="/uslugi" className="relative group text-black/50 hover:text-black transition-colors duration-300">
					Usługi
					<span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
				</Link>
				<Link href="/portfolio" className="relative group text-black">
					Portfolio
					<span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-right scale-x-100 group-hover:scale-x-0 group-hover:origin-left"></span>
				</Link>
				<Link href="/blog" className="relative group text-black/50 hover:text-black transition-colors duration-300">
					Blog
					<span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
				</Link>
			</div>

			<a
				href="#contact"
				className="group relative border border-black/10 rounded-full px-7 py-2.5 text-[11px] font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 hover:border-black"
			>
				<span className="relative z-10 transition-colors duration-500 group-hover:text-white">
					Skontaktuj Się <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
				</span>
				<div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"></div>
			</a>
		</nav>
	)
}
