import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoMdArrowBack, IoMdPerson } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  const [slideBar, setSlideBar] = useState(false);

  return (
    <nav className="relative px-4 py-4 md:pt-8  md:px-0 md:w-[90%] lg:w-[80%] md:mx-auto flex justify-between items-center border-b border-gray-50 md:border-0">
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
        <IoMdPerson
          className="text-white text-xl"
          onClick={() => setSlideBar(true)}
        />
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
          <button
            onClick={() => setSlideBar(true)}
            className="bg-black md:px-4 md:py-2.5 lg:px-9.5 lg:py-4 rounded-xl"
          >
            Sign in
          </button>
        </div>
      </div>
      {/* login */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
      ${
        slideBar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}
        onClick={() => setSlideBar(false)}
      />
      {/* slider */}
      <div
        className={` bg-white fixed h-screen top-0 right-0 px-6 md:px-12 pt-4 lg:w-[550px] xl:w-[600px] 
          z-50  transform transition-transform duration-300 ease-in-out ${
            slideBar
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-70"
          }`}
      >
        <div className="w-full sm:w-[90%] md:w-[80%]">
          <IoMdArrowBack
            className="text-[30px] my-5 md:hidden"
            onClick={() => setSlideBar(false)}
          />
          <TbXboxXFilled
            className="text-[34px] my-5 hidden md:block"
            onClick={() => setSlideBar(false)}
          />
          <div className="flex justify-between ">
            <div className="space-y-2">
              <h1 className="font-semibold text-[28px]">Login</h1>
              <p>
                or <span className="text-primary">ceate an account</span>
              </p>
            </div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
              className="w-24"
            />
          </div>
          <div className="space-y-1 mt-14">
            <div className="flex flex-col gap-4 ">
              <input
                type="text"
                placeholder="Phone number"
                className="outline outline-gray-400 p-4 block"
              />
              <button className="bg-primary py-4">LOGIN</button>
            </div>
            <p className="text-[14px] font-semibold">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
