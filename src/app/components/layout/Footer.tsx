import type { ReactNode } from "react";
import { brand, contactItems, quickLinks, serviceLinks, socialLinks } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { BrandLogo } from "../shared/BrandLogo";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-brand-gold/20 bg-brand-ink">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr] lg:py-16">
          <div>
            <BrandLogo compact />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">{brand.description}</p>
            <div className="mt-6 flex gap-3" aria-label="Redes sociales">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/55 transition hover:border-brand-gold/50 hover:text-brand-gold">
                  <Icon aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navegación">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Servicios">
            {serviceLinks.map((service) => (
              <a key={service} href="#servicios" className="footer-link">
                {service}
              </a>
            ))}
          </FooterColumn>

          <div>
            <h2 className="footer-title">Contacto</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {contactItems.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3 text-sm text-white/60">
                  <Icon aria-hidden="true" size={15} className="mt-1 shrink-0 text-brand-gold" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] py-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/35 sm:flex-row">
            <p>© 2026 CIGAC — Todos los derechos reservados</p>
            <div className="flex gap-5">
              {["Privacidad", "Términos", "Cookies"].map((item) => (
                <a key={item} href="#contacto" className="transition hover:text-white/65">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="footer-title">{title}</h2>
      <nav className="mt-4 flex flex-col gap-3" aria-label={title}>
        {children}
      </nav>
    </div>
  );
}
