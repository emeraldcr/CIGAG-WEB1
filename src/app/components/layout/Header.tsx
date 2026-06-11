import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/siteContent";
import { BrandLogo } from "../shared/BrandLogo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-gold/20 bg-brand-forest/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          {mobileOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-navigation" aria-label="Navegación móvil" className="border-t border-white/10 bg-brand-forest px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/8 hover:text-white">
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
