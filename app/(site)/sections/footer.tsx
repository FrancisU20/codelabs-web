import Link from "next/link";
import Logo from "@/app/ui/logo";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <Logo variant="light" />
          <p className="max-w-md text-sm text-white/70">
            Ingeniería elegante, ejecución clara y software listo para crecer.
          </p>
          <p className="text-xs text-white/60">
            Asunción y Estados Unidos, Quito, Ecuador · Tel: 0998630405 ·{" "}
            <a href="mailto:support@codelabsecuador.com" className="underline hover:text-white">
              support@codelabsecuador.com
            </a>
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} CodeLabs. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/70 sm:text-right">
          <Link href="#clientes" className="transition-colors hover:text-white">
            Clientes
          </Link>
          <Link href="#servicios" className="transition-colors hover:text-white">
            Capacidades
          </Link>
          <Link href="#aws" className="transition-colors hover:text-white">
            AWS
          </Link>
          <Link href="#casos" className="transition-colors hover:text-white">
            Casos
          </Link>
          <Link href="#contacto" className="transition-colors hover:text-white">
            Contacto
          </Link>
          <Link href="/privacidad" className="transition-colors hover:text-white">
            Privacidad
          </Link>
          <Link href="/desuscripcion" className="transition-colors hover:text-white">
            Desuscripción
          </Link>
          <Link href="/terminos" className="transition-colors hover:text-white">
            Términos
          </Link>
          <Link href="/tratamiento-datos" className="transition-colors hover:text-white">
            Tratamiento de datos
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
