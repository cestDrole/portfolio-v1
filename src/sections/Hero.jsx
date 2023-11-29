import { linkedin, github } from "../assets";
import { techStack } from "../constants";

const Hero = () => {
  return (
    <div className='flex justify-center items-center gap-12 w-full h-[100vh] bg-slate-100 max-sm:flex-col-reverse'>
      <div className='px-8 sm:px-16'>
        <div className=' pt-2 sm:pt-4'>
          <h1 className='text-4xl font-semibold font-montserrat max-sm:text-[40px] text-center sm:text-left leading-tight sm:leading-normal'>
            Front-End React <br /> Developer
          </h1>
          <p className='font-normal font-palanquin pt-4 pb-2 text-xl leading-normal text-center md:text-left'>
            Hi, I'm Sebastian Jasnosz. A passionate Front-end React <br />{" "}
            Developer based in Gdańsk, Poland.
          </p>
        </div>
        <div className='flex flex-1 gap-4 py-4 items-center justify-center sm:justify-normal'>
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
        </div>
        <div className='flex flex-1 items-center justify-between py-2 flex-col md:flex-row'>
          <p className='font-semibold text-xl font-montserrat border-b-2 border-b-slate-400 max-sm:pb-2'>
            Tech Stack
          </p>
          <div className='w-[70%] gap-5 flex flex-1 flex-wrap justify-evenly px-8 max-sm:pt-6'>
            {techStack.map((item) => (
              <img
                src={item.imgURL}
                alt={item.name}
                className={`h-9 w-9 ${item.styles}
                rounded-lg`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1>Placeholder</h1>
      </div>
    </div>
  );
};

export default Hero;
