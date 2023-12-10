const AboutCard = ({ title, subtext, imgUrl }) => (
  <div className='flex flex-col justify-center items-center border rounded-lg mx-4 md:mx-0 shadow-xl'>
    <div className='py-6'>
      <img
        src={imgUrl}
        className='rounded-full h-[200px] w-[200px] object-fill'
      />
    </div>
    <div>
      <h2 className='text-center text-lg font-semibold font-montserrat pb-4'>
        {title}
      </h2>
      <p className='text-normal px-6 pb-6 font-palanquin text-justify'>
        {subtext}
      </p>
    </div>
  </div>
);

export default AboutCard;
