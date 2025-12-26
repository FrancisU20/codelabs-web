export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#f7f9ff] via-white to-[#f2f6ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Política de privacidad
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Cómo protegemos tu información en CodeLabs
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            En CodeLabs cuidamos la privacidad y confidencialidad de tus datos.
            Este documento explica qué información recolectamos, cómo la usamos
            y cuáles son tus derechos.
          </p>
          <p className="text-sm text-black/60">Última actualización: enero 2025</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">1. Información que recolectamos</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li>Datos de contacto: nombre, email, teléfono, empresa.</li>
              <li>Información de proyecto: contexto, requerimientos y objetivos de negocio.</li>
              <li>
                Datos técnicos: registros básicos de navegación (logs mínimos, cookies técnicas)
                para seguridad y rendimiento.
              </li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">2. Para qué usamos tus datos</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li>Responder tus consultas y coordinar reuniones.</li>
              <li>Preparar propuestas, estimaciones y planes técnicos.</li>
              <li>Mejorar la seguridad y el rendimiento de nuestros sitios.</li>
              <li>Cumplir obligaciones legales y contractuales.</li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">3. Base legal</h2>
            <p className="text-sm text-black/80">
              Tratamos datos bajo tu consentimiento, interés legítimo para responder solicitudes y
              cumplimiento de obligaciones contractuales o legales, según aplique.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">4. Plazos de conservación</h2>
            <p className="text-sm text-black/80">
              Conservamos datos solo el tiempo necesario para los fines descritos o mientras exista
              una relación contractual o legal que lo requiera.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">5. Seguridad</h2>
            <p className="text-sm text-black/80">
              Aplicamos controles de acceso, cifrado en tránsito (TLS) y prácticas de mínimos
              privilegios para proteger tu información.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">6. Compartición con terceros</h2>
            <p className="text-sm text-black/80">
              Solo compartimos datos con proveedores necesarios para prestar nuestros servicios (por
              ejemplo, hosting, herramientas de colaboración) bajo acuerdos de confidencialidad y
              protección de datos. No vendemos tu información.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">7. Transferencias internacionales</h2>
            <p className="text-sm text-black/80">
              Si transferimos datos fuera de tu país, lo haremos con salvaguardas adecuadas
              (cláusulas contractuales o mecanismos equivalentes).
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">8. Tus derechos</h2>
            <p className="text-sm text-black/80">
              Puedes solicitar acceso, corrección, eliminación u oposición al tratamiento de tus
              datos. Escríbenos y atenderemos tu solicitud conforme a la normativa aplicable.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">9. Contacto</h2>
            <p className="text-sm text-black/80">
              Para ejercer tus derechos o resolver dudas sobre privacidad, contáctanos en{" "}
              <a className="font-semibold text-black underline" href="mailto:support@codelabsecuador.com">
                support@codelabsecuador.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
