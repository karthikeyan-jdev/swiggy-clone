import { FaChevronDown } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <nav className="px-4 py-4 md:pt-8  md:px-0 md:w-[90%] lg:w-[80%] md:mx-auto flex justify-between items-center border-b border-gray-50 md:border-0">
      {/* below md text */}
      <div className="md:hidden flex items-center gap-1.5 text-white ">
        <span className="text-[20px]">
          <HiMiniHome />
        </span>
        <h1 className="font-semibold text-[20px]">Home</h1>
        <span className="mt-1 text-[14px]">
          <FaChevronDown />
        </span>
      </div>
      {/* above md text*/}
      <div className="hidden md:block">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="logo"
          className="w-40 lg:w-44"
        />
      </div>
      {/* below md text */}
      <div className="md:hidden flex items-center justify-center bg-black p-2 rounded-full">
        <IoMdPerson className="text-white text-xl" />
      </div>
      {/* above md text */}

      <div className="hidden md:block min-w-max">
        <div className=" md:flex md:gap-3 lg:gap-5 xl:gap-7 items-center text-white md:text-[15px] lg:text-[18px] font-bold">
          <p>Swiggy Corporate</p>
          <p>Partner with us</p>
          <button
            // onClick={() => {
            //   navigate("/downloadApp");
            // }}
            className="flex items-center gap-2 md:px-3.5 md:py-2.5 lg:px-6.5 lg:py-3.5 border border-white rounded-xl `"
          >
            <p>Get the app</p> <MdArrowOutward />
          </button>
          <button className="bg-black md:px-4 md:py-2.5 lg:px-9.5 lg:py-4 rounded-xl">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
