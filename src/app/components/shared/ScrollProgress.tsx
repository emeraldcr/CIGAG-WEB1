import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  if (shouldReduceMotion) {
    return null;
  }

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
