export default function TratamientoDatosPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#f7f9ff] via-white to-[#f2f6ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Política de tratamiento de datos
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Lineamientos para el tratamiento de datos personales
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            Esta política describe cómo CodeLabs trata los datos personales que
            recibimos de clientes, prospectos y usuarios. Complementa nuestra
            Política de Privacidad.
          </p>
          <p className="text-sm text-black/60">Última actualización: enero 2025</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">1. Responsable y contacto</h2>
            <p className="text-sm text-black/80">
              CodeLabs es responsable del tratamiento de datos. Para ejercer derechos o hacer
              consultas, escríbenos a{" "}
              <a className="font-semibold text-black underline" href="mailto:support@codelabsecuador.com">
                support@codelabsecuador.com
              </a>
              .
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">2. Finalidades del tratamiento</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li>Atender solicitudes de información, reuniones y propuestas.</li>
              <li>Ejecutar contratos y prestar servicios de consultoría y desarrollo.</li>
              <li>Gestionar facturación, soporte y continuidad operativa.</li>
              <li>Monitorear seguridad, rendimiento y calidad de nuestros servicios.</li>
              <li>Cumplir requerimientos legales o regulatorios aplicables.</li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">3. Categorías de datos</h2>
            <p className="text-sm text-black/80">
              Datos de identificación y contacto, información profesional/empresarial, datos
              técnicos mínimos (logs de seguridad, métricas de rendimiento) y documentación
              necesaria para la relación contractual. No solicitamos datos sensibles salvo que
              el proyecto lo requiera y bajo acuerdos específicos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">4. Base legal y legitimación</h2>
            <p className="text-sm text-black/80">
              Consentimiento, ejecución de contratos, interés legítimo para responder solicitudes
              y mejorar seguridad, y cumplimiento de obligaciones legales o regulatorias.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">5. Conservación</h2>
            <p className="text-sm text-black/80">
              Conservamos los datos únicamente durante la relación contractual y los plazos
              necesarios para cumplir obligaciones legales, fiscales o de defensa ante reclamos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">6. Encargados y terceros</h2>
            <p className="text-sm text-black/80">
              Podemos compartir datos con proveedores que actúan como encargados (hosting, correo,
              herramientas de gestión, soporte) bajo contratos de confidencialidad y protección
              de datos. No vendemos información personal.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">7. Transferencias internacionales</h2>
            <p className="text-sm text-black/80">
              Cuando un proveedor esté fuera de tu país, aplicamos salvaguardas adecuadas
              (cláusulas contractuales u otros mecanismos permitidos) para proteger los datos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">8. Derechos de los titulares</h2>
            <p className="text-sm text-black/80">
              Puedes ejercer acceso, rectificación, actualización, cancelación, oposición y
              portabilidad cuando aplique. También puedes revocar tu consentimiento. Escríbenos
              y atenderemos tu solicitud conforme a la normativa aplicable.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">9. Seguridad</h2>
            <p className="text-sm text-black/80">
              Implementamos cifrado en tránsito, controles de acceso con mínimos privilegios y
              monitoreo para prevenir accesos no autorizados, pérdida o alteración de los datos.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-black">10. Actualizaciones</h2>
            <p className="text-sm text-black/80">
              Podremos actualizar esta política para reflejar cambios legales o de servicio. La
              versión vigente estará disponible en este sitio.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
