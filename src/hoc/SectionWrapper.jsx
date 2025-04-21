import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export const SectionWrapper = (Component, idName) => {
  const HOC = () => {
    return (
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${
          idName === "xp" ? "md:mt-[6rem]" : ""
        }`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component id={idName} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
