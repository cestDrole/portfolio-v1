const AboutCard = ({
  title,
  subtext,
  imgUrl,
  cardStyles,
  imageStyles,
  textStyles,
}) => (
  <div
    className={`flex flex-1 flex-col ${cardStyles} justify-center items-center border rounded-lg mx-4 md:px-6 lg:px-6 xl:px-0 shadow-xl xl:gap-6 md:h-[650px] xl:h-[500px] duration-[2000ms]`}
  >
    <div className={`py-6 xl:py-0 ${imageStyles}`}>
      <img
        src={imgUrl}
        className='rounded-full h-[200px] w-[200px] lg:h-[auto] lg:w-[250px] overflow-hidden'
      />
    </div>
    <div
      className={`md:w-[350px] xl:flex xl:flex-auto xl:flex-col ${textStyles}`}
    >
      <h2 className='text-center text-lg font-semibold font-montserrat pb-4 xl:px-6 xl:pt-8'>
        {title}
      </h2>
      <p className='px-6 pb-6 lg:px-6 font-palanquin text-normal text-justify tracking-wider leading-7 whitespace-pre-wrap'>
        {subtext}
      </p>
    </div>
  </div>
);

export default AboutCard;
