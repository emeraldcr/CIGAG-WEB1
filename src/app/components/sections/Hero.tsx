import { PlayCircle } from "lucide-react";
import { hero } from "../../data/siteContent";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "../shared/Container";
import { CTAButton } from "../shared/CTAButton";

export function Hero() {
  const [beforeHighlight, afterHighlight] = hero.title.split(hero.highlightedWord);

  return (
    <section id="inicio" className="relative flex min-h-screen w-full overflow-hidden pt-16">
      <div className="absolute inset-0">
        <ImageWithFallback src={hero.image} alt="Ganado bovino premium en campo verde" className="h-full w-full object-cover brightness-[0.32]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,46,32,0.94)_0%,rgba(26,46,32,0.72)_48%,rgba(30,58,74,0.78)_100%)]" />
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-balance text-[clamp(2.15rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
              {beforeHighlight}
              <span className="text-brand-gold">{hero.highlightedWord}</span>
              {afterHighlight}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/75 sm:text-lg">{hero.description}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="#contacto" className="justify-center sm:justify-start">Solicitar asesoría</CTAButton>
              <CTAButton href="#servicios" variant="secondary" icon={PlayCircle} className="justify-center sm:justify-start">Ver servicios</CTAButton>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
              {hero.trustIndicators.map((item) => (
                <div key={item.value}>
                  <dt className="text-2xl font-bold text-brand-gold">{item.value}</dt>
                  <dd className="mt-1 text-sm text-white/55">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-sand" />
    </section>
  );
}
