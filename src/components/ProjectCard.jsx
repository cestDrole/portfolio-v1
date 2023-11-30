import Badge from "./Badge";
import { githubWhite, external } from "../assets";

const ProjectCard = ({
  name,
  description,
  tech,
  imgUrl,
  githubUrl,
  demoUrl,
}) => (
  <div className='flex flex-1 justify-center items-center flex-col border mx-4 rounded-2xl flex-shrink shadow-xl bg-white'>
    <div className='h-auto w-auto overflow-hidden rounded-2xl shadow-lg mt-8 basis-[310px] mx-4'>
      <a href={demoUrl}>
        <img src={imgUrl} />
      </a>
    </div>
    <div>
      <h2 className='text-center text-2xl font-montserrat pb-4 pt-6 font-semibold'>
        {name}
      </h2>
      <p className='text-justify font-palanquin px-10'>{description}</p>
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
          className='flex flex-auto justify-center items-center gap-2 border py-2 px-4 rounded-2xl shadow-xl bg-slate-900'
        >
          <p className='font-palanquin text-white tracking-wide'>GitHub</p>
          <img src={githubWhite} className='h-5 w-5' />
        </a>
        <a
          href={demoUrl}
          className='flex flex-auto justify-center items-center gap-1 border bg-white border-slate-900 py-2 px-2 rounded-2xl shadow-xl'
        >
          <p className='font-palanquin tracking-wide'>Live Demo</p>
          <img src={external} className='h-5 w-5' />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
