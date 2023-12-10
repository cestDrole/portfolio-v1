import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../constants";

const Projects = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-slate-100 pb-5'>
      <h1 className='text-center font-semibold text-3xl py-6 font-montserrat'>
        Projects
      </h1>
      <div className='flex flex-1 flex-col gap-8  md:max-w-[1440px]'>
        {projectList.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            tech={project.tech}
            imgUrl={project.imgURL}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
