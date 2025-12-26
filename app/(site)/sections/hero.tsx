import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pb-20 pt-16 sm:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 fade-glow" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7B3FE4] to-[#C778FF]" />
            Estudio premium de software
          </div>
          <div className="space-y-4">
            <h1
              id="hero-title"
              className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl"
            >
              Software listo para negocios críticos. CodeLabs diseña, construye
              y opera productos digitales con estándar empresarial.
            </h1>
            <p className="text-lg text-black/70">
              Arquitectura, diseño y delivery end-to-end. Un fundador arquitecto
              senior lidera cada iniciativa para garantizar claridad técnica,
              control de riesgos y velocidad sostenida.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="gradient-pill soft-shadow rounded-full px-6 py-3 text-center text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Trabaja con nosotros
            </Link>
            <Link
              href="#servicios"
              className="rounded-full border border-black/10 px-6 py-3 text-center text-base font-semibold text-black transition duration-200 hover:border-transparent hover:bg-black/5"
            >
              Ver capacidades
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-black/70 sm:w-max sm:grid-cols-2">
            {[
              {
                title: "Arquitectura",
                detail:
                  "Clean Architecture, DDD, microservicios y gobernanza técnica",
              },
              {
                title: "Entrega",
                detail:
                  "Sistemas críticos en salud, fintech, identidad y nube con SLAs claros",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm shadow-purple-500/5"
              >
                <p className="text-xs uppercase tracking-wide text-black/50">
                  {item.title}
                </p>
                <p className="font-medium text-black">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#f4edff] via-white to-[#f8f6ff] p-6 shadow-xl shadow-purple-500/10">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#c778ff]/20 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#7b3fe4]/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-black/70 shadow-sm">
                  Arquitectura + Producto
                </div>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60">
                  Web · Móvil · Nube
                </span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    label: "Dirección técnica",
                    value: "Arquitecto senior asignado en cada entrega.",
                  },
                  {
                    label: "Calidad medible",
                    value: "Escalabilidad, seguridad y DX desde el día uno.",
                  },
                  {
                    label: "Ejecución completa",
                    value: "Discovery, UX/UI, frontend, backend y DevOps.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-sm text-black shadow-sm"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7B3FE4] to-[#C778FF]" />
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-black/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
