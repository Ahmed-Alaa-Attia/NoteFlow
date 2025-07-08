import { reviews } from "../../utils/content";
import { motion } from "motion/react";
import CountUp from "./CountUp";

const Reviews = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.5 }}
      className="m-auto max-w-[90rem] flex items-center px-24 flex-wrap gap-x-4 gap-y-4 max-xl:px-16 max-xl:gap-x-3 max-lg:px-8 max-md:px-6"
    >
      <motion.ul
        className="flex"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {reviews.map((review, index) => (
          <motion.li
            key={review.id}
            className="-mr-4 last:-mr-0 h-12"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3 + index * 0.1, // Stagger each image
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scale: 1.1,
              zIndex: 10,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src={review.src || "/placeholder.svg"}
              alt={review.alt}
              className="border-primary-100 border rounded-full h-12 transition-shadow hover:shadow-lg max-xl:h-10"
            />
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        className="text-primary-100 text-xl/loose font-light max-lg:text-base/loose"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Trusted by{" "}
        <motion.span
          className="text-primary-500 font-bold tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <CountUp from={0} to={12653} duration={2} />+
        </motion.span>{" "}
        productivity junkies
      </motion.p>
    </motion.section>
  );
};

export default Reviews;
