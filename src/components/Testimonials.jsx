'use client';

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-xl">❖</span>
          <span className="uppercase text-sm tracking-widest text-gray-500">Testimonial</span>
        </div>

        <h2 className="text-6xl md:text-7xl font-medium mb-24 tracking-tight">What Our Clients Say</h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative z-10">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light mb-12">
              &quot;Working with Arcbes Architecture was an inspiring journey. Their ability to balance modern
              design with sustainability resulted in a beautiful, functional space that reflects our values.
              Not only did they create a stunning home, but their focus on renewable energy exceeded our
              expectations.&quot;
            </p>

            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-xl font-bold">Richard Jackson</h4>
                <p className="text-gray-500 mt-1">CEO at Luxuries</p>
              </div>

              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition duration-300">
                  ←
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition duration-300">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[600px] overflow-hidden rounded-sm relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover testimonial-img scale-110"
              alt="Client Portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
