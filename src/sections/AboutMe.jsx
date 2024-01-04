import AboutCard from "../components/AboutCard";
import { aboutMe } from "../constants";
import Button from "../components/Button";
import { download } from "../assets";

const AboutMe = () => {
  return (
    <div className='max-w-[1440px] my-0 mx-auto mb-8'>
      <div className='flex flex-col gap-8 lg:gap-8'>
        <h1 className='text-center font-semibold text-3xl pt-8 font-montserrat'>
          About Me
        </h1>
        <div className='flex flex-col gap-8 md:flex-row md:gap-0'>
          <AboutCard
            title={aboutMe[0].title}
            subtext={aboutMe[0].subtext}
            imgUrl={aboutMe[0].imgURL}
            cardStyles={"xl:flex-row md:ml-10"}
            imageStyles={"xl:ml-8"}
            textStyles={"xl:pr-8"}
          />

          <AboutCard
            title={aboutMe[1].title}
            subtext={aboutMe[1].subtext}
            imgUrl={aboutMe[1].imgURL}
            cardStyles={"xl:flex-row-reverse md:mr-10"}
            imageStyles={"xl:mr-8"}
            textStyles={"xl:pl-8"}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
          <h2 className='font-montserrat font-semibold text-xl'>Learn More</h2>
          <Button label='Resume' iconUrl={download} buttonStyles={"flex"} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
