import { linkedin, github, hero } from "../assets";
import { techStack } from "../constants";

const Hero = () => {
  return (
    <div className='flex justify-center items-center  gap-4 sm:gap-8 w-full h-[850px] sm:h-[900px] md:h-[1000px] lg:h-[100vh] bg-slate-100 max-lg:flex-col-reverse'>
      <div className='px-8 sm:px-16 lg:px-0'>
        <div>
          <h1 className='text-4xl font-semibold font-montserrat max-sm:text-[40px] text-center lg:text-left leading-tight sm:leading-normal'>
            Front-End React <br /> Developer
          </h1>
          <p className='font-normal font-palanquin pt-4 pb-2 text-xl leading-normal text-center lg:text-left'>
            Hi, I'm <span className='font-bold italic'>Sebastian Jasnosz</span>.{" "}
            <br />
            A passionate Front-end React <br /> Developer based in Gdańsk,
            Poland.
          </p>
        </div>
        <div className='flex flex-1 gap-4 py-4 items-center justify-center lg:justify-normal'>
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
        <div className='flex flex-1 items-center justify-between py-2 flex-col lg:flex-row'>
          <p className='font-semibold text-xl font-montserrat border-b-2 border-b-slate-400 pb-2 lg:mr-6'>
            Tech Stack
          </p>
          <div className='gap-5 flex flex-initial flex-wrap justify-evenly max-lg:pt-6 w-[150px] sm:w-[320px]'>
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
      <div className='pt-16 md:pt-24 lg:pt-0'>
        <img
          src={hero}
          alt='hero'
          className='lg:h-[500px] lg:w-[500px] rounded-full
          h-[250px] w-[250px] shadow-xl md:h-[400px] md:w-[400px] sm:h-[325px] sm:w-[325px]'
        />
      </div>
    </div>
  );
};

export default Hero;
