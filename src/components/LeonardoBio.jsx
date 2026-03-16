export default function LeonardoBio() {
  return (
    <section
      className="relative w-full bg-campana-morado overflow-hidden"
      aria-label="¿Quién es Leonardo Huerta?"
      id="mi-vida"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end relative min-h-[550px]">
        {/* Left Column — Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16 z-10">
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

        {/* Right Column — Leonardo Image (transparent bg, sits on purple) */}
        <div className="w-full md:w-2/5 flex items-end justify-center md:justify-end self-end">
          <img
            src="/leonardo.png"
            alt="Leonardo Huerta — Candidato a la Vicepresidencia"
            className="w-full max-w-md md:max-w-none h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
