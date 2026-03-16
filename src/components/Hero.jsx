export default function Hero() {
  return (
    <section className="w-full bg-campana-lima" aria-label="Sección principal de campaña">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Column — Poster Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img
            src="/poster-hero.PNG"
            alt="Leonardo — Póster oficial de campaña"
            className="w-full h-full object-cover object-center min-h-[400px] md:min-h-full"
            loading="eager"
          />
        </div>

        {/* Right Column — Text Block */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-16 text-center">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-campana-morado leading-[0.95] tracking-tight">
            UNA NUEVA
            <br />
            HISTORIA
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-campana-morado/80 tracking-wide">
            DE SOLUCIONES PARA LA GENTE
          </p>

          {/* Badge Block */}
          <div className="mt-8 bg-campana-morado rounded-lg px-8 py-4 shadow-2xl transform hover:scale-105 transition-transform duration-200">
            <span className="text-campana-lima text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest">
              LEONARDO EL VICE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
