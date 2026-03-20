'use client'

import usePortfolioAnimations from '@/hooks/usePortfolioAnimations'
import PortfolioNavbar from '@/components/PortfolioNavbar'
import PortfolioHeader from '@/components/PortfolioHeader'
import PortfolioList from '@/components/PortfolioList'
import CTAContact from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'

export default function Portfolio() {
	usePortfolioAnimations()

	return (
		<>
			<PortfolioNavbar />
			<PortfolioHeader />
			<PortfolioList />
			<CTAContact />
			<ServicesFooter />
		</>
	)
}
