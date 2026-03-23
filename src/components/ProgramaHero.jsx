export default function ProgramaHero() {
  return (
    <>
      {/* ── TOP SECTION: Yellow/lime background with crowd ── */}
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
              <h1 className="mb-6 md:mb-8 flex justify-center md:justify-start">
                <img
                  src="/imgi_47_texto-una-nueva-historia-480x52.webp"
                  alt="Una Nueva Historia"
                  className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
                />
              </h1>
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
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM SECTION: Purple background with 3 acuerdos ── */}
      <section
        className="w-full bg-campana-morado"
        aria-label="Tres acuerdos del programa"
      >
        {/* Top accent line */}
        <div className="w-full h-1.5 bg-campana-lima" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20">
          {/* Intro text */}
          <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 sm:mb-14 md:mb-20 max-w-4xl mx-auto font-bold">
            Una nueva historia para Colombia empieza con tres acuerdos que responden a lo que hoy
            le duele al país, para cuidar a la gente y salir adelante.
          </p>

          {/* Three circular icons — ALWAYS in a row */}
          <div className="flex flex-row items-start justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-20">
            {/* Acuerdo Seguridad */}
            <div className="flex flex-col items-center gap-3 sm:gap-5 flex-1">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/imgi_10_acuerdo-seguridad.webp"
                  alt="Acuerdo por la Seguridad y Gobernabilidad Territorial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-campana-lima font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-center leading-snug sm:leading-relaxed">
                Acuerdo por la<br />Seguridad y<br />Gobernabilidad<br />Territorial
              </p>
            </div>

            {/* Acuerdo Igualdad */}
            <div className="flex flex-col items-center gap-3 sm:gap-5 flex-1">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/imgi_11_acuerdo-igualdad.webp"
                  alt="Acuerdo por la Igualdad y la Justicia Social"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-campana-lima font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-center leading-snug sm:leading-relaxed">
                Acuerdo por la<br />Igualdad y la<br />Justicia Social
              </p>
            </div>

            {/* Acuerdo Desarrollo */}
            <div className="flex flex-col items-center gap-3 sm:gap-5 flex-1">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/imgi_12_acuerdo-desarrollo.webp"
                  alt="Acuerdo por el Desarrollo Regional sin Corrupción"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-campana-lima font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-center leading-snug sm:leading-relaxed">
                Acuerdo por el<br />Desarrollo<br />Regional sin<br />Corrupción
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
