import { githubWhite, linkedinWhite } from "../assets";

const Footer = () => (
  <footer className='flex flex-auto justify-between items-center bg-slate-900 h-[100px]'>
    <h2 className='text-white font-montserrat pl-4'>
      © Sebastian Jasnosz 2023
    </h2>
    <div className='flex flex-1 gap-6 items-center justify-center'>
      <a href='https://github.com/cestDrole' className='cursor-pointer'>
        <img src={githubWhite} className='h-7 w-7' />
      </a>
      <a href='https://linkedin.com/in/sebastian-jasnosz'>
        <img src={linkedinWhite} className='h-7 w-7' />
      </a>
    </div>
  </footer>
);

export default Footer;
