import { Star } from "../assets";
import { hamburger } from "../assets";
import { navLinks } from "../constants";
import Button from "../components/Button";
import { download } from "../assets";

const NavBar = () => {
  return (
    <header className='w-full z-10 sm:px-16 px-8 py-5 sm:py-6 fixed shadow-xl bg-slate-50'>
      <nav className='flex justify-between items-center max-w-[1440px] mx-auto my-0 '>
        <a href='/'>
          <img src={Star} alt='logo' width={40} height={40} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-8 lg:gap-16 max-md:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-lg'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button label='Resume' iconUrl={download} />
        <div className='hidden max-md:block'>
          <img src={hamburger} alt='Hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
