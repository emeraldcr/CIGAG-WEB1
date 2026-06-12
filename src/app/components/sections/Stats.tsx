import { stats } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { CountUpOnView } from "../shared/CountUpOnView";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeader } from "../shared/SectionHeader";

export function Stats() {
  return (
    <section id="resultados" className="section-padding relative overflow-hidden bg-brand-forest">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:28px_28px]" aria-hidden="true" />
      <Container>
        <RevealOnScroll className="relative z-10">
          <SectionHeader eyebrow="Por qué elegirnos" align="center" inverse />
        </RevealOnScroll>
        <div className="relative z-10 mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, description }, index) => (
            <RevealOnScroll key={`${value}-${label}`} delay={index * 0.12}>
              <article className="h-full rounded-xl border border-brand-gold/20 bg-white/[0.045] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-gold/45 hover:bg-white/[0.07] hover:shadow-[0_18px_45px_rgba(6,26,58,0.22)]">
                <div className="icon-box mb-5">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <CountUpOnView value={value} className="text-2xl font-bold leading-tight text-brand-gold" />
                <h3 className="mt-1 text-base font-semibold leading-snug text-white">{label}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
