import Badge from "./Badge";

const ProjectCard = ({
  name,
  description,
  tech,
  imgUrl,
  githubUrl,
  demoUrl,
}) => (
  <div className='flex flex-1 justify-center items-center flex-col border mx-4 rounded-lg'>
    <div className='h-[200px] w-[75%] overflow-hidden rounded-lg shadow-lg mt-6'>
      <a href={demoUrl}>
        <img src={imgUrl} />
      </a>
    </div>
    <div>
      <h2 className='text-center text-2xl font-montserrat py-4'>{name}</h2>
      <p className='text-justify font-palanquin px-8'>{description}</p>
    </div>
    <div className='flex flex-1 items-center justify-center flex-col gap-4 py-4'>
      <div className='flex flex-1 gap-2 flex-wrap'>
        {tech.map((tech) => (
          <Badge title={tech} />
        ))}
      </div>
      <div className='flex flex-1 gap-4'>
        <a href={githubUrl}>GitHub Code</a>
        <a href={demoUrl}>Live demo</a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
