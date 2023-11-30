const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  buttonStyles,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-3 border text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-blue-400 text-white border-white"
      } rounded-full max-sm:py-2 ${buttonStyles}`}
    >
      {label}

      {iconUrl && <img src={iconUrl} alt='download' className='w-6 h-6' />}
    </button>
  );
};

export default Button;
