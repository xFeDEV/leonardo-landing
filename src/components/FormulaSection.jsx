export default function FormulaSection() {
  return (
    <section
      className="w-full bg-campana-morado py-12 md:py-20"
      aria-label="La fórmula presidencial"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-white text-base md:text-lg font-bold uppercase tracking-widest mb-3">
            La fórmula para escribir
          </p>
          <div className="flex justify-center">
            <img
              src="/imgi_3_nueva-historia-fondo-morado.webp"
              alt="Una Nueva Historia"
              className="w-[280px] sm:w-[360px] md:w-[480px] lg:w-[500px] h-auto"
            />
          </div>
        </div>

        {/* Two columns: Claudia & Leonardo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-8">

          {/* ── Claudia Column ── */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 lg:gap-6">
            {/* Photo */}
            <div className="flex-shrink-0 w-[180px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
              <img
                src="/imgi_4_claudia-lopez-presidenta.webp"
                alt="Claudia López — Presidenta"
                className="w-full h-auto rounded-[2rem] shadow-xl"
                loading="lazy"
              />
            </div>
            {/* Bio & Button */}
            <div className="flex-1 flex flex-col items-center sm:items-start md:items-center lg:items-start text-center sm:text-left md:text-center lg:text-left">
              <img
                src="/imgi_5_claudia-presidenta-logo.webp"
                alt="Claudia Presidenta"
                className="w-[160px] md:w-[180px] h-auto mb-4"
              />
              <p className="text-white text-xs lg:text-sm leading-relaxed mb-6 max-w-[260px] mx-auto sm:mx-0 md:mx-auto lg:mx-0">
                Claudia es una bogotana con trayectoria en la academia, el activismo, el periodismo y el
                servicio público. Es profesional en Finanzas, Gobierno y Relaciones Internacionales del
                Externado, tiene maestría en administración pública y política urbana, fue becaria de Yale,
                doctora en Ciencia Política y desde 2024 es becaria en Harvard.
              </p>
              <a
                href="/programa"
                className="inline-block bg-campana-lima text-campana-morado font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-md hover:bg-white hover:-translate-y-1 transition-all duration-200"
              >
                Conoce más
              </a>
            </div>
          </div>

          {/* ── Leonardo Column ── */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 lg:gap-6">
            {/* Bio & Button (order swapped for mirror layout) */}
            <div className="flex-1 flex flex-col items-center sm:items-end md:items-center lg:items-end text-center sm:text-right md:text-center lg:text-right order-2 sm:order-1 md:order-2 lg:order-1">
              <img
                src="/imgi_6_leonardo-el-vice-logo.webp"
                alt="Leonardo El Vice"
                className="w-[160px] md:w-[180px] h-auto mb-4"
              />
              <p className="text-white text-xs lg:text-sm leading-relaxed max-w-[260px] mx-auto sm:mx-0 md:mx-auto lg:mx-0">
                Leonardo es pereirano. Abogado de la Universidad Libre y licenciado en Filosofía de la
                Universidad Tecnológica de Pereira. Cuenta con una maestría en Derecho Administrativo y es
                candidato a doctor en Derecho.
              </p>
              <p className="text-white text-xs lg:text-sm leading-relaxed mb-6 mt-3 max-w-[260px] mx-auto sm:mx-0 md:mx-auto lg:mx-0">
                Cuenta con especializaciones en Derecho Probatorio, Derechos Humanos y DIH, Derecho
                Administrativo y Derecho Constitucional.
              </p>
              <a
                href="/programa"
                className="inline-block bg-campana-lima text-campana-morado font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-md hover:bg-white hover:-translate-y-1 transition-all duration-200"
              >
                Conoce más
              </a>
            </div>
            {/* Photo */}
            <div className="flex-shrink-0 w-[180px] sm:w-[160px] md:w-[180px] lg:w-[200px] order-1 sm:order-2 md:order-1 lg:order-2">
              <img
                src="/imgi_7_Leonardo-Huerta-vicepresidente.webp"
                alt="Leonardo Huerta — El Vice"
                className="w-full h-auto rounded-[2rem] shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
