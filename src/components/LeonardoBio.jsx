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
            Huerta?
          </h2>

          {/* Bio bullets */}
          <ul className="space-y-4 text-white text-base sm:text-lg leading-relaxed list-disc list-outside pl-5 marker:text-campana-lima">
            <li>
              <strong>Profesor universitario de Derecho y Filosofía</strong>, nacido en <strong>Pereira, Risaralda</strong>, en una familia trabajadora de clase media. Tiene 46 años, está casado y es padre de dos hijos.
            </li>
            <li>
              Académico con una sólida formación: graduado en <strong>dos carreras</strong>, con <strong>cinco especializaciones</strong>, <strong>dos maestrías con honores</strong> y actualmente cursa un <strong>doctorado</strong>.
            </li>
            <li>
              Ha dedicado gran parte de su vida profesional a la <strong>docencia universitaria</strong> y al estudio del Estado, el derecho y la filosofía política.
            </li>
            <li>
              Fue <strong>Defensor del Pueblo Delegado para la Salud (2021-2025)</strong>, donde lideró jornadas descentralizadas para garantizar el acceso a servicios médicos y medicamentos en las regiones más apartadas del país.
            </li>
            <li>
              Durante su gestión se resolvieron más de <strong>120.000 casos</strong> relacionados con el derecho a la salud en los <strong>32 departamentos</strong> de Colombia.
            </li>
            <li>
              Se desempeñó como <strong>Secretario de Educación de Pereira</strong>, donde impulsó proyectos educativos y la construcción de <strong>tres megacolegios</strong>, además de recibir <strong>5 premios del Ministerio de Educación</strong> en la "Noche de los Mejores".
            </li>
            <li>
              En 2026 inició su camino como <strong>precandidato presidencial</strong>, proponiendo una visión de país que combine reformas sociales con fortalecimiento del sector empresarial.
            </li>
            <li>
              Defiende la idea de avanzar hacia un <strong>modelo de Estado más federal</strong>, con mayor autonomía para las regiones y decisiones más cercanas a las realidades locales.
            </li>
            <li>
              Se define ideológicamente como <strong>"ambidiestro"</strong>, buscando un punto de equilibrio entre distintas corrientes políticas para construir soluciones prácticas.
            </li>
          </ul>

          {/* Closing statement */}
          <p className="mt-8 text-campana-lima font-bold text-lg sm:text-xl leading-snug">
            Un liderazgo académico y territorial enfocado en soluciones, diálogo y modernización del Estado colombiano.
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
