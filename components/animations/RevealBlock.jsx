"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function RevealBlock({ children, direction = "up" }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const initial =
    direction === "up"
      ? { y: 50, opacity: 0 }
      : direction === "right"
        ? { x: 50, opacity: 0 }
        : { x: -50, opacity: 0 };

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, x: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
