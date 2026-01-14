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
		title: 'Projektowanie Komercyjne',
		heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
		description: `W naszej usłudze Projektowania Komercyjnego wierzymy, że każde miejsce pracy opowiada historię, a my jesteśmy tutaj, aby pomóc Ci ją napisać. Nasi eksperci projektanci ściśle współpracują z Tobą, aby przekształcić Twoje przestrzenie biurowe w spersonalizowane odzwierciedlenia Twojej marki i potrzeb. Niezależnie od tego, czy chcesz stworzyć nowoczesną, minimalistyczną siedzibę, czy ciepłe, współpracujące centrum, zapewniamy dostosowane rozwiązania.`,
		descriptionExtra: `Specjalizujemy się w maksymalnym wykorzystaniu każdego metra kwadratowego, zapewniając zgodność ze standardami dostępności przy jednoczesnym maksymalizowaniu estetyki.`,
	},
	'architectural-design': {
		title: 'Projektowanie Architektoniczne',
		heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
		description: `Nasza usługa Projektowania Architektonicznego przekształca Twoją wizję w rzeczywistość poprzez innowacyjne rozwiązania strukturalne. Łączymy ekspresję artystyczną z precyzją inżynierską, aby tworzyć budynki, które inspirują i przetrwają.`,
		descriptionExtra: `Od koncepcji do realizacji, prowadzimy Cię przez każdą fazę podróży architektonicznej.`,
	},
	'interior-design': {
		title: 'Projektowanie Wnętrz',
		heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
		description: `Nasza usługa Projektowania Wnętrz skupia się na tworzeniu przestrzeni, które odzwierciedlają Twoją osobowość, jednocześnie maksymalizując funkcjonalność. Starannie dobieramy kolory, faktury i wyposażenie, aby tworzyć środowiska, które są zarówno piękne, jak i przyjazne do życia.`,
		descriptionExtra: `Każdy szczegół ma znaczenie - od oświetlenia po układ, zapewniamy, że Twoja przestrzeń działa idealnie dla Ciebie.`,
	},
	'home-decoration': {
		title: 'Dekoracja Wnętrz',
		heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
		description: `Nasza usługa Dekoracji Wnętrz wnosi ciepło i charakter do Twoich przestrzeni życiowych. Integrujemy elementy naturalne z przemyślanym designem, aby tworzyć środowiska, które są osobiste, organiczne i z natury spokojne.`,
		descriptionExtra: `Od doboru mebli po konsultację kolorystyczną, pomagamy Ci stworzyć dom, który naprawdę czuje się jak Twój.`,
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
				className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
			></div>

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
