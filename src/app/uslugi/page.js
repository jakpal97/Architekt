'use client'

import useServicesAnimations from '@/hooks/useServicesAnimations'
import ServicesNavbar from '@/components/ServicesNavbar'
import ServicesHeader from '@/components/ServicesHeader'
import ServicesList from '@/components/ServicesList'
import VideoCTA from '@/components/VideoCTA'
import ServicesFooter from '@/components/ServicesFooter'

export default function Uslugi() {
	useServicesAnimations()

	return (
		<>
			<ServicesNavbar />
			<ServicesHeader />
			<ServicesList />
			<VideoCTA />
			<ServicesFooter />
		</>
	)
}
