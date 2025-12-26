import { capabilities } from "@/app/data/capabilities";

const Capabilities = () => {
  return (
    <section
      id="servicios"
      aria-labelledby="capabilities-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              Capacidades
            </p>
            <h2
              id="capabilities-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              Diseño, arquitectura y entrega end-to-end
            </h2>
          </div>
          <p className="max-w-xl text-base text-black/70">
            Seleccionamos la tecnología correcta para tu contexto empresarial.
            Arquitectura clara, código limpio y un proceso visible con el
            fundador en el día a día.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-purple-500/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6f0ff] via-transparent to-[#f1eaff] opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <p className="inline-flex rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70">
                    {item.accent}
                  </p>
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/70">
                    {item.description}
                  </p>
                </div>
                <span className="mt-1 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-br from-[#7B3FE4] to-[#C778FF] px-4 text-sm font-semibold text-white shadow-md shadow-purple-500/25">
                  {item.accent}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
