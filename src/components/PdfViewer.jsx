export default function PdfViewer() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-14 md:py-20"
      aria-label="Leer el Programa de Gobierno"
      id="leer-programa"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-campana-morado mb-3">
            Lee el Programa de Gobierno
          </h2>
          <div className="w-20 h-1 bg-campana-lima mx-auto rounded-full" />
        </div>

        {/* PDF Embed */}
        <div
          className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200"
          style={{ aspectRatio: '8.5 / 11' }}
        >
          <iframe
            src="/Programa de Gobierno UNA NUEVA HISTORIA (1).pdf"
            title="Programa de Gobierno — Una Nueva Historia"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Fallback link */}
        <p className="text-center mt-6 text-gray-500 text-sm">
          ¿No puedes ver el documento?{' '}
          <a
            href="/Programa de Gobierno UNA NUEVA HISTORIA (1).pdf"
            download
            className="text-campana-morado font-semibold underline hover:text-campana-morado/70 transition-colors"
          >
            Descárgalo aquí
          </a>
        </p>
      </div>
    </section>
  );
}
