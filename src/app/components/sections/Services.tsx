import { ArrowRight } from "lucide-react";
import { services } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { IconCard } from "../shared/IconCard";
import { SectionHeader } from "../shared/SectionHeader";

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-brand-sand">
      <Container>
        <SectionHeader
          eyebrow="Nuestros servicios"
          title="Soluciones genéticas para una ganadería más rentable"
          description="Un portafolio ordenado para transformar objetivos productivos en programas reproductivos medibles."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <IconCard key={service.title} icon={service.icon} title={service.title} description={service.description}>
              <a href="#contacto" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition group-hover:gap-3" aria-label={`Solicitar asesoría sobre ${service.title}`}>
                Consultar servicio <ArrowRight aria-hidden="true" size={15} />
              </a>
            </IconCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
