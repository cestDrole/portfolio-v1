import AboutCard from "../components/AboutCard";
import { aboutMe } from "../constants";

const AboutMe = () => {
  return (
    <div className='max-w-[1440px] my-0 mx-auto mb-5'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-center font-semibold text-3xl pt-8 font-montserrat'>
          About Me
        </h1>
        <div className='flex flex-col gap-8 md:flex-row md:gap-0'>
          <AboutCard
            title={aboutMe[0].title}
            subtext={aboutMe[0].subtext}
            imgUrl={aboutMe[0].imgURL}
          />

          <AboutCard
            title={aboutMe[1].title}
            subtext={aboutMe[1].subtext}
            imgUrl={aboutMe[1].imgURL}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
