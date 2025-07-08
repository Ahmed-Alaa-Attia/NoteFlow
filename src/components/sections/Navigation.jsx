import { a, li } from "motion/react-client";
import { navigationLinks } from "../../utils/content";
import Logo from "../icons/Logo";
import { motion } from "motion/react";
import { useModalContext } from "../../Context/ModalContext";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { MobileMenuContextProvider } from "../../Context/MobileMenuContext";

const Navigation = () => {
  const { setIsModalActive } = useModalContext();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="text-primary-50 m-auto flex justify-between max-w-[90rem] px-28 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8  "
    >
      <a href="#" className="flex items-center  gap-x-3">
        <Logo className="stroke-primary-500 h-6" width={5} />
        <p className="text-xl/loose font-bold tracking-tight">NoteFlow</p>
      </a>

      <ul className="flex gap-x-8 items-center max-xl:gap-x-6 max-lg:hidden">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a
              className="hover:text-primary-500 transition-properties text-xl/loose"
              href={link.href}
            >
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-x-3 max-lg:hidden">
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-8 py-3.5 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose ">
          Login
        </button>
        <motion.button
          animate={{
            filter: [
              "drop-shadow(0 0 10px var(--color-primary-glow))",
              "drop-shadow(0 0 30px var(--color-primary-glow))",
              "drop-shadow(0 0 10px var(--color-primary-glow))",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          onClick={() => setIsModalActive("sign-up")}
          className="bg-primary-500 border-primary-500 text-primary-1300 hover:border-primary-50 hover:bg-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5  max-xl:px-6 max-xl:py-3 max-xl:text-base/loose "
        >
          Get Started
        </motion.button>
      </div>
      <MobileMenuIcon />
    </motion.nav>
  );
};

export default Navigation;
