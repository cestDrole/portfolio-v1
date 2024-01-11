import { linkedin, github, hero } from "../assets";
import { techStack } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex justify-center items-center  gap-4 sm:gap-8 w-screen h-[850px] sm:h-[900px] md:h-[1000px] lg:h-[1100px] xl:h-[100vh] bg-slate-100 max-xl:flex-col-reverse'
    >
      <div className='px-8 sm:px-16 xl:px-0'>
        <div>
          <motion.h1
            variants={textVariant(0.5)}
            className='text-4xl font-semibold font-montserrat max-sm:text-[40px] text-center xl:text-left leading-tight sm:leading-normal'
          >
            Front-End React <br /> Developer
          </motion.h1>
          <motion.p
            variants={textVariant(0.6)}
            className='font-normal font-palanquin pt-4 pb-2 text-xl leading-normal text-center xl:text-left'
          >
            Hi, I'm <span className='font-bold italic'>Sebastian Jasnosz</span>.{" "}
            <br />
            A passionate Front-end React <br /> Developer based in Gdańsk,
            Poland.
          </motion.p>
        </div>
        <motion.div
          variants={textVariant(0.7)}
          className='flex flex-1 gap-4 py-4 items-center justify-center xl:justify-normal'
        >
          <a href='https://github.com/cestDrole' className='cursor-pointer'>
            <img
              src={github}
              alt='GitHub'
              className='h-8 w-8 hover:scale-125 transition duration-200'
            />
          </a>
          <a
            href='https://linkedin.com/in/sebastian-jasnosz'
            className='cursor-pointer'
          >
            <img
              src={linkedin}
              alt='linked in'
              className='h-8 w-8 hover:scale-125 transition duration-200'
            />
          </a>
        </motion.div>
        <motion.div
          variants={textVariant(0.8)}
          className='flex flex-1 items-center justify-between py-2 flex-col xl:flex-row'
        >
          <p className='font-semibold text-xl font-montserrat border-b-2 border-b-slate-400 pb-2 xl:mr-6'>
            Tech Stack
          </p>
          <div className='gap-5 flex flex-initial flex-wrap justify-evenly max-xl:pt-6 w-[150px] sm:w-[320px]'>
            {techStack.map((item) => (
              <img
                src={item.imgURL}
                alt={item.name}
                className={`h-9 w-9 ${item.styles}
                rounded-lg hover:scale-[115%] transition duration-200`}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className='pt-16 md:pt-24 lg:pt-28 xl:pt-0'
      >
        <img
          src={hero}
          alt='hero'
          className='lg:h-[500px] lg:w-[500px] rounded-full
          h-[250px] w-[250px] shadow-xl md:h-[400px] md:w-[400px] sm:h-[325px] sm:w-[325px]'
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
