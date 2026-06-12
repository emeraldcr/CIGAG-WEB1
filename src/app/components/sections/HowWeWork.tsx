import { workflowSteps } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { SectionHeader } from "../shared/SectionHeader";

export function HowWeWork() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Cómo trabajamos"
              title="Un proceso técnico, simple y trazable de principio a fin"
              description="Mantenemos la lógica del wireframe con una secuencia clara, pero reforzamos jerarquía, lectura y consistencia para facilitar la escalabilidad del contenido."
            />
          </RevealOnScroll>

          <div className="relative grid gap-5">
            {workflowSteps.map((step, index) => (
              <RevealOnScroll key={step.number} delay={index * 0.07}>
                <article className="relative rounded-xl border border-black/5 bg-brand-sand p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-lg sm:p-7">
                  {index < workflowSteps.length - 1 ? <span className="absolute left-8 top-full hidden h-5 w-px bg-brand-gold/35 sm:block" aria-hidden="true" /> : null}
                  <div className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-gold/10 text-sm font-bold text-brand-gold">{step.number}</span>
                    <div>
                      <h3 className="text-lg font-bold text-brand-forest">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-brand-muted">{step.description}</p>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
