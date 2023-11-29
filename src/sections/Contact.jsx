const Contact = () => (
  <div className='flex flex-1 items-center justify-center flex-col'>
    <h1 className='text-center font-semibold text-3xl py-2 font-montserrat'>
      Contact
    </h1>
    <p>Let's talk!</p>
    <div className='flex flex-col justify-center items-center py-6 gap-4'>
      <img />
      <h2 className='text-xl font-medium font-montserrat'>Mail</h2>
      <a href='mailto:smwjasnosz@gmail.com' className='font-palanquin'>
        smwjasnosz@gmail.com
      </a>
    </div>
    <div className='flex flex-col justify-center items-center py-2 gap-4'>
      <img />
      <h2 className='text-xl font-medium font-montserrat'>Location</h2>
      <p className='font-palanquin'>Gdańsk, Poland</p>
    </div>
  </div>
);
export default Contact;
