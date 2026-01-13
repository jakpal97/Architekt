'use client'

import { use } from 'react'
import useServiceDetailAnimations from '@/hooks/useServiceDetailAnimations'
import ServiceDetailNavbar from '@/components/ServiceDetailNavbar'
import ServiceDetailHeader from '@/components/ServiceDetailHeader'
import ServiceDetailHero from '@/components/ServiceDetailHero'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import ServiceDetailSidebar from '@/components/ServiceDetailSidebar'
import ServiceDetailCTA from '@/components/ServiceDetailCTA'
import ServiceDetailFooter from '@/components/ServiceDetailFooter'

// Dane usług
const servicesData = {
	'commercial-design': {
		title: 'Commercial Design',
		heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
		description: `In our Commercial Design service, we believe that every workspace tells a story, and we're here to help you write yours. Our expert designers work closely with you to transform your office spaces into personalized reflections of your brand and needs. Whether you're looking to create a modern, minimalist headquarters or a warm, collaborative hub, we provide tailored solutions.`,
		descriptionExtra: `We specialize in making the most of every square foot, ensuring compliance with ADA standards while maximizing aesthetic appeal.`,
	},
	'architectural-design': {
		title: 'Architectural Design',
		heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
		description: `Our Architectural Design service transforms your vision into reality through innovative structural solutions. We combine artistic expression with engineering precision to create buildings that inspire and endure.`,
		descriptionExtra: `From concept to completion, we guide you through every phase of the architectural journey.`,
	},
	'interior-design': {
		title: 'Interior Design',
		heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
		description: `Our Interior Design service focuses on creating spaces that reflect your personality while maximizing functionality. We carefully curate colors, textures, and furnishings to craft environments that feel both beautiful and livable.`,
		descriptionExtra: `Every detail matters - from lighting to layout, we ensure your space works perfectly for you.`,
	},
	'home-decoration': {
		title: 'Home Decoration',
		heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
		description: `Our Home Decoration service brings warmth and character to your living spaces. We integrate natural elements with thoughtful design to create environments that feel personal, organic, and inherently peaceful.`,
		descriptionExtra: `From furniture selection to color consultation, we help you create a home that truly feels like yours.`,
	},
}

export default function ServiceDetail({ params }) {
	const { slug } = use(params)
	const service = servicesData[slug] || servicesData['commercial-design']

	useServiceDetailAnimations()

	return (
		<>
			<div
				id="loader"
				className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"></div>

			<ServiceDetailNavbar />
			<ServiceDetailHeader title={service.title} />
			<ServiceDetailHero image={service.heroImage} title={service.title} />

			<section className="pb-32 px-6 md:px-12">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
					<div className="lg:col-span-8">
						<ServiceDetailContent description={service.description} descriptionExtra={service.descriptionExtra} />
					</div>
					<div className="lg:col-span-4 relative">
						<ServiceDetailSidebar currentSlug={slug} />
					</div>
				</div>
			</section>

			<ServiceDetailCTA />
			<ServiceDetailFooter />
		</>
	)
}
