'use client'

const processSteps = [
	{
		icon: '❖',
		title: 'Initial Consultation',
		description: 'Creative Analysis is the process of evaluating creative works and requirements.',
	},
	{
		icon: '☀',
		title: 'Concept Development',
		description: 'Design sketches represent curated ideas merging creative design with function.',
	},
	{
		icon: '▤',
		title: 'Planning and Layout',
		description: 'Optimizing flow and structure to ensure the space works efficiently for your team.',
	},
	{
		icon: '★',
		title: 'Quality Check',
		description: 'Final review of materials, finishes, and implementation to ensure perfection.',
	},
]

const designProcessPoints = [
	'Creative analysis begins with exploring the wide range of possibilities.',
	'These patterns may inform decisions about what elements work.',
	'Collaborative brainstorming sessions and feedback loops.',
]

export default function ServiceDetailContent({ description, descriptionExtra }) {
	return (
		<div className="space-y-16">
			{/* Description */}
			<div>
				<h2 className="text-3xl font-bold mb-6">Service Description</h2>
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
					alt="Meeting"
				/>
			</div>

			{/* Design Process */}
			<div>
				<h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
				<p className="text-gray-600 mb-8">
					Whether it&apos;s built-in shelving, custom cabinetry, or stylish storage, we ensure that every
					item has its place.
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
				<h2 className="text-2xl font-bold mb-4">Conclusion</h2>
				<p className="text-gray-600">
					Our service is about creating spaces that grow with your business. We design with longevity in
					mind, ensuring that your space evolves with your needs and culture.
				</p>
			</div>
		</div>
	)
}
