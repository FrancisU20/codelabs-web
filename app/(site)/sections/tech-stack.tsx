import { stackItems } from "@/app/data/stack";

const TechStack = () => {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Stack
          </p>
          <h2
            id="stack-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            Tecnologías favoritas
          </h2>
          <p className="max-w-2xl text-base text-black/70">
            Selección precisa según el contexto: performance, mantenibilidad,
            compliance y equipos que pueden operar sin fricción.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {stackItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-purple-500/5 transition-transform duration-150 hover:-translate-y-[2px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
