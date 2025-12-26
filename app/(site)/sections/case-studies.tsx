import { caseStudies } from "@/app/data/case-studies";

const CaseStudies = () => {
  return (
    <section
      id="casos"
      aria-labelledby="case-studies-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Casos
          </p>
          <h2
            id="case-studies-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            Ejemplos de trabajo e impacto
          </h2>
          <p className="max-w-2xl text-base text-black/70">
            Historias reales con foco en resultados: performance, calidad,
            escalabilidad y experiencia de usuario.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-purple-500/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6f0ff] via-transparent to-[#e9dcff] opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70">
                    {item.focus}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-black/70">
                  {item.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
