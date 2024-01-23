import { close, download, resume } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const MobileNavBar = ({ status, setToggle }) => {
  return (
    <div
      className={`z-50 h-[100vh] w-screen bg-white fixed transition-all duration-500 ease-in-out ${
        status ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className='flex justify-end items-center mr-3 mt-3'>
        <img
          src={close}
          className={`h-12 w-12 cursor-pointer`}
          onClick={() => setToggle(!status)}
        />
      </div>

      <ul className='flex-1 flex justify-center items-center flex-col h-[85%] gap-8'>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='text-lg font-semibold font-montserrat'
              onClick={() => setToggle(!status)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <Button
            label='Resume'
            iconUrl={download}
            buttonStyles={"flex"}
            download={resume}
          />
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
