export default function DescargaPrograma() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Descarga el Programa de Gobierno"
    >
      {/* Background image — crowd with lime tint */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo_boton_descarga_programa.png')" }}
        aria-hidden="true"
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16">

          {/* Left: Text + Download Button */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-campana-morado text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic uppercase mb-3 md:mb-4">
              Así escribiremos
            </p>
            <h2 className="mb-6 md:mb-8 flex justify-center md:justify-start">
              <img
                src="/imgi_47_texto-una-nueva-historia-480x52.webp"
                alt="Una Nueva Historia"
                className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
              />
            </h2>
            <a
              href="/Programa de Gobierno UNA NUEVA HISTORIA (1).pdf"
              download
              className="inline-block bg-campana-morado text-white font-bold text-xs sm:text-sm md:text-base
                         uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-3.5
                         border-2 border-campana-morado
                         hover:bg-campana-morado/85 hover:scale-105
                         active:scale-95 transition-all duration-200"
            >
              Descarga el programa de gobierno
            </a>
          </div>

          {/* Right: Book image */}
          <div className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px]">
            <img
              src="/libro.webp"
              alt="Libro del Programa de Gobierno — Claudia López y Leonardo Huerta 2026-2030"
              className="w-full h-auto drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
