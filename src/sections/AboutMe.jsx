import AboutCard from "../components/AboutCard";
import { aboutMe } from "../constants";
import Button from "../components/Button";
import { download } from "../assets";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";

const AboutMe = () => {
  return (
    <section className='max-w-[1440px] my-0 mx-auto mb-8'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col gap-8 lg:gap-8'
      >
        <motion.h1
          variants={textVariant(0.1)}
          className='text-center font-semibold text-3xl pt-8 font-montserrat'
        >
          About Me
        </motion.h1>
        <div className='flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-center'>
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.5 }}
          >
            <AboutCard
              title={aboutMe[0].title}
              subtext={aboutMe[0].subtext}
              imgUrl={aboutMe[0].imgURL}
              cardStyles={"xl:flex-row md:ml-10"}
              imageStyles={"xl:ml-8"}
              textStyles={"xl:pr-8"}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.5 }}
          >
            <AboutCard
              title={aboutMe[1].title}
              subtext={aboutMe[1].subtext}
              imgUrl={aboutMe[1].imgURL}
              cardStyles={"xl:flex-row-reverse md:mr-10"}
              imageStyles={"xl:mr-8"}
              textStyles={"xl:pl-8"}
            />
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col md:flex-row gap-5 items-center justify-center'
        >
          <motion.h2
            variants={fadeIn("up", "spring", 0.4, 1)}
            className='font-montserrat font-semibold text-xl'
          >
            Learn More
          </motion.h2>
          <motion.div variants={fadeIn("up", "spring", 0.6, 1)}>
            <Button label='Resume' iconUrl={download} buttonStyles={"flex"} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
