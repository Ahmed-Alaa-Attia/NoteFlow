import { motion } from "motion/react";
import Star from "../../icons/Star";
const Testimonial = ({ test }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "100%" }}
      transition={{
        opacity: { duration: 0.75, ease: "easeInOut" },
        ease: "easeInOut",
        type: "spring",
        stiffness: 300,
      }}
      className="bg-primary-1300 rounded-2xl px-8 py-10 max-xl:px-6 max-md:py-8"
    >
      <div className="flex gap-x-1 pb-8  max-md:pb-6">
        {Array.from({ length: test.rating }).map((_, i) => (
          <Star className="fill-primary-50" />
        ))}
        {Array.from({ length: 5 - test.rating }).map((_, i) => (
          <Star />
        ))}
      </div>
      <p className="text-primary-50 pb-16 text-lg/loose font-light max-xl:text-base/loose  max-md:pb-12">
        {test.description}
      </p>
      <div className="flex items-center gap-x-6 max-xl:gap-x-4">
        <img
          src={test.src}
          alt="Portraties"
          className="h-18 rounded-full max-xl:h-16"
        />
        <div>
          <p className="text-primary-500 text-xl/7 font-bold tracking-tight max-xl:text-lg">
            {test.name}
          </p>
          <p className="text-primary-75 text-base/loose tracking-tight max-lg:text-sm">
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
};

export default Testimonial;
