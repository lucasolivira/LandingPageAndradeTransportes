import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  m,
  useInView,
  useReducedMotion,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";
import { fadeUp } from "./motion-variants";

const stagger = (delayChildren = 0, staggerChildren = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
});

// a transition da variant tem prioridade sobre a prop, então o atraso
// precisa entrar na própria variant
const withDelay = (variants: Variants, delay: number): Variants => {
  const visible = variants.visible as TargetAndTransition;
  return {
    ...variants,
    visible: { ...visible, transition: { ...visible.transition, delay } },
  };
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

// anima o bloco uma única vez quando ele entra na tela
export const Reveal = ({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: RevealProps) => (
  <m.div
    className={className}
    variants={delay ? withDelay(variants, delay) : variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </m.div>
);

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  interval?: number;
  as?: "div" | "ul" | "nav";
}

// container que revela os RevealItem filhos em sequência
export const RevealGroup = ({
  children,
  className,
  delay,
  interval,
  as = "div",
}: RevealGroupProps) => {
  const Component = m[as];
  return (
    <Component
      className={className}
      variants={stagger(delay, interval)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Component>
  );
};

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li";
}

export const RevealItem = ({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: RevealItemProps) => {
  const Component = m[as];
  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
};

// conta de 0 até o número do valor (ex.: "500+", "98%"); valores sem
// número no início (ex.: "24/7") são exibidos como estão
export const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\d+)(\D*)$/);
  const isNumeric = match !== null;
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isNumeric || !inView) return;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutQuart
      setDisplay(Math.round(target * (1 - Math.pow(1 - t, 4))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isNumeric, inView, target, reduceMotion]);

  return <span ref={ref}>{isNumeric ? `${display}${suffix}` : value}</span>;
};
