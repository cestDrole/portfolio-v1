import { pin, mail } from "../assets";
import { motion } from "framer-motion";
import { textVariant, textContainer } from "../utils/motion";

const Contact = () => (
  <motion.div
    variants={textContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.5 }}
    className='flex flex-1 items-center justify-center flex-col gap-8 my-8'
  >
    <motion.h1
      variants={textVariant(0.3)}
      className='text-center font-semibold text-3xl font-montserrat'
    >
      Let's get in touch!
    </motion.h1>
    <div className='flex flex-1 items-center justify-center flex-col md:flex-row gap-8'>
      <motion.div
        variants={textVariant(0.4)}
        className='flex flex-col justify-center items-center gap-2 h-[93px] w-[167px]'
      >
        <img src={mail} className='h-7 w-7' />
        <h2 className='text-xl font-medium font-montserrat'>Mail</h2>

        <a
          href='mailto:smwjasnosz@gmail.com'
          className='font-palanquin hover:border-b border-slate-900'
        >
          smwjasnosz@gmail.com
        </a>
      </motion.div>
      <motion.div
        variants={textVariant(0.5)}
        className='flex flex-col justify-center items-center gap-2 h-[93px] w-[167px]'
      >
        <img src={pin} className='h-7 w-7' />
        <h2 className='text-xl font-medium font-montserrat'>Location</h2>

        <p className='font-palanquin'>Gdańsk, Poland</p>
      </motion.div>
    </div>
  </motion.div>
);
export default Contact;
