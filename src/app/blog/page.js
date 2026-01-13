'use client'

import useBlogAnimations from '@/hooks/useBlogAnimations'
import BlogNavbar from '@/components/BlogNavbar'
import BlogHeader from '@/components/BlogHeader'
import BlogList from '@/components/BlogList'
import BlogCTA from '@/components/BlogCTA'
import BlogFooter from '@/components/BlogFooter'

export default function Blog() {
	useBlogAnimations()

	return (
		<>
			<div
				id="loader"
				className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
			></div>

			<BlogNavbar />
			<BlogHeader />
			<BlogList />
			<BlogCTA />
			<BlogFooter />
		</>
	)
}
