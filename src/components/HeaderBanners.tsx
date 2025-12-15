import deliveryPerson from "../assets/img/delivery-person.png";
import { IoIosSearch } from "react-icons/io";
import BannerGrid from "./BannerGrid";
import { serviceCards } from "../data/LocalArr";
import { FaChevronDown } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const HeaderBanners = () => {
  return (
    <div className="container-section sm:space-y-14 ">
      <div className="flex flex-col md:flex-col-reverse sm:w-[96%] md:w-[80%] lg:w-[90%] xl:w-[80%] mx-auto">
        {/* search inputs */}
        <div className="md:flex md:gap-3 md:justify-center ">
          {/* seacrh bar 1 */}
          <div className=" hidden md:block">
            <div className="bg-white p-2 my-4 rounded-xl flex items-center justify-between gap-2.5 px-3">
              <GrLocation className="text-primary text-[28px] md:text-[30px]" />
              <input
                type="text"
                placeholder="Search for restaurant, item or more"
                className="text-[14px] py-[5px] md:py-[9px] lg:py-[13px] md:w-full"
              />
              <FaChevronDown className="text-gray-700 text-[18px] md:text-[22px] " />
            </div>
          </div>
          {/* seacrh bar 2 */}
          <div className="bg-white p-2 my-4 rounded-xl flex items-center justify-between flex-1">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="text-[14px] py-[5px] w-full"
            />
            <IoIosSearch  color="gray" className="text-[28px] md:text-[30px]" />
          </div>
        </div>
        {/* text & delivary image */}
        <div className="flex justify-between md:justify-center p-3">
          <h4 className="text-[15px] sm:text-[20px] mt-2 md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-white md:text-center sm:w-[70%] md:w-auto">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </h4>
          <img
            src={deliveryPerson}
            alt="deliveryPerson"
            className="w-20 sm:w-24 md:hidden"
          />
        </div>
      </div>
      {/* banner grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {serviceCards.map((item) => (
          <BannerGrid item={item} />
        ))}
      </div>
    </div>
  );
};

export default HeaderBanners;
