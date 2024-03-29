import ProjectCard from "../components/ProjectCard";
import { projectList } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0 }}
      className='flex flex-1 flex-col items-center justify-center bg-slate-100 pb-5'
    >
      <motion.h1
        variants={textVariant(2)}
        className='text-center font-semibold text-3xl py-6 font-montserrat'
      >
        Projects
      </motion.h1>
      <div className='flex flex-1 flex-col gap-8  md:max-w-[1440px] overflow-x-hidden'>
        {projectList.map((project) => (
          <motion.div
            variants={fadeIn(project.direction, "spring", 0.5, 1.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.5 }}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              tech={project.tech}
              imgUrl={project.imgURL}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              cardStyles={project.cardStyles}
              transition={project.transition}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
