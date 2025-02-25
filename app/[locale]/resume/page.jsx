"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcs, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const about = {
    
}

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    ></motion.section>
  );
};

export default Resume;
