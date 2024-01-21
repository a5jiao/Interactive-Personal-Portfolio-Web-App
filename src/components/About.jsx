import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a First Year student at the University of Waterloo,  studying Computer
         Science and Finance with a deep passion and adoration for developing software and 
        tackling challenging problems. I've gained expertise and experience in Python, Java, C/C++, and JavaScript, with a strong proficiency in frameworks 
        such as React, Node.js, and Tailwind CSS. I'm a quick learner and am always eager to grow 
        and experience new things, especially in the vast, endless fields of technology.
        I find passion in creating efficient, scalable, and user-friendly solutions that solve
        real-world problems, where I encourage you to browse my works below. <br className='sm:block hidden' />
        &nbsp; <br className='sm:block hidden' />
         Let's work together.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");