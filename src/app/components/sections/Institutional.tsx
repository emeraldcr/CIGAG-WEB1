import { institutionalHighlights } from "../../data/siteContent";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { SectionHeader } from "../shared/SectionHeader";

const labImage = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Institutional() {
  return (
    <section id="laboratorio" className="section-padding relative overflow-hidden bg-brand-forest text-white">
      <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Laboratorio y soporte técnico"
              title="Ciencia aplicada al mejoramiento productivo del hato"
              description="El valor de CIGAC está en combinar biotecnología, criterio zootécnico y acompañamiento cercano para que cada decisión genética tenga una razón productiva."
              inverse
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {institutionalHighlights.map(({ icon: Icon, title, description }, index) => (
                <RevealOnScroll key={title} delay={index * 0.07}>
                  <article className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/35 hover:bg-white/[0.07]">
                    <div className="icon-box shrink-0">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/60">{description}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-white/5 shadow-2xl">
              <ImageWithFallback src={labImage} alt="Equipo técnico trabajando en laboratorio de biotecnología" className="aspect-[4/3] w-full object-cover brightness-75" />
              <div className="absolute left-5 top-5 flex gap-2">
                {['FIV', 'ADN', 'TE'].map((badge) => (
                  <span key={badge} className="rounded-full border border-white/15 bg-brand-ink/55 px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-brand-gold backdrop-blur">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-brand-forest/85 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Trazabilidad técnica</p>
                <p className="mt-2 text-sm leading-6 text-white/70">Protocolos, registros y seguimiento para decisiones reproductivas más confiables.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
