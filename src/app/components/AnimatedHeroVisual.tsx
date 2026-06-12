import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Dna, FlaskConical, Microscope, ScanLine } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const visualImage = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const floatingBadges = [
  { label: "FIV", className: "left-2 top-8 sm:-left-8 sm:top-14", delay: 0 },
  { label: "ADN", className: "right-3 top-4 sm:-right-6 sm:top-10", delay: 0.35 },
  { label: "Embriones", className: "-left-1 bottom-20 sm:-left-10 sm:bottom-28", delay: 0.7 },
  { label: "Genética", className: "right-2 bottom-10 sm:-right-8 sm:bottom-20", delay: 1.05 },
  { label: "Laboratorio", className: "left-1/2 top-[52%] -translate-x-1/2", delay: 1.4 },
];

export function AnimatedHeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-18, 34]);
  const gridY = useTransform(scrollYProgress, [0, 1], [18, -24]);

  return (
    <motion.div
      ref={visualRef}
      className="relative mx-auto mt-12 w-full max-w-[31rem] lg:mt-0"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 42, scale: 0.94 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute -inset-8 rounded-[2.5rem] bg-brand-gold/12 blur-3xl" style={{ y: shouldReduceMotion ? 0 : orbY }} aria-hidden="true" />
      <motion.div className="absolute inset-8 rounded-[2rem] border border-white/10 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:26px_26px]" style={{ y: shouldReduceMotion ? 0 : gridY }} aria-hidden="true" />

      <motion.div
        className="group relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.075] p-3 shadow-[0_24px_70px_rgba(6,26,58,0.38)] backdrop-blur-xl"
        style={{ y: shouldReduceMotion ? 0 : cardY }}
        whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(8,74,92,0.30),transparent_34%)]" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-brand-ink/70">
          <motion.div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-forest/20 via-transparent to-brand-gold/30 opacity-80 transition duration-300 group-hover:opacity-95" aria-hidden="true" />
          <motion.div className="absolute left-0 right-0 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent opacity-70" animate={shouldReduceMotion ? undefined : { y: [-34, 34, -34] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />
          <ImageWithFallback src={visualImage} alt="Laboratorio de biotecnología reproductiva bovina" className="aspect-[4/5] w-full object-cover brightness-[0.72] saturate-[0.92] transition duration-500 group-hover:scale-[1.05] sm:aspect-[5/5] lg:aspect-[4/5]" />
        </div>

        <div className="relative mt-3 grid grid-cols-3 gap-2 text-white">
          <Metric icon={Microscope} value="FIV" label="control" />
          <Metric icon={Dna} value="ADN" label="trazable" />
          <Metric icon={FlaskConical} value="TE" label="técnica" />
        </div>
      </motion.div>

      <motion.div className="absolute -bottom-5 left-8 right-8 rounded-2xl border border-brand-gold/20 bg-brand-ink/80 p-4 text-white shadow-[0_18px_45px_rgba(6,26,58,0.34)] backdrop-blur-xl sm:left-12 sm:right-12" whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
        <div className="flex items-start gap-3">
          <div className="icon-box h-10 w-10 shrink-0 bg-brand-gold/15">
            <ScanLine aria-hidden="true" size={18} />
          </div>
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-gold">Panel técnico</p>
            <p className="mt-1 text-sm leading-6 text-white/70">Protocolos reproductivos con lectura genética y soporte de laboratorio.</p>
          </div>
        </div>
      </motion.div>

      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className={`absolute z-20 rounded-full border border-brand-gold/35 bg-brand-ink/72 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-gold shadow-[0_12px_30px_rgba(6,26,58,0.22)] backdrop-blur-md ${badge.className}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.9 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: [0, -8, 0], scale: 1 }}
          whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.06 }}
          transition={{ opacity: { duration: 0.45, delay: badge.delay }, scale: { duration: 0.45, delay: badge.delay }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: badge.delay } }}
        >
          {badge.label}
        </motion.div>
      ))}
    </motion.div>
  );
}

type MetricProps = {
  icon: typeof Dna;
  value: string;
  label: string;
};

function Metric({ icon: Icon, value, label }: MetricProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.055] p-3 text-center backdrop-blur transition duration-300 group-hover:border-brand-gold/30 group-hover:bg-white/[0.08]">
      <Icon aria-hidden="true" size={17} className="mx-auto text-brand-gold" />
      <p className="mt-2 text-sm font-bold leading-none text-white">{value}</p>
      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-white/45">{label}</p>
    </div>
  );
}
