const highlights = [
  "Arquitectura limpia, hexagonal y DDD aplicada en producción",
  "Microservicios y eventos con AWS (ECS, Lambda, EventBridge, SQS, RDS)",
  "Experiencia en CI/CD, observabilidad y plataformas de alto tráfico",
  "Flutter para experiencias móviles rápidas y mantenibles",
  "Inicios como experto en WordPress con entregas empresariales seguras",
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Fundador
          </p>
          <h2
            id="about-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            Un arquitecto de software hands-on que acompaña cada decisión
          </h2>
          <p className="text-base text-black/70">
            Hola, soy Francisco Ulloa, fundador de CodeLabs. Me involucro en
            arquitectura, diseño técnico y delivery. Busco soluciones elegantes,
            seguras y claras para equipos que necesitan mover productos sin
            sacrificar calidad.
          </p>
          <p className="text-base text-black/70">
            Trayectoria construyendo sistemas complejos: Clean Architecture, DDD
            y microservicios en AWS. Empecé como especialista en WordPress y
            hoy sigo entregando implementaciones empresariales cuando la
            velocidad es clave. Versatilidad con criterio.
          </p>
        </div>
        <div className="rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-purple-500/10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Manifiesto técnico
              </p>
              <p className="text-lg font-semibold text-black">
                Calidad que se siente en producción
              </p>
            </div>
            <span className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-[#7B3FE4] to-[#C778FF] px-4 text-sm font-semibold text-white shadow-md">
              Arquitectura primero
            </span>
          </div>
          <ul className="space-y-3 text-sm text-black/80">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7B3FE4] to-[#C778FF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
