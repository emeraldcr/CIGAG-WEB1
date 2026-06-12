import { motion, useReducedMotion, type MotionProps } from "motion/react";
import { type ElementType, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: ElementType;
  viewportAmount?: number;
} & Omit<MotionProps, "initial" | "animate" | "whileInView" | "viewport" | "transition">;

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.58,
  y = 24,
  as = "div",
  viewportAmount = 0.18,
  ...motionProps
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = motion.create(as);

  if (shouldReduceMotion) {
    return (
      <MotionElement className={className} {...motionProps}>
        {children}
      </MotionElement>
    );
  }

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {children}
    </MotionElement>
  );
}
