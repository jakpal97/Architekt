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
	'projekty': {
		title: 'Projekty & Koncepcja',
		heroImage: '/Obraz1.jpg',
		description: `Każdy projekt zaczyna się od idei. Tworzymy koncepcje przestrzeni eventowych — od szkicu po fotorealistyczną wizualizację 3D. Zanim wbijemy pierwszy gwóźdź, widzisz dokładnie efekt końcowy.`,
		descriptionExtra: `Pracujemy metodycznie: zbieramy brief, analizujemy przestrzeń i kontekst marki, a następnie dostarczamy pełną dokumentację projektową gotową do realizacji. Żadnych niespodzianek na budowie.`,
		processSteps: [
			{ icon: '❖', title: 'Brief & Analiza', description: 'Dogłębne zrozumienie Twoich potrzeb, marki i przestrzeni, w której będziemy działać.' },
			{ icon: '☀', title: 'Koncepcja Wizualna', description: 'Szkice i moodboardy prezentujące kierunek projektowy przed przystąpieniem do szczegółów.' },
			{ icon: '▤', title: 'Wizualizacja 3D', description: 'Fotorealistyczne rendery pozwalające zobaczyć efekt końcowy przed realizacją.' },
			{ icon: '★', title: 'Dokumentacja', description: 'Kompletna dokumentacja techniczna i materiałowa gotowa do produkcji i montażu.' },
		],
		processPoints: [
			'Każdy projekt jest unikalny — nie korzystamy z szablonów.',
			'Wizualizacje 3D eliminują ryzyko rozbieżności między oczekiwaniami a efektem.',
			'Ścisła współpraca z klientem na każdym etapie projektowania.',
		],
	},
	'outdoor-events': {
		title: 'Kampanie Outdoor & Produkcja Eventowa',
		heroImage: '/Obraz2.jpg',
		description: `Budujemy przestrzenie, które zatrzymują ludzi w miejscu. Stoiska targowe, strefy aktywacji marki, zabudowy eventowe — projektowane z myślą o Twoim kliencie i jego emocjach.`,
		descriptionExtra: `Łączymy kreatywny design z wiedzą o zachowaniach konsumentów. Każda przestrzeń eventowa, którą tworzymy, ma cel: angażować, zapraszać i budować relację między marką a odbiorcą.`,
		processSteps: [
			{ icon: '❖', title: 'Analiza Marki', description: 'Dogłębne zrozumienie DNA marki, grupy docelowej i celów kampanii.' },
			{ icon: '☀', title: 'Projekt Strefy', description: 'Opracowanie układu, ścieżki użytkownika i kluczowych punktów aktywacji.' },
			{ icon: '▤', title: 'Produkcja', description: 'Realizacja zabudowy: konstrukcje, druk, oświetlenie i elementy interaktywne.' },
			{ icon: '★', title: 'Montaż & Nadzór', description: 'Profesjonalny montaż na miejscu eventu z nadzorem naszego zespołu.' },
		],
		processPoints: [
			'Doświadczenie w realizacjach dla globalnych marek na polskim rynku.',
			'Pełna obsługa od koncepcji po demontaż — jeden punkt kontaktu.',
			'Optymalizacja kosztów bez kompromisów w jakości wykonania.',
		],
	},
	'druk-wielkoformatowy': {
		title: 'Druk Wielkoformatowy',
		heroImage: '/Obraz3.jpg',
		description: `Własny park maszynowy pozwala nam kontrolować każdy etap produkcji. Wielkoformatowy druk, cięcie, wyklejanie i montaż — wszystko pod jednym dachem, bez pośredników.`,
		descriptionExtra: `Drukujemy na wszystkich popularnych podłożach: siatki mesh, folie polimerowe, banery, tapety, podłogi, oklejenia pojazdów. Wysoka rozdzielczość i kalibracja kolorów gwarantują spójność z identyfikacją wizualną marki.`,
		processSteps: [
			{ icon: '❖', title: 'Przygotowanie Plików', description: 'Weryfikacja i przygotowanie materiałów do druku — poprawność kolorów i rozdzielczości.' },
			{ icon: '☀', title: 'Proof & Akceptacja', description: 'Wydruk próbny i akceptacja kolorystyczna przed produkcją pełnowymiarową.' },
			{ icon: '▤', title: 'Produkcja', description: 'Druk na maszynach wielkoformatowych z kontrolą jakości na każdym arkuszu.' },
			{ icon: '★', title: 'Wykończenie & Dostawa', description: 'Laminowanie, cięcie, zgrzewanie oraz dostawa lub montaż na miejscu.' },
		],
		processPoints: [
			'Własny park maszynowy — brak opóźnień wynikających z outsourcingu.',
			'Precyzyjna kalibracja kolorów zgodna z Pantone i CMYK.',
			'Ekspresowe terminy realizacji nawet dla dużych formatów.',
		],
	},
	'produkcja-nosnikow-i-kostrukcji': {
		title: 'Produkcja Nośników & Konstrukcji',
		heroImage: '/Obraz4.jpg',
		description: `Specjalizujemy się w budowie konstrukcji aluminiowych i ekspozytorów na wymiar. Jeśli nie istnieje gotowe rozwiązanie — projektujemy i produkujemy je od zera.`,
		descriptionExtra: `Nasze konstrukcje są lekkie, trwałe i wielokrotnego użytku. Projektujemy je tak, aby montaż był szybki i możliwy bez specjalistycznych narzędzi. Ekspozytory, totemy, stojaki, systemy modułowe — każdy element dopasowany do Twoich potrzeb.`,
		processSteps: [
			{ icon: '❖', title: 'Projekt Techniczny', description: 'Opracowanie rysunków technicznych z uwzględnieniem wymiarów, wagi i wytrzymałości.' },
			{ icon: '☀', title: 'Dobór Materiałów', description: 'Aluminium, stal, MDF, plexi, PVC — dobieramy materiały do funkcji i budżetu.' },
			{ icon: '▤', title: 'Produkcja CNC', description: 'Precyzyjna obróbka CNC zapewniająca powtarzalność i dokładność każdego elementu.' },
			{ icon: '★', title: 'Testy & Odbiór', description: 'Kontrola jakości, test wytrzymałościowy i odbiór przed wysyłką do klienta.' },
		],
		processPoints: [
			'Konstrukcje projektowane pod wielokrotny montaż i demontaż.',
			'Możliwość produkcji seryjnej lub jednostkowej bez dopłat.',
			'Pełna dokumentacja techniczna ułatwiająca samodzielny montaż.',
		],
	},
	'logistyka-i-montaz': {
		title: 'Logistyka & Montaż',
		heroImage: '/Obraz6.jpg',
		description: `Dostarczamy, montujemy i nadzorujemy. Nasz zespół obsługuje cały proces na miejscu — od załadunku po demontaż po evencie. Ty skupiasz się na gościach, my na reszcie.`,
		descriptionExtra: `Działamy w całej Polsce i za granicą. Mamy własne środki transportu i doświadczony zespół montażystów. Terminowość i porządek po zakończeniu pracy to nasze standardy, nie wyjątki.`,
		processSteps: [
			{ icon: '❖', title: 'Planowanie Trasy', description: 'Optymalizacja logistyki transportu — czas dostawy, kolejność załadunku, harmonogram.' },
			{ icon: '☀', title: 'Załadunek & Transport', description: 'Profesjonalne zabezpieczenie i transport materiałów własnymi pojazdami.' },
			{ icon: '▤', title: 'Montaż na Miejscu', description: 'Doświadczony zespół montażowy realizujący projekt zgodnie z dokumentacją.' },
			{ icon: '★', title: 'Demontaż & Zwrot', description: 'Sprawny demontaż po evencie, segregacja materiałów i transport zwrotny.' },
		],
		processPoints: [
			'Własna flota pojazdów — niezależność od firm kurierskich.',
			'Ekipy montażowe dostępne 7 dni w tygodniu, również w nocy.',
			'Kompleksowa obsługa: nie musisz koordynować wielu podwykonawców.',
		],
	},
}

export default function ServiceDetail({ params }) {
	const { slug } = use(params)
	const service = servicesData[slug] || servicesData['projekty']

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
						<ServiceDetailContent
						description={service.description}
						descriptionExtra={service.descriptionExtra}
						processSteps={service.processSteps}
						processPoints={service.processPoints}
					/>
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
