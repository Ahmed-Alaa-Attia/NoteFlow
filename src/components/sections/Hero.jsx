import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
import { motion } from "motion/react";
import { useContext } from "react";
import { useModalContext } from "../../Context/ModalContext";

const Hero = () => {
  const { setIsModalActive } = useModalContext();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42 max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-38  max-lg:px-8 max-lg:py-32 max-md:grid-cols-1 max-md:grid-rows-[repeat(2,auto)] max-md:gap-y-12 max-md:px-6 max-md:py-24"
    >
      <div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            viewport={{ once: false, amount: "100%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-primary-50 mb-6 text-6xl/18 font-bold tracking-tight max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
          >
            AI-Powered Notes. Organize and Summarize in Seconds
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose"
        >
          Let AI organize & summarize your Notes <br />
          Saving you time and boosting productivity
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: [
              "drop-shadow(0 0 10px var(--color-primary-glow))",
              "drop-shadow(0 0 30px var(--color-primary-glow))",
              "drop-shadow(0 0 10px var(--color-primary-glow))",
            ],
          }}
          exit={{ opacity: 0, y: 10 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut", delay: 0.6 },
            y: { duration: 0.8, ease: "easeInOut", delay: 0.12 },
            filter: {
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.2,
            },
          }}
          onClick={() => setIsModalActive("sign-up")}
          className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 group flex cursor-pointer items-center gap-x-3 rounded-full px-8 py-3.5 transition-properties border-2 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
        >
          <p className="text-lg/8 max-xl:text-base/loose">Get Started</p>
          <div className="w-5 max-xl:w-4  max-sm:hidden">
            <ArrowRightLine className="stroke-primary-1300 transition-properties -mr-3 w-0 opacity-0 inline ease-in-out group-hover:w-3 group-hover:opacity-100" />
            <ArrowRight className="stroke-primary-1300 inline w-5 max-xl:w-4" />
          </div>
        </motion.button>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl"
        />

        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 50,
              delay: 0.5,
            }}
            src={HeroGraphic}
            alt="Hero graphics"
            className="relative max-h-[30rem] justify-self-end z-30 max-md:max-h-auto max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
