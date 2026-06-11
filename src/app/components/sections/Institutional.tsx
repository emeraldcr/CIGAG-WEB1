import { institutionalHighlights } from "../../data/siteContent";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

const labImage = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Institutional() {
  return (
    <section id="laboratorio" className="section-padding bg-brand-forest text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Laboratorio y soporte técnico"
              title="Ciencia aplicada al mejoramiento productivo del hato"
              description="El valor de CIGAC está en combinar biotecnología, criterio zootécnico y acompañamiento cercano para que cada decisión genética tenga una razón productiva."
              inverse
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {institutionalHighlights.map(({ icon: Icon, title, description }) => (
                <article key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-5">
                  <div className="icon-box shrink-0">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-white/5 shadow-2xl">
            <ImageWithFallback src={labImage} alt="Equipo técnico trabajando en laboratorio de biotecnología" className="aspect-[4/3] w-full object-cover brightness-75" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-brand-forest/85 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Trazabilidad técnica</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Protocolos, registros y seguimiento para decisiones reproductivas más confiables.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
