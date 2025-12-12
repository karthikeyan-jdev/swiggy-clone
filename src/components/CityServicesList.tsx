import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CityServicesList = ({
  headline,
  cities,
}: {
  headline: string;
  cities: { id: number; name: string }[];
}) => {
  const [count, setCount] = useState(6);
  return (
    <div className=" p-4">
      <h4 className="font-bold text-[19px] text-gray-700 px-2 my-4">
        {headline}
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {cities.slice(0, count).map((city) => {
          return (
            <div className="" key={city.id}>
              <button className="p-3 border border-gray-400 text-gray-700 text-[14px] rounded-2xl w-full ">
                {city.name}
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setCount((pre) => pre + 6);
        }}
        className="flex items-center justify-center gap-1 border border-amber-600 text-orange-400 w-full mt-4 p-3 rounded-2xl"
      >
        <p className="text-[16px]"> Show More </p>{" "}
        <FaChevronDown size={15} className="mt-1" />
      </button>
    </div>
  );
};

export default CityServicesList;
