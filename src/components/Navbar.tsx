import { FaChevronDown } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="px-4 md:px-0 md:w-[90%] lg:w-[80%] md:mx-auto flex justify-between p-2 border-b border-gray-50 ">
      <div className="flex items-center gap-1.5 text-white ">
        <span className="text-[20px]">
          <HiMiniHome />
        </span>
        <h1 className="font-semibold text-[20px]">Home</h1>
        <span className="mt-1 text-[14px]">
          <FaChevronDown />
        </span>
      </div>
      <div className="flex items-center justify-center bg-black p-2 rounded-full">
        <IoMdPerson className="text-white text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
