import { GrFormNextLink } from "react-icons/gr";

const BannerGrid = ({ item }) => {
  return (
    <div
      className={`relative overflow-hidden bg-white rounded-4xl  ${item.cardClass}`}
    >
      <div className="pl-4 pt-6 md:pl-5 md:pt-8 space-y-0.5 lg:space-y-1">
        <h4
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
          className="font-bold sm:text-[22px] lg:text-[28px] text-gray-600 "
        >
          {" "}
          {item.title}
        </h4>
        <p className="text-gray-500 text-[12px] sm:text-[14px] lg:text-[16px] min-w-max">
          {item.subtitle}
        </p>
        <p
          className="text-primary bg-linear-to-r from-orange-100 to-white-500 w-fit rounded-xl
 font-semibold text-[12px] sm:text-[14px] lg:text-[15px] px-1"
        >
          {item.offer}
        </p>
      </div>
      <div className="">
        <div className="bg-primary text-white text-2xl lg:text-3xl rounded-full w-fit p-2 lg:p-2.5 hidden md:block md:absolute bottom-0 m-5.5">
          <GrFormNextLink />
        </div>
        <img src={item.image} alt="image" className={item.cardimageClass} />
      </div>
    </div>
  );
};

export default BannerGrid;
