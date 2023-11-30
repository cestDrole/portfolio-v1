import { close } from "../assets";

const MobileNavBar = ({ status, setToggle }) => {
  return (
    <div
      className={`z-50 h-[100vh] w-full bg-white fixed transition-all duration-500 ease-in-out ${
        status ? "-right-[100%]" : "right-0"
      }`}
    >
      <img
        src={close}
        className={`h-10 w-10 cursor-pointer`}
        onClick={() => setToggle(!status)}
      />
    </div>
  );
};

export default MobileNavBar;
