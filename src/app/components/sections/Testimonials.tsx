import { Quote, TrendingUp } from "lucide-react";
import { testimonials } from "../../data/siteContent";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          eyebrow="Casos y resultados"
          title="Historias diseñadas para comunicar valor sin saturar el wireframe"
          description="Se mantiene una estructura de tarjetas, reforzando contraste, alineación y lectura para que cada caso sea fácil de comparar."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.ranch} className="flex h-full flex-col rounded-xl border border-black/5 bg-brand-sand p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">{testimonial.country}</p>
                <h3 className="mt-2 text-xl font-bold text-brand-forest">{testimonial.ranch}</h3>
              </div>

              <div className="mt-6 grid gap-3">
                <InfoBlock label="Reto" text={testimonial.challenge} />
                <InfoBlock label="Solución" text={testimonial.solution} />
              </div>

              <div className="mt-5 flex gap-3 rounded-xl bg-brand-forest p-4 text-sm leading-7 text-white">
                <TrendingUp aria-hidden="true" size={18} className="mt-1 shrink-0 text-brand-gold" />
                <p>{testimonial.result}</p>
              </div>

              <blockquote className="mt-6 flex flex-1 flex-col gap-3 text-sm leading-7 text-brand-muted">
                <Quote aria-hidden="true" size={18} className="text-brand-gold" />
                <p>“{testimonial.quote}”</p>
                <footer className="mt-auto text-xs font-bold text-brand-muted/75">— {testimonial.author}</footer>
              </blockquote>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-lg border border-black/5 bg-white p-4">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-forest">{label}</p>
      <p className="mt-1 text-sm leading-6 text-brand-muted">{text}</p>
    </div>
  );
}
