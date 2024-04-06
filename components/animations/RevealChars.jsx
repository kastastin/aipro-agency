"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function RevealChars({ sentence }) {
  const speed = 0.02;
  const characters = sentence.split("");
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * speed },
      }));
    }
  }, [inView, controls]);

  return (
    <span ref={ref}>
      <AnimatePresence>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
