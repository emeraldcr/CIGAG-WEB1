import { MessageCircle } from "lucide-react";
import { contact, finalCtaImage } from "../../data/siteContent";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "../shared/Container";
import { CTAButton } from "../shared/CTAButton";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeader } from "../shared/SectionHeader";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0">
        <ImageWithFallback src={finalCtaImage} alt="Laboratorio de biotecnología reproductiva" className="h-full w-full object-cover brightness-[0.24]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,26,58,0.94)_0%,rgba(11,61,145,0.86)_58%,rgba(56,189,248,0.50)_100%)]" />
      </div>

      <Container>
        <RevealOnScroll className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Comience hoy"
            title="¿Desea mejorar la genética de su hato?"
            description="Conversemos sobre los objetivos productivos de su finca y preparemos una estrategia genética a la medida."
            align="center"
            inverse
          />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#contacto" className="justify-center">Solicitar asesoría</CTAButton>
            <CTAButton href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={MessageCircle} className="justify-center">
              Contactar por WhatsApp
            </CTAButton>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
