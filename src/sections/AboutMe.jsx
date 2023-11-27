import AboutCard from "../components/AboutCard";
import { aboutMe } from "../constants";

const AboutMe = () => {
  return (
    <section className='max-w-[1440px]'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-center font-semibold text-2xl pt-8 font-montserrat'>
          About Me
        </h1>
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
    </section>
  );
};

export default AboutMe;
