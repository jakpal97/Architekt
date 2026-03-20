'use client'

import useAboutAnimations from '@/hooks/useAboutAnimations'
import AboutNavbar from '@/components/AboutNavbar'
import AboutHeader from '@/components/AboutHeader'
import AboutStory from '@/components/AboutStory'
import AboutNumbers from '@/components/AboutNumbers'
import AboutValues from '@/components/AboutValues'
import CTAContact from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'

export default function ONas() {
	useAboutAnimations()

	return (
		<>
			<AboutNavbar />
			<AboutHeader />
			<AboutStory />
			<AboutNumbers />
			<AboutValues />
			<CTAContact />
			<ServicesFooter />
		</>
	)
}
