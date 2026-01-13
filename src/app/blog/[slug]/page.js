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
		title: 'Blending Nature with Urban Spaces: The Rise of The New Biophilic Design',
		heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
		author: 'Steve Anthony',
		readTime: '5 Min Read',
		date: 'Dec 5, 2024',
	},
	'sculptural-buildings': {
		title: 'The Intersection of Art and Architecture to Creating Sculptural Buildings',
		heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
		author: 'Maria Chen',
		readTime: '7 Min Read',
		date: 'Nov 28, 2024',
	},
	'urban-challenges': {
		title: '5 Challenges in Urban Architecture and How to Overcome Them',
		heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
		author: 'John Davis',
		readTime: '6 Min Read',
		date: 'Nov 15, 2024',
	},
	'sustainable-landscaping': {
		title: 'Sustainable Landscaping in The Architecture Merging Nature with Design',
		heroImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop',
		author: 'Emma Wilson',
		readTime: '4 Min Read',
		date: 'Oct 30, 2024',
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
