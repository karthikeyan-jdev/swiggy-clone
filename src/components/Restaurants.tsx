import { SlNote } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { restaurantsArr } from "../data/RestaurantsArr";

const Restaurants = () => {
  return (
    <div className="container-section ">
      <h4 className="headline pb-2">Discover best restaurants on Dineout</h4>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide rounded-xl">
        {restaurantsArr.map((item,i) => (
          <div key={i} className="shadow rounded-xl bg-white">
            {/* image */}
            <div
              className="flex justify-between items-end p-2.5 w-[290px] h-[155px] md:w-[310px] 
              md:h-[165px] lg:w-[330px] lg:h-[175px] xl:w-[350px] xl:h-[185px]
              bg-gray-300 rounded-t-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h1 className="text-white font-semibold text-[18px]">
                {item.name}
              </h1>
              <p className="flex items-center gap-1 text-white font-semibold text-[18px] ">
                <span className="bg-green-600 p-1 rounded-full">
                  <FaStar size={10} />
                </span>
                <span>{item.rating}</span>
              </p>
            </div>
            {/* discription */}
            <div className="p-2.5 space-y-1 lg:space-y-2">
              <div className="flex justify-between">
                <p className="text-[13px]">Continental.north indian</p>
                <p className="text-[13px]">{item.priceForTwo}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[13px] text-gray-600">
                  {item.location},Chennai
                </p>
                <p className="text-[13px]">{item.deliveryTime}</p>
              </div>
              <p className="flex items-center gap-1 bg-gray-100 text-gray-600 w-fit  rounded-lg p-0.5 px-2 text-[11px]">
                <span className="text-[10px]">
                  <SlNote  />
                </span>
                <span> Table booking</span>
              </p>
              {item.offer && (
                <p className="text-green-600 bg-green-200 rounded-lg text-[13px] px-1.5">
                  Up to {item.offer} with bank offers
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
