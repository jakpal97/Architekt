'use client'

import Link from 'next/link'

export default function ServiceDetailHeader({ title }) {
	return (
		<header className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
			<div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
				<span className="text-xl">❖</span>
				<Link href="/" className="hover:text-black transition">
					Home
				</Link>
				<span className="text-xs">/</span>
				<Link href="/uslugi" className="hover:text-black transition">
					Services
				</Link>
				<span className="text-xs">/</span>
				<span className="text-black font-bold">Service Details</span>
			</div>
			<h1 className="text-5xl md:text-7xl font-medium tracking-tight" id="page-title">
				{title}
			</h1>
		</header>
	)
}
