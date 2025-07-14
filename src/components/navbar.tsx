import Logo from "./Logo"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";





const Navbar = () => {
  return (
    <div className=" shadow-md  bg-white w-full flex h-20 justify-around items-center ">
        <Logo/>
        <h1 className="font-Montserrat font-extrabold text-First text-2xl">CALCULATOR</h1>
        <div className="flex items-center text-First text-2xl cursor-pointer hover:text-Second transition-colors duration-300 gap-x-3"> 
        <FaGithub   />
        <FaLinkedin  />
        </div>

    </div>
  )
}

export default Navbar