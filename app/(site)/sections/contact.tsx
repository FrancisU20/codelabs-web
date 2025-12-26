"use client";

import { useState } from "react";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const phone = "0998630405";
  const waBase = `https://wa.me/593${phone.replace(/\D/g, "").slice(-9)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mensaje = [
      `Hola, soy ${nombre || "un contacto"}`,
      email ? `Correo: ${email}` : "",
      empresa ? `Empresa: ${empresa}` : "",
      descripcion ? `Proyecto: ${descripcion}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const url = `${waBase}?text=${encodeURIComponent(mensaje || "Quiero hablar con CodeLabs")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-gradient-to-br from-white via-white to-[#f6f0ff] px-6 py-10 shadow-xl shadow-purple-500/10 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              Hablemos
            </p>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              Conversemos de tu iniciativa
            </h2>
            <p className="max-w-xl text-base text-black/70">
              Respuesta directa del fundador. Clarificamos objetivos, riesgos y
              gobernanza técnica para presentarte una ruta ejecutiva en horas,
              no semanas.
            </p>
            <a
              href="mailto:support@codelabsecuador.com"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Escribir por email
              <span aria-hidden>→</span>
            </a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid w-full max-w-xl grid-cols-1 gap-4 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-md shadow-purple-500/5 sm:p-6"
          >
            <div className="grid gap-2">
              <label htmlFor="nombre" className="text-sm font-semibold text-black">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#cbb2ff]/60"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-black">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#cbb2ff]/60"
                placeholder="nombre@empresa.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="empresa" className="text-sm font-semibold text-black">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#cbb2ff]/60"
                placeholder="Nombre de la empresa"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="descripcion"
                className="text-sm font-semibold text-black"
              >
                Descripción del proyecto
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#cbb2ff]/60"
                placeholder="Reto, alcance, fechas, tecnologías..."
              />
            </div>
            <button
              type="submit"
              className="gradient-pill soft-shadow h-11 rounded-xl text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
