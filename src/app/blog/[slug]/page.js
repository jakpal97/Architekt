'use client'

import { use } from 'react'
import useBlogDetailAnimations from '@/hooks/useBlogDetailAnimations'
import BlogNavbar from '@/components/BlogNavbar'
import BlogDetailHeader from '@/components/BlogDetailHeader'
import BlogDetailContent from '@/components/BlogDetailContent'
import BlogDetailMore from '@/components/BlogDetailMore'
import BlogDetailCTA from '@/components/BlogDetailCTA'
import BlogFooter from '@/components/BlogFooter'

// Dane wpisów blogowych
const blogPostsData = {
	'biophilic-design': {
		title: 'Łączenie Natury z Przestrzeniami Miejskimi: Wzrost Nowego Biophilic Design',
		heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
		author: 'Anna Kowalska',
		readTime: '5 Min Czytania',
		date: '5 Gru 2024',
	},
	'sculptural-buildings': {
		title: 'Punkt Przecięcia Sztuki i Architektury: Tworzenie Rzeźbiarskich Budynków',
		heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
		author: 'Marek Nowak',
		readTime: '7 Min Czytania',
		date: '28 Lis 2024',
	},
	'urban-challenges': {
		title: '5 Wyzwań w Architekturze Miejskiej i Jak Je Przezwyciężyć',
		heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
		author: 'Katarzyna Wiśniewska',
		readTime: '6 Min Czytania',
		date: '15 Lis 2024',
	},
	'sustainable-landscaping': {
		title: 'Zrównoważone Krajobrazowanie w Architekturze: Łączenie Natury z Designem',
		heroImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop',
		author: 'Tomasz Zieliński',
		readTime: '4 Min Czytania',
		date: '30 Paź 2024',
	},
}

export default function BlogDetail({ params }) {
	const { slug } = use(params)
	const post = blogPostsData[slug] || blogPostsData['biophilic-design']

	useBlogDetailAnimations()

	return (
		<>
			<div
				id="loader"
				className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
			></div>

			<BlogNavbar />
			<BlogDetailHeader
				title={post.title}
				heroImage={post.heroImage}
				author={post.author}
				readTime={post.readTime}
				date={post.date}
			/>
			<BlogDetailContent />
			<BlogDetailMore currentSlug={slug} />
			<BlogDetailCTA />
			<BlogFooter />
		</>
	)
}
