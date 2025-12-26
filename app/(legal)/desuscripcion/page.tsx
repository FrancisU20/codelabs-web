export default function DesuscripcionPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-b from-[#f7f9ff] via-white to-[#f2f6ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Desuscripción / Unsubscribe
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Cómo darte de baja de nuestras comunicaciones
          </h1>
          <p className="max-w-3xl text-base text-black/70">
            Si ya no deseas recibir correos o mensajes de CodeLabs, puedes solicitarlo en
            cualquier momento. Procesaremos tu solicitud en el menor tiempo posible.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-sm text-black/80">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Opciones para darte de baja</h2>
            <ul className="mt-3 space-y-2">
              <li>
                • Enviar un correo a{" "}
                <a className="font-semibold text-black underline" href="mailto:support@codelabsecuador.com?subject=Desuscripci%C3%B3n">
                  support@codelabsecuador.com
                </a>{" "}
                indicando el email que deseas remover.
              </li>
              <li>
                • Contactarnos por WhatsApp al{" "}
                <a className="font-semibold text-black underline" href="https://wa.me/593998630405?text=Solicito%20desuscripci%C3%B3n">
                  +593 998630405
                </a>{" "}
                solicitando la desuscripción.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Tiempo de procesamiento</h2>
            <p className="mt-2">
              Atendemos las solicitudes en el menor tiempo posible. Si recibes un correo
              posterior mientras procesamos tu baja, puedes ignorarlo; quedará desactivado.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Privacidad y seguridad</h2>
            <p className="mt-2">
              Tu solicitud se gestiona conforme a nuestra{" "}
              <a className="font-semibold text-black underline" href="/privacidad">
                Política de Privacidad
              </a>{" "}
              y{" "}
              <a className="font-semibold text-black underline" href="/tratamiento-datos">
                Política de Tratamiento de Datos
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
