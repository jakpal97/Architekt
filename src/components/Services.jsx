'use client';

export default function Services() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12" id="services">
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <h2 className="text-6xl font-medium tracking-tight">Our Selected Services</h2>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2">
          See All Services →
        </button>
      </div>

      <div className="service-item border-t border-gray-300 py-12 flex flex-col md:flex-row gap-12 opacity-0 translate-y-10">
        <div className="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-[300px] object-cover rounded-lg"
            alt="Home Decor"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <span className="text-gray-500 text-lg mb-2 block">01</span>
            <h3 className="text-4xl font-medium mb-6">Home Decoration</h3>
            <p className="text-gray-600 max-w-xl">
              Integrating the natural environment with architectural design through outdoor space planning.
              Designing buildings with energy efficiency in mind.
            </p>
          </div>
          <button className="mt-8 border border-black w-fit rounded-full px-6 py-2 text-sm flex items-center gap-2 hover:bg-black hover:text-white transition">
            Service Details →
          </button>
        </div>
      </div>

      <div className="service-item border-t border-gray-300 py-12 flex flex-col md:flex-row gap-12 opacity-0 translate-y-10">
        <div className="w-full md:w-1/3 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            className="w-full h-[300px] object-cover rounded-lg"
            alt="Interior Design"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between md:order-1">
          <div>
            <span className="text-gray-500 text-lg mb-2 block">02</span>
            <h3 className="text-4xl font-medium mb-6">Interior Design</h3>
            <p className="text-gray-600 max-w-xl">
              Designing functional, aesthetically pleasing interiors that complement architecture.
              Planning multi-building projects and campus designs.
            </p>
          </div>
          <button className="mt-8 border border-black w-fit rounded-full px-6 py-2 text-sm flex items-center gap-2 hover:bg-black hover:text-white transition">
            Service Details →
          </button>
        </div>
      </div>
    </section>
  );
}
