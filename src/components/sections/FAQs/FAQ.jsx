import { motion } from "motion/react";
import CaretUp from "../../icons/CaretUp";

const FAQ = ({ questions, activeQuestion, handelQuestionClick }) => {
  const itemVarients = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li variants={itemVarients} className="shrink-0 grow-0 ">
      <button
        className="flex w-full cursor-pointer items-center"
        onClick={() => handelQuestionClick(questions.id)}
      >
        <div className="border-primary-50 mr-6 rounded-xl p-3.5 border-2  max-sm:mr-4 max-sm:p-3">
          <questions.Icon width={2} className="stroke-primary-50" />
        </div>

        <p className="text-primary-50 mr-auto pr-4 text-xl/loose font-medium tracking-tight max-lg:text-lg/8 max-lg:font-semibold max-sm:text-base/6 max-sm:font-medium">
          {questions.question}
        </p>

        <div className="flex h-12 w-12 shrink-0 grow-0  items-center justify-center">
          <CaretUp
            className="stroke-primary-50"
            width={2.5}
            activeQuestion={activeQuestion === questions.id}
          />
        </div>
      </button>

      <motion.p
        className="text-primary-100 pt-0 pr-14 pl-20 text-lg/8 font-light  max-lg:text-base/loose max-sm:pr-0 max-sm:pl-0"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestion === questions.id
            ? {
                opacity: 1,
                maxHeight: 300,
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
      >
        {questions.answer}
      </motion.p>
    </motion.li>
  );
};

export default FAQ;
