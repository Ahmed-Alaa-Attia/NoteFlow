import { motion } from "motion/react";
import { useModalContext } from "../../../Context/ModalContext";

const Modal = ({ children, modal }) => {
  const { isModalActive, setIsModalActive } = useModalContext();
  const activelyDisplayedModal = modal === isModalActive;
  return (
    <motion.div
      animate={activelyDisplayedModal ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, visibility: "hidden" },
        visible: {
          opacity: 1,
          visibility: "visible",
        },
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center px-24 py-32 backdrop-blur-sm max-lg:px-8 max-md:px-6"
      onClick={(e) => e.currentTarget === e.target && setIsModalActive("")}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={
          activelyDisplayedModal ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="flex overflow-hidden rounded-2xl  shadow-[0px_0px_20px_rgb(6,18,18,.10)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
