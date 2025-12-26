## CodeLabs Web (Next.js + Tailwind)

Landing estática para CodeLabs con App Router, Tailwind 4 y export estático. Incluye secciones de servicios, clientes, AWS, casos, contacto, políticas legales y botón flotante de WhatsApp.

### Requisitos
- Node 22+ (Volta fijada a 22.21.1 en package.json)
- npm

### Scripts
- `npm run dev` — modo desarrollo
- `npm run build` — build de producción (export estático habilitado)
- `npm run start` — serve (no necesario si usas `next export`)
- `npm run lint` — ESLint

### Estructura clave
- `app/(site)/page.tsx` — landing principal
- `app/(site)/sections/` — secciones (hero, clientes, capacidades, AWS, fundador, casos, stack, contacto-info, contacto, navbar, footer)
- `app/ui/` — componentes compartidos (logo, whatsapp-button)
- `app/data/` — datos de clientes, capacidades, casos y stack
- `app/(legal)/` — privacidad, tratamiento de datos, términos, desuscripción
- `public/logos/` — logos de clientes y AWS; favicon e íconos PWA en `public/`

### Configuración
- `next.config.ts` con `output: "export"` y `images.unoptimized: true`
- Metadatos y dominio apuntan a `https://codelabsecuador.com`
- Manifest y apple-touch-icon referenciados en `app/layout.tsx`

### Notas
- Formulario de contacto abre WhatsApp con los datos capturados.
- Enlaces legales: `/privacidad`, `/tratamiento-datos`, `/terminos`, `/desuscripcion`.
- Ajusta emails/teléfono/dirección en `app/(site)/sections/footer.tsx` si cambian.
- Integraciones pendientes.
