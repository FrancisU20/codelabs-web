import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CodeLabs | Estudio de software premium",
  description:
    "CodeLabs diseña, arquitecta y construye software elegante y escalable para empresas que exigen calidad.",
  metadataBase: new URL("https://codelabsecuador.com"),
  keywords: [
    "CodeLabs",
    "estudio de software",
    "arquitectura de software",
    "Next.js",
    "Flutter",
    "AWS",
    "Clean Architecture",
    "WordPress empresarial",
  ],
  openGraph: {
    title: "CodeLabs | Software confiable, arquitectura elegante",
    description:
      "Estudio boutique liderado por un arquitecto senior. Soluciones end-to-end en web, móvil y nube.",
    url: "https://codelabsecuador.com",
    siteName: "CodeLabs",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLabs | Software confiable, arquitectura elegante",
    description:
      "Ingeniería premium que entrega valor real. Web, móvil, nube, AWS y WordPress empresarial.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-256.png", type: "image/png", sizes: "256x256" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/codelabs-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
