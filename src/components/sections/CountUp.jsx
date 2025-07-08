"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

const CountUp = ({ from, to, duration = 2, className }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

export default CountUp;
