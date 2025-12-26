import Link from "next/link";
import Logo from "@/app/ui/logo";

const navItems = [
  { href: "#clientes", label: "Clientes" },
  { href: "#servicios", label: "Capacidades" },
  { href: "#aws", label: "AWS" },
  { href: "#about", label: "Fundador" },
  { href: "#casos", label: "Casos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link href="#inicio" aria-label="Inicio CodeLabs" className="flex items-center">
          <Logo variant="light" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="gradient-pill soft-shadow rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
        >
          Trabaja con nosotros
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
