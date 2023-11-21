const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-blue-400 text-white border-white"
      } rounded-full`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="download"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;