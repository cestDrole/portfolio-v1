import { hamburger } from "../assets";
import { navLinks } from "../constants";
import Button from "../components/Button";
import { download } from "../assets";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const NavBar = ({ status, setToggle }) => {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ amount: 0.15 }}
      className='w-screen z-10 sm:px-16 px-8 py-5 fixed shadow-xl bg-slate-50'
    >
      <nav className='flex justify-between items-center max-w-[1440px] mx-auto my-0 '>
        <a href='/' className='font-bold text-lg'>
          SJ
        </a>
        <div className='flex items-center gap-12'>
          <ul className='flex-1 flex justify-center items-center gap-8 lg:gap-12 max-md:hidden '>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='text-lg hover:border-b hover:border-slate-900 font-montserrat'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            label='Resume'
            iconUrl={download}
            buttonStyles={"hidden md:flex"}
          />
        </div>
        <div className='hidden max-md:block'>
          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            onClick={() => setToggle(!status)}
            className='cursor-pointer'
          />
        </div>
      </nav>
    </motion.header>
  );
};

export default NavBar;
