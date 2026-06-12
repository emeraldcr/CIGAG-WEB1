import { motion, useReducedMotion } from "motion/react";
import { PlayCircle } from "lucide-react";
import { hero } from "../../data/siteContent";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "../shared/Container";
import { CTAButton } from "../shared/CTAButton";

const heroTransition = { duration: 0.68, ease: [0.22, 1, 0.36, 1] } as const;

export function Hero() {
  const [beforeHighlight, afterHighlight] = hero.title.split(hero.highlightedWord);
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section id="inicio" className="relative flex min-h-screen w-full overflow-hidden pt-16">
      <div className="absolute inset-0">
        <ImageWithFallback src={hero.image} alt="Ganado bovino premium en campo verde" className="h-full w-full object-cover brightness-[0.32]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,26,58,0.96)_0%,rgba(11,61,145,0.80)_48%,rgba(56,189,248,0.52)_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:64px_64px]" aria-hidden="true" />
        <div className="absolute -right-28 top-24 h-72 w-72 rounded-full border border-brand-gold/20 bg-brand-gold/10 blur-2xl sm:h-96 sm:w-96" aria-hidden="true" />
        <div className="absolute bottom-20 left-[8%] h-36 w-36 rounded-full border border-white/10 bg-white/8 blur-xl" aria-hidden="true" />
        <div className="absolute right-[14%] top-[28%] hidden h-40 w-40 rounded-[42%_58%_47%_53%] border border-brand-gold/25 lg:block" aria-hidden="true" />
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <motion.div className="badge mb-6" {...revealProps} transition={{ ...heroTransition, delay: 0.04 }}>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {hero.eyebrow}
            </motion.div>

            <motion.h1 className="max-w-4xl text-balance text-[clamp(2.15rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white" {...revealProps} transition={{ ...heroTransition, delay: 0.14 }}>
              {beforeHighlight}
              <span className="text-brand-gold">{hero.highlightedWord}</span>
              {afterHighlight}
            </motion.h1>

            <motion.p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/75 sm:text-lg" {...revealProps} transition={{ ...heroTransition, delay: 0.28 }}>
              {hero.description}
            </motion.p>

            <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" {...revealProps} transition={{ ...heroTransition, delay: 0.4 }}>
              <CTAButton href="#contacto" className="justify-center sm:justify-start">Solicitar asesoría</CTAButton>
              <CTAButton href="#servicios" variant="secondary" icon={PlayCircle} className="justify-center sm:justify-start">Ver servicios</CTAButton>
            </motion.div>

            <motion.dl className="mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3" {...revealProps} transition={{ ...heroTransition, delay: 0.52 }}>
              {hero.trustIndicators.map((item) => (
                <div key={item.value} className="rounded-xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm">
                  <dt className="text-2xl font-bold text-brand-gold">{item.value}</dt>
                  <dd className="mt-1 text-sm text-white/55">{item.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-sand" />
    </section>
  );
}
