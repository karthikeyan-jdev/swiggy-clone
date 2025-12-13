import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CityServicesList = ({
  prefix,
  headline,
  cities,
}: {
  prefix: string;
  headline: string;
  cities: { id: number; name: string }[];
}) => {
  const getCountByWidth = () => {
    return window.innerWidth < 768 ? 6 : 11;
  };

  const [count, setCount] = useState(getCountByWidth);

  useEffect(() => {
    const updateCount = () => {
      setCount(getCountByWidth());
    };

    updateCount(); 
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handleCount = () => {
    setCount((pre) => pre + 6);
  };

  return (
    <div className=" container-section">
      <h4 className="headline">{headline}</h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {cities.slice(0, count).map((city) => {
          return (
            <div className="" key={city.id}>
              <button className="p-3 w-full h-full border border-gray-400 text-gray-700 text-[12px] md:text-[14px] font-semibold rounded-2xl">
                <p className="w-[75%] mx-auto ">
                  {prefix}
                  {city.name}
                </p>
              </button>
            </div>
          );
        })}
        <button
          onClick={handleCount}
          className="col-span-2 md:col-span-1 p-[9px] flex items-center justify-center gap-1 border border-amber-600 text-primary w-full  rounded-2xl"
        >
          <p className="text-[16px]"> Show More </p>{" "}
          <FaChevronDown size={15} className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default CityServicesList;
