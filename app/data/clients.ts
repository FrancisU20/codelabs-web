export type Client = {
  name: string;
  sector: string;
  summary: string;
  logoText?: string;
  logoUrl?: string;
  webUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
};

export const clients: Client[] = [
  {
    name: "Curve Pilates",
    sector: "FitTech",
    summary: "App de entrenamiento y reservas con membresías digitales.",
    logoText: "CP",
    logoUrl: "/logos/curve-pilates.png",
    webUrl: "https://www.instagram.com/curvepilates_",
  },
  {
    name: "TodoLegal",
    sector: "LegalTech",
    summary: "Soluciones legales y pagos con onboarding KYC.",
    logoText: "TL",
    logoUrl: "/logos/todolegal.png",
    webUrl: "https://todolegal.com/",
  },
  {
    name: "BASC",
    sector: "SupplyTech",
    summary: "Plataforma de trazabilidad y compliance para cadena de suministro.",
    logoText: "BA",
    logoUrl: "/logos/basc.png",
    webUrl: "https://www.basc-pichincha.org.ec/",
  },
  {
    name: "Emilia Beauty Bar",
    sector: "BeautyTech",
    summary: "Reservas omnicanal, catálogo y pagos para beauty studios.",
    logoText: "EB",
    logoUrl: "/logos/emilia-beauty.png",
    webUrl: "https://www.instagram.com/emiliabeautybar_/",
  },
];
