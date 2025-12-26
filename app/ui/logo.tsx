import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
};

const Logo = ({ variant = "dark" }: LogoProps) => {
  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/codelabs-mark.svg"
        alt="Logo de CodeLabs"
        width={44}
        height={44}
        className="rounded-2xl shadow-lg shadow-purple-500/25"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-semibold tracking-tight ${isLight ? "text-white" : "text-black"}`}
        >
          CodeLabs
        </span>
        <span className={`text-sm ${isLight ? "text-white/70" : "text-black/60"}`}>
          Estudio de software
        </span>
      </div>
    </div>
  );
};

export default Logo;
