import { githubWhite, linkedinWhite } from "../assets";

const Footer = () => (
  <footer className=' bg-slate-900 h-[80px] rounded-t-2xl flex items-center justify-between px-10 sm:justify-center sm:gap-14 sm:px-0'>
    <h2 className='text-white font-montserrat'>© Sebastian Jasnosz 2024</h2>
    <div className='flex justify-center items-center gap-4'>
      <a href='https://github.com/cestDrole' className='cursor-pointer'>
        <img
          src={githubWhite}
          className='h-7 w-7 hover:scale-125 transition duration-200'
        />
      </a>
      <a href='https://linkedin.com/in/sebastian-jasnosz'>
        <img
          src={linkedinWhite}
          className='h-7 w-7 hover:scale-125 transition duration-200'
        />
      </a>
    </div>
  </footer>
);

export default Footer;
