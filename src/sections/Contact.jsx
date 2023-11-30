import { pin, mail } from "../assets";

const Contact = () => (
  <div className='flex flex-1 items-center justify-center flex-col gap-4 my-8'>
    <h1 className='text-center font-semibold text-3xl font-montserrat'>
      Let's get in touch!
    </h1>
    <div className='flex flex-col justify-center items-center gap-2'>
      <img src={mail} className='h-7 w-7' />
      <h2 className='text-xl font-medium font-montserrat'>Mail</h2>

      <a
        href='mailto:smwjasnosz@gmail.com'
        className='font-palanquin hover:border-b border-slate-900'
      >
        smwjasnosz@gmail.com
      </a>
    </div>
    <div className='flex flex-col justify-center items-center gap-2'>
      <img src={pin} className='h-7 w-7' />
      <h2 className='text-xl font-medium font-montserrat'>Location</h2>

      <p className='font-palanquin'>Gdańsk, Poland</p>
    </div>
  </div>
);
export default Contact;
