import React from 'react';

const brands = [
  { name: "Levi's", id: 1 },
  { name: "Sephora", id: 2 },
  { name: "Johnnie Walker", id: 3 },
  { name: "L'Oreal Paris", id: 4 },
  { name: "Porsche", id: 5 },
  { name: "Disney+", id: 6 },
  { name: "Storytel", id: 7 },
  { name: "Techwish", id: 8 },
  { name: "Garage", id: 9 },
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      {/* Styl CSS wstrzyknięty bezpośrednio do komponentu */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${brands.length})); }
        }
        .animate-scroll {
          display: flex;
          width: calc(250px * ${brands.length * 2});
          animation: scroll 30s linear infinite;
        }
        .logo-item {
          width: 250px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          Wybrane Realizacje WPM Solutions
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Gradienty po bokach dla efektu miękkiego zanikania */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-scroll">
          {/* Pierwsza pętla */}
          {brands.map((brand) => (
            <div key={brand.id} className="logo-item">
              <span className="text-2xl md:text-3xl font-black text-gray-300 hover:text-black transition-all duration-300 cursor-default grayscale hover:grayscale-0">
                {brand.name}
              </span>
            </div>
          ))}
          {/* Druga pętla (kopia dla płynności) */}
          {brands.map((brand) => (
            <div key={`copy-${brand.id}`} className="logo-item">
              <span className="text-2xl md:text-3xl font-black text-gray-300 hover:text-black transition-all duration-300 cursor-default grayscale hover:grayscale-0">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;