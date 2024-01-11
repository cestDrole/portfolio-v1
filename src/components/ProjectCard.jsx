import Badge from "./Badge";
import { githubWhite, external } from "../assets";

const ProjectCard = ({
  name,
  description,
  tech,
  imgUrl,
  githubUrl,
  demoUrl,
  cardStyles,
  transition,
}) => (
  <div
    className={`flex flex-auto justify-center md:w-[768px] md:h-[500px] xl:w-[1024px] h-[auto] items-center flex-col md:gap-6 xl:gap-0 ${cardStyles} border max-sm:basis-[310px] py-4 mx-4 px-7 rounded-2xl flex-shrink shadow-xl bg-white duration-1000`}
  >
    <div className='h-[250px] md:h-[380px] xl:h-[420px] w-[80%] md:w-auto overflow-hidden rounded-2xl shadow-lg mx-4 xl:mx-0 mt-4 md:mt-0'>
      <a href={demoUrl}>
        <img
          src={imgUrl}
          className={`transform ${transition} duration-[5s] ease-in-out h-auto`}
        />
      </a>
    </div>
    <div className='xl:mx-8'>
      <div>
        <h2 className='text-center text-2xl font-montserrat pb-4 pt-6 font-semibold'>
          {name}
        </h2>
        <p className='text-justify font-palanquin px-6 md:px-4'>
          {description}
        </p>
      </div>
      <div className='flex flex-1 items-center justify-center flex-col gap-4 py-4 px-6'>
        <div className='flex flex-1 gap-2 flex-wrap justify-center items-center py-1'>
          {tech.map((tech) => (
            <Badge title={tech} />
          ))}
        </div>
        <div className='flex flex-1 gap-4 justify-center items-center'>
          <a
            href={githubUrl}
            className='flex flex-auto justify-center items-center gap-2 border py-2 px-4 rounded-2xl shadow-xl bg-slate-900 transition duration-500 hover:shadow-2xl hover:bg-black hover:-translate-y-[2px]'
          >
            <p className='font-palanquin text-white tracking-wide'>GitHub</p>
            <img src={githubWhite} className='h-5 w-5' />
          </a>
          <a
            href={demoUrl}
            className='flex flex-auto justify-center items-center gap-2 border bg-white border-slate-900 rounded-2xl shadow-xl overflow-auto h-[42px] w-[140px] transition duration-500 hover:shadow-2xl hover:bg-gray-200 hover:text-slate-900 hover:-translate-y-[2px]'
          >
            <p className='font-palanquin tracking-wide'>Live Demo</p>
            <img src={external} className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
