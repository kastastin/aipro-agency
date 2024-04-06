"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function RevealTitle({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
}
