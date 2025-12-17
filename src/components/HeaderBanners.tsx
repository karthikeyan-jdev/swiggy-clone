import deliveryPerson from "../assets/img/delivery-person.png";
import { IoIosSearch } from "react-icons/io";
import BannerGrid from "./BannerGrid";
import { FaChevronDown } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
// import useApi from "../hooks/useFetch";
import { serviceCards } from "../data/ServiceCards";
import { TbXboxXFilled } from "react-icons/tb";

const HeaderBanners = () => {
  // const { data, error, loading } = useApi("/api/service-cards");

  //   if (error) return <p className="text-white">{error}</p>;
  return (
    <div className=" container-section sm:space-y-10 ">
      <div className="flex flex-col md:flex-col-reverse gap-4 sm:w-[96%] md:w-[80%] lg:w-[90%] xl:w-[70%] mx-auto">
        {/* search inputs */}
        <div className="md:flex md:gap-3 md:justify-center text-gray-400 font-semibold">
          {/* seacrh bar 1 */}
          <div className=" hidden md:block  ">
            <div className="bg-white p-2 my-4 rounded-xl flex items-center justify-between gap-2.5 px-3">
              <GrLocation className="text-primary text-[28px] md:text-[30px]" />
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="text-[14px] lg:text-[16px] py-[5px] md:py-[9px] md:w-full"
              />
              <FaChevronDown className="text-gray-700 text-[18px] md:text-[22px]" />
            </div>
          </div>
          {/* seacrh bar 2 */}
          <div className="bg-white p-2 my-4 rounded-xl flex items-center justify-between flex-1">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="text-[14px] lg:text-[16px] py-[5px] md:py-[9px] p-2 w-full"
            />
            <IoIosSearch color="gray" className="text-[28px] md:text-[30px]" />
          </div>
        </div>
        {/* text & delivary image */}
        <div className="flex justify-between md:justify-center p-3 md:p-0">
          <h4 className="text-[15px] sm:text-[20px] mt-2 md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-white md:text-center sm:w-[70%] lg:w-[80%] xl:w-auto md:w-auto">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </h4>
          <img
            src={deliveryPerson}
            alt="deliveryPerson"
            className="w-20 sm:w-24 md:hidden"
          />
        </div>
      </div>
      {/* 3 banner grid */}
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {serviceCards.map((item) => (
            <BannerGrid key={item.id} item={item} />
          ))}
        </div>

        <div className="hidden md:block mt-6">
          <div className="text-gray-500 bg-gray-50 md:text-[18px] lg:text-[20px] flex items-center justify-between">
            <VscTriangleLeft />
            <VscTriangleRight />
          </div>
        </div>
      </div>

      {/* login */}
      <div className="bg-white absolute h-screen top-0 right-0 px-12 pt-4 w-[35%] ">
        <div className="w-[75%]">
          <TbXboxXFilled className="text-[34px] my-5" />
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
    </div>
  );
};

export default HeaderBanners;
