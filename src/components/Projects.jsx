'use client';

export default function Projects() {
  return (
    <section className="relative bg-white z-20 pt-24 pb-24 px-6 md:px-12" id="project-list">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl mb-12">Latest Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                alt="Villa"
              />
            </div>
            <h4 className="text-2xl font-medium">Residential Villa</h4>
            <p className="text-gray-500">Architecture / Canada</p>
          </div>
          <div className="group cursor-pointer mt-12 md:mt-24">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                alt="Luxury Interior"
              />
            </div>
            <h4 className="text-2xl font-medium">Luxury Interiors</h4>
            <p className="text-gray-500">Design / Norway</p>
          </div>
        </div>
      </div>
    </section>
  );
}
