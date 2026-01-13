'use client'

export default function BlogDetailContent() {
	return (
		<article className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
			{/* Article content with custom styling */}
			<div className="max-w-5xl mx-auto">
				{/* Section 1 */}
				<div className="anim-fade-up mb-16">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						Architecture & Art Have Always A Deep And Intrinsic Relationship
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						Architecture intersects with art, the results are sculptural buildings that transcend mere
						functionality, becoming iconic landmarks that provoke thought, admiration, and sometimes even
						controversy. These structures redefine what it means to inhabit space, turning ordinary
						environments into works of art that resonate with the human spirit.
					</p>
					<p className="text-gray-600 text-xl leading-relaxed">
						Sculptural architecture blurs the lines between form and function, allowing the design itself to
						tell a story or represent an idea. It challenges the status quo of &quot;form follows
						function&quot; by suggesting that form itself can be the function.
					</p>
				</div>

				{/* Section 2 */}
				<div className="anim-fade-up mb-16">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						One of The Most Notable Examples
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						Antoni Gaudí&apos;s Sagrada Família in Barcelona is a striking example of the fusion of art and
						architecture. With its intricate façades and towering spires, Gaudí&apos;s masterpiece resembles
						a stone sculpture more than a traditional church. Every surface of the building is adorned with
						symbolic carvings.
					</p>

					<ul className="space-y-4 mb-12 mt-8">
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Inspire future generations of architects and artists to think free from conventional
								design.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Visitors to a sculptural building are invited to interact with the architecture.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
							<span className="text-lg text-gray-700 font-medium leading-relaxed">
								Architecture is the idea that buildings can evoke an emotional response.
							</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Full Width Images */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
				<div className="overflow-hidden rounded-lg h-[500px] anim-fade-up">
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
						className="w-full h-full object-cover hover:scale-110 transition duration-700"
						alt="Interior"
					/>
				</div>
				<div className="overflow-hidden rounded-lg h-[500px] anim-fade-up">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
						className="w-full h-full object-cover hover:scale-110 transition duration-700"
						alt="Stairs"
					/>
				</div>
			</div>

			{/* Quote */}
			<div className="max-w-5xl mx-auto">
				<div className="bg-gray-50 p-12 md:p-16 rounded-xl border-l-4 border-black my-16 relative anim-fade-up">
					<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-lg text-3xl font-serif">
						&quot;
					</div>
					<blockquote className="text-center">
						<p className="text-3xl md:text-4xl font-medium text-black leading-tight italic mb-0">
							&quot;Every surface of the building is adorned with symbolic carvings, mosaics, and organic
							forms that evoke the natural world, creating a sense of fluidity and movement.&quot;
						</p>
					</blockquote>
				</div>

				{/* Section 3 */}
				<div className="anim-fade-up">
					<h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
						Surrounding Architecture And The Public Space
					</h2>
					<p className="text-gray-600 text-xl leading-relaxed mb-8">
						These structures are not just places to live, work, or play they are experiences in themselves.
						Visitors to a sculptural building are invited to interact with the architecture, to move through
						it, and to experience how light, shadow, and space shift as they explore.
					</p>
					<p className="text-gray-600 text-xl leading-relaxed">
						This dynamic interaction between the user and the structure creates a multi-sensory experience
						that is often missing from more traditional forms of architecture.
					</p>
				</div>
			</div>
		</article>
	)
}
