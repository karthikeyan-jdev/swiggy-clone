import { SlNote } from "react-icons/sl";
import { restaurantsArr } from "../data/LocalArr";
import { FaStar } from "react-icons/fa";

const Restaurants = () => {
  return (
    <div className="">
      <h4 className="font-bold text-[19px] text-gray-700 px-4 mt-4">
        Discover best restaurants on Dineout
      </h4>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide p-4">
        {restaurantsArr.map((item) => (
          <div key={item.id} className="shadow rounded-xl bg-white">
            {/* image */}
            <div
              className="flex justify-between items-end p-2.5 w-[290px] h-[155px] bg-gray-300 rounded-t-xl bg-cover bg-center"
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
            <div className="p-2.5 space-y-1">
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
                  <SlNote />
                </span>
                <p> Table booking</p>
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
