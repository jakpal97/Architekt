'use client'

const processSteps = [
	{
		icon: '❖',
		title: 'Konsultacja Wstępna',
		description: 'Analiza kreatywna to proces oceny prac kreatywnych i wymagań projektowych.',
	},
	{
		icon: '☀',
		title: 'Rozwój Koncepcji',
		description: 'Szkice projektowe reprezentują starannie dobrane pomysły łączące kreatywny design z funkcjonalnością.',
	},
	{
		icon: '▤',
		title: 'Planowanie i Układ',
		description: 'Optymalizacja przepływu i struktury, aby zapewnić efektywne działanie przestrzeni dla Twojego zespołu.',
	},
	{
		icon: '★',
		title: 'Kontrola Jakości',
		description: 'Końcowy przegląd materiałów, wykończeń i realizacji, aby zapewnić perfekcję.',
	},
]

const designProcessPoints = [
	'Analiza kreatywna rozpoczyna się od zbadania szerokiego zakresu możliwości.',
	'Te wzorce mogą informować decyzje o tym, które elementy działają.',
	'Sesje wspólnego burzenia mózgów i pętle informacji zwrotnej.',
]

export default function ServiceDetailContent({ description, descriptionExtra }) {
	return (
		<div className="space-y-16">
			{/* Description */}
			<div>
				<h2 className="text-3xl font-bold mb-6">Opis Usługi</h2>
				<p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
				<p className="text-gray-600 text-lg leading-relaxed">{descriptionExtra}</p>
			</div>

			{/* Process Icons Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{processSteps.map((step, index) => (
					<div key={index} className="process-icon-box">
						<div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 text-2xl">
							{step.icon}
						</div>
						<h3 className="text-xl font-bold mb-2">{step.title}</h3>
						<p className="text-gray-500">{step.description}</p>
					</div>
				))}
			</div>

			{/* Middle Image */}
			<div className="overflow-hidden rounded-xl h-[400px]">
				<img
					src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
					className="w-full h-full object-cover hover:scale-105 transition duration-700"
					alt="Spotkanie"
				/>
			</div>

			{/* Design Process */}
			<div>
				<h2 className="text-3xl font-bold mb-6">Nasz Proces Projektowy</h2>
				<p className="text-gray-600 mb-8">
					Czy to wbudowane półki, indywidualne meble, czy stylowe przechowywanie, zapewniamy, że każdy
					przedmiot ma swoje miejsce.
				</p>
				<ul className="space-y-4">
					{designProcessPoints.map((point, index) => (
						<li key={index} className="flex items-start gap-4">
							<span className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center mt-1 text-[10px]">
								●
							</span>
							<span className="text-lg text-gray-700 font-medium">{point}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Conclusion */}
			<div className="bg-gray-50 p-8 rounded-xl border-l-4 border-black">
				<h2 className="text-2xl font-bold mb-4">Podsumowanie</h2>
				<p className="text-gray-600">
					Nasza usługa polega na tworzeniu przestrzeni, które rosną wraz z Twoim biznesem. Projektujemy z
					myślą o długowieczności, zapewniając, że Twoja przestrzeń ewoluuje wraz z Twoimi potrzebami i
					kulturą.
				</p>
			</div>
		</div>
	)
}
