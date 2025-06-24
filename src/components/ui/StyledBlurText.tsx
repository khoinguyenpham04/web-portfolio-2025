import { motion, Transition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

type TextSegment = {
  text: string;
  className?: string;
};

type StyledBlurTextProps = {
  segments: TextSegment[];
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>,
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const StyledBlurText: React.FC<StyledBlurTextProps> = ({
  segments,
  delay = 150,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  // Flatten segments into animatable units while preserving styling
  const animationUnits = useMemo(() => {
    const units: Array<{ text: string; className?: string; segmentIndex: number; unitIndex: number }> = [];
    
    segments.forEach((segment, segmentIndex) => {
      if (animateBy === "words") {
        const words = segment.text.split(" ");
        words.forEach((word, wordIndex) => {
          if (word.trim()) {
            units.push({
              text: word,
              className: segment.className,
              segmentIndex,
              unitIndex: wordIndex,
            });
          }
        });
      } else {
        const letters = segment.text.split("");
        letters.forEach((letter, letterIndex) => {
          units.push({
            text: letter,
            className: segment.className,
            segmentIndex,
            unitIndex: letterIndex,
          });
        });
      }
    });
    
    return units;
  }, [segments, animateBy]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );

  const stepCount = defaultTo.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1),
  );

  return (
    <h1 ref={ref} className={className}>
      {animationUnits.map((unit, index) => {
        const animateKeyframes = buildKeyframes(defaultFrom, defaultTo);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };

        return (
          <motion.span
            key={`${unit.segmentIndex}-${unit.unitIndex}-${index}`}
            initial={defaultFrom}
            animate={inView ? animateKeyframes : defaultFrom}
            transition={spanTransition}
            onAnimationComplete={
              index === animationUnits.length - 1 ? onAnimationComplete : undefined
            }
            className={unit.className}
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {unit.text === " " ? "\u00A0" : unit.text}
            {/* Add space after words (except for letters animation) */}
            {animateBy === "words" && 
             index < animationUnits.length - 1 && 
             animationUnits[index + 1]?.segmentIndex !== unit.segmentIndex && 
             "\u00A0"}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default StyledBlurText;
