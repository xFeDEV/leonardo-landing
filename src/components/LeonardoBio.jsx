export default function LeonardoBio() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="¿Quién es Leonardo Huerta?"
      id="mi-vida"
    >
      {/* Background image with purple texture */}
      <div
        className="absolute inset-0 bg-campana-morado bg-cover bg-center"
        style={{ backgroundImage: "url('/imgi_64_fondo-imparables-morado.webp')" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left Column — Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-tight italic mb-8">
            ¿Quién es Leonardo
            <br />
            Huerta y qué ha hecho?
          </h2>

          {/* Bio bullets */}
          <ul className="space-y-4 text-white text-base sm:text-lg leading-relaxed list-disc list-outside pl-5 marker:text-campana-lima">
            <li>
              De una familia trabajadora, nacido en el Cauca. Comprometido con las comunidades desde joven.
            </li>
            <li>
              <strong>Graduado en Derecho y Ciencias Políticas</strong>, con especialización en gestión pública y desarrollo territorial.
            </li>
            <li>
              Líder comunitario con más de <strong>15 años de experiencia</strong> en proyectos sociales y de infraestructura para las regiones más necesitadas.
            </li>
            <li>
              Impulsó programas de <strong>vivienda digna</strong> para más de <strong>5.000 familias</strong> en zonas rurales.
            </li>
            <li>
              Promovió la creación de <strong>centros de formación técnica</strong> en municipios apartados, beneficiando a miles de jóvenes.
            </li>
            <li>
              Gestionó recursos para la construcción de <strong>vías terciarias</strong> y mejoramiento de acueductos comunitarios.
            </li>
            <li>
              Defensor de la <strong>reforma agraria integral</strong> y del acceso a tierras productivas para campesinos.
            </li>
          </ul>

          {/* Closing statement */}
          <p className="mt-8 text-campana-lima font-bold text-lg sm:text-xl leading-snug">
            Un liderazgo construido desde el territorio, con resultados reales para la gente que más lo necesita.
          </p>
        </div>

        {/* Right Column — Poster Image, centered both ways */}
        <div className="w-full md:w-2/5 flex items-center justify-center py-8 md:py-12 px-4">
          <img
            src="/poster-hero.PNG"
            alt="Leonardo El Vice — Póster de campaña: Una Nueva Historia"
            className="w-full max-w-sm md:max-w-md h-auto object-contain rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
