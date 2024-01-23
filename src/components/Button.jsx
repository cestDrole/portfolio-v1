const Button = ({ label, iconUrl, buttonStyles, download }) => {
  return (
    <a href={download} download='Resume_Sebastian_Jasnosz' target='_self'>
      <button
        className={`relative items-center justify-center gap-4 h-12 w-36 overflow-hidden rounded-full border border-slate-900 text-white bg-slate-900 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-gray-600 hover:border-gray-600 before:duration-300 before:ease-out hover:text-white hover:shadow-black hover:before:h-40 hover:before:w-40 hover:before:opacity-80 ${buttonStyles}`}
      >
        <p className='relative z-40'>{label}</p>
        {iconUrl && (
          <img
            src={iconUrl}
            alt='download'
            className='w-6 h-6 relative z-10 fill-slate-900'
          />
        )}
      </button>
    </a>
  );
};

export default Button;
