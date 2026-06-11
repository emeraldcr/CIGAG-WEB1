import { stats } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

export function Stats() {
  return (
    <section id="resultados" className="section-padding bg-brand-forest">
      <Container>
        <SectionHeader eyebrow="Por qué elegirnos" align="center" inverse />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <article key={`${value}-${label}`} className="rounded-xl border border-brand-gold/20 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-brand-gold/35 hover:bg-white/[0.065]">
              <div className="icon-box mb-5">
                <Icon aria-hidden="true" size={21} />
              </div>
              <p className="text-2xl font-bold leading-tight text-brand-gold">{value}</p>
              <h3 className="mt-1 text-base font-semibold leading-snug text-white">{label}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
