import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/siteContent";
import { BrandLogo } from "../shared/BrandLogo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 20);

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const closeMenu = () => setMobileOpen(false);
  const solidHeader = isScrolled || mobileOpen;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidHeader ? "border-b border-brand-gold/25 bg-brand-forest/94 shadow-[0_16px_44px_rgba(6,26,58,0.26)] backdrop-blur-xl" : "border-b border-white/10 bg-brand-ink/10 backdrop-blur-[2px]"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${solidHeader ? "h-16" : "h-20"}`}>
        <a href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
          <BrandLogo />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navigation.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn-primary hidden lg:inline-flex">
          Solicitar asesoría
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          {mobileOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-navigation" aria-label="Navegación móvil" className="border-t border-white/10 bg-brand-forest/98 px-5 py-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={closeMenu} className="btn btn-primary mt-3 justify-center">
              Solicitar asesoría
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
