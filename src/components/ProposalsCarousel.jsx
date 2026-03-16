import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: '/carrusel/yo-soy-leonardo-huerta.jpg', caption: 'Yo soy Leonardo Huerta' },
  { src: '/carrusel/autonomia-territorial.jpg', caption: 'Autonomía territorial' },
  { src: '/carrusel/los-niños-son-prioridad.jpg', caption: 'Los niños son prioridad' },
  { src: '/carrusel/y-la-salud-cuendo.jpg', caption: '¿Y la salud, cuándo?' },
  { src: '/carrusel/caqueta.jpg', caption: 'Caquetá' },
  { src: '/carrusel/el-conocido.jpg', caption: 'El conocido' },
  { src: '/carrusel/quien-carga-la-maleta.jpg', caption: '¿Quién carga la maleta?' },
];

export default function ProposalsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, slides.length - visibleCount);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  // Auto-advance every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="w-full py-12 md:py-16"
      aria-label="Propuestas de campaña"
      id="propuestas"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Carousel container */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12
                       bg-campana-morado text-white rounded-full flex items-center justify-center
                       hover:bg-campana-morado/80 hover:scale-110 active:scale-95
                       transition-all duration-200 shadow-lg -ml-3 md:-ml-5 cursor-pointer"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12
                       bg-campana-morado text-white rounded-full flex items-center justify-center
                       hover:bg-campana-morado/80 hover:scale-110 active:scale-95
                       transition-all duration-200 shadow-lg -mr-3 md:-mr-5 cursor-pointer"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards track */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl
                                  transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[9/16]">
                      <img
                        src={slide.src}
                        alt={slide.caption}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Caption */}
                    <div className="p-4 text-center border-t-4 border-campana-morado">
                      <p className="text-campana-morado font-bold text-base md:text-lg">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex
                  ? 'bg-campana-morado scale-125'
                  : 'bg-campana-morado/30 hover:bg-campana-morado/60'
                }`}
              aria-label={`Ir a grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
