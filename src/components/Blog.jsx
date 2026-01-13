'use client';

export default function Blog() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-t border-gray-300 pt-12">
          <div className="flex items-center gap-2">
            <span className="text-xl">❖</span>
            <h3 className="text-xl font-medium">Articles & Blog</h3>
          </div>
          <h2 className="hidden md:block text-6xl font-medium absolute left-1/2 -translate-x-1/2">
            Our Articles & Blog
          </h2>
          <button className="border border-black rounded-full px-6 py-3 text-sm hover:bg-black hover:text-white transition flex items-center gap-2">
            See All Articles <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-6 h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="Architecture"
              />
            </div>
            <span className="text-sm text-gray-500 mb-2 block">Architecture</span>
            <h3 className="text-3xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
              Blending Nature with Urban Spaces: The Rise of The New Biophilic Design
            </h3>
          </article>

          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-6 h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="Interior"
              />
            </div>
            <span className="text-sm text-gray-500 mb-2 block">Interior</span>
            <h3 className="text-3xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
              The Intersection of Art and Architecture to Creating Sculptural Buildings
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}
