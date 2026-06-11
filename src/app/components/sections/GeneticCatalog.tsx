import { CheckCircle2 } from "lucide-react";
import { catalogBenefits, geneticCatalog } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

export function GeneticCatalog() {
  return (
    <section id="catalogo" className="section-padding bg-brand-sand">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeader
              eyebrow="Catálogo genético"
              title="Líneas bovinas seleccionadas para objetivos concretos"
              description="El catálogo queda preparado como una capa de datos escalable para sumar fichas, filtros o métricas sin reescribir la UI."
            />

            <ul className="mt-8 space-y-4">
              {catalogBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-7 text-brand-muted">
                  <CheckCircle2 aria-hidden="true" size={18} className="mt-1 shrink-0 text-brand-gold" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {geneticCatalog.map((item) => (
              <article key={item.breed} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">{item.focus}</p>
                <h3 className="mt-3 text-xl font-bold text-brand-forest">{item.breed}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.traits.map((trait) => (
                    <span key={trait} className="rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-forest">
                      {trait}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
