import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type CountUpOnViewProps = {
  value: string;
  className?: string;
};

const numberPattern = /^(\D*)(\d+)(.*)$/;

export function CountUpOnView({ value, className = "" }: CountUpOnViewProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(value);
  const match = useMemo(() => value.match(numberPattern), [value]);

  useEffect(() => {
    if (!match || !isInView || shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, number, suffix] = match;
    const controls = animate(motionValue, Number(number), {
      duration: 1.15,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(`${prefix}${Math.round(latest)}${suffix}`),
    });

    return () => controls.stop();
  }, [isInView, match, motionValue, shouldReduceMotion, value]);

  return (
    <p ref={ref} className={className}>
      {displayValue}
    </p>
  );
}
