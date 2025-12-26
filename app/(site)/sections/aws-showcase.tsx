import Image from "next/image";

const awsBenefits = [
  "Arquitecturas en ECS, Lambda, EventBridge y SQS con resiliencia y costos controlados.",
  "Observabilidad con métricas, trazas y alertas alineadas a SLOs ejecutivos.",
  "Prácticas de seguridad y cumplimiento desde el diseño: IAM, redes, cifrado y segregación.",
  "Pipelines CI/CD, blue/green y canary para despliegues sin interrupción.",
];

const awsLogos = [
  { name: "AWS", src: "/logos/aws.png" },
  { name: "Lambda", src: "/logos/aws-lambda.png" },
  { name: "ECS", src: "/logos/aws-ecs.png" },
  { name: "EventBridge", src: "/logos/aws-eventbridge.png" },
  { name: "SQS", src: "/logos/aws-sqs.png" },
  { name: "RDS", src: "/logos/aws-rds.png" },
];

const AwsShowcase = () => {
  return (
    <section
      id="aws"
      aria-labelledby="aws-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-black/5 bg-gradient-to-br from-[#f7f1ff] via-white to-[#f0e6ff] px-6 py-10 shadow-xl shadow-purple-500/10 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              AWS
            </p>
            <h2
              id="aws-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              Embajadores de Amazon Web Services
            </h2>
            <p className="max-w-2xl text-base text-black/70">
              Somos embajadores y socios técnicos. Diseñamos y operamos
              plataformas sobre AWS para salud, fintech, identidad y empresas
              que necesitan disponibilidad, seguridad y velocidad de entrega.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/70 px-4 py-3 shadow-lg shadow-purple-500/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7B3FE4] to-[#C778FF] text-sm font-semibold text-white">
                AWS
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  Partner & Ambassador
                </p>
                <p className="text-xs text-black/60">Arquitectura + Delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ul className="space-y-3 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-lg shadow-purple-500/10">
            {awsBenefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-black/80">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7B3FE4] to-[#C778FF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-lg shadow-purple-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              Servicios clave
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {awsLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-md shadow-purple-500/10"
                >
                  <Image
                    src={logo.src}
                    alt={`Logo de ${logo.name}`}
                    width={140}
                    height={70}
                    className="h-12 w-auto object-contain sm:h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwsShowcase;
