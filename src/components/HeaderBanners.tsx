import deliveryPerson from "../assets/img/delivery-person.png";
import { IoIosSearch } from "react-icons/io";

const HeaderBanners = () => {
  return (
    <div className="">
      {/* seacrh bar */}
      <div className="bg-white p-2 my-4 rounded-xl flex items-center justify-between ">
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="text-[14px] py-[5px]"
        />
        <IoIosSearch size={22} color="gray" />
      </div>
      {/* text */}
      <div className="flex justify-between py-4 p-3">
        <h4 className="text-[20px] font-semibold text-white w-[290px]">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h4>
        <img
          src={deliveryPerson}
          alt="deliveryPerson"
          className="w-25 bg-inherit"
        />
      </div>
      {/* banner grid */}
      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-white rounded-xl flex justify-between col-span-2">
          <div className="flex flex-col  justify-center p-5">
            <h4 className="font-bold text-[18px] text-gray-600">
              FOOD DELIVERY
            </h4>
            <p className="text-gray-500 text-[13px]">FROM RESTAURANTS</p>
            <p className="text-primary font-semibold text-[13px]">
              UP TO 60% OFF
            </p>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/070/116/360/small/delicious-chicken-biryani-with-garnish-in-white-bowl-on-transparent-background-png.png"
            alt="deliveryPerson"
            className="w-28 pt-6 rounded-br-xl bg-transparent"
          />
        </div>
        <div className="bg-white rounded-xl  ">
          <div className="flex flex-col justify-center  ">
            <div className="px-4 pt-4 space-y-0.5">
              <h4 className="font-bold text-[18px] text-gray-600 ">
                INSTANMART
              </h4>
              <p className="text-gray-500 text-[13px]">THE EVERYTHINGS STORE</p>
              <p className="text-primary font-semibold text-[13px] px-1">
                FREE DELIVERY
              </p>
            </div>

            <div className="">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/054/591/691/small/3d-render-of-cosmetics-products-free-png.png"
                alt=""
                className="w-32 h-28 rounded-br-xl ml-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl  ">
          <div className="flex flex-col justify-center ">
            <div className="px-4 pt-4 space-y-0.5">
              <h4 className="font-bold text-[18px] text-gray-600 ">DINEOUT</h4>
              <p className="text-gray-500 text-[13px]">EAT OUT & SAVE MORE</p>
              <p className="text-primary font-semibold text-[13px] px-1">
                UP TO 50% OFF
              </p>
            </div>

            <div className="">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/053/204/993/small/cutlery-on-plates-with-beige-napkin-on-transparent-background-free-png.png"
                alt=""
                className="w-32 h-28 rounded-br-xl ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanners;
