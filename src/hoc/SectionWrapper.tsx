import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { FC, ComponentType } from "react";

const SectionWrapper = (Component: ComponentType, idName: string): FC => {
  const HOC: FC = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
  return HOC;
};
export { SectionWrapper };
