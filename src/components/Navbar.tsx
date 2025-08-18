import Logo from "./Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" shadow-md  bg-white w-full flex 2xl:h-40 xl:h-32 h-20 justify-around items-center max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:place-items-center max-sm:h-32 ">
      <Logo />
      <h1 className="font-Montserrat font-extrabold text-First text-2xl 2xl:text-6xl xl:text-4xl max-sm:col-span-2 max-sm:row-span-1 max-sm:text-xl">
        CALCULATOR
      </h1>
      <div className="flex items-center text-First text-2xl 2xl:text-6xl xl:text-4xl cursor-pointer hover:text-Second transition-colors duration-300 gap-x-3 ">
        <a href="https://github.com/Laiba-Na" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
