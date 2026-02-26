import { FaChevronDown } from "react-icons/fa";

const SkeletonCardCity = ({ label }: { label: string }) => {
  return (
    <div className=" container-section">
      <h4 className="headline">Cities with {label} delivery</h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div className="" key={index}>
              <button className="p-2 md:p-3 w-full h-full border border-gray-300 text-gray-300 text-[12px] md:text-[14px] font-semibold rounded-2xl">
                <p className="w-[75%] py-2 mx-auto bg-gray-300 animate-pulse rounded-md shrink-0"></p>
              </button>
            </div>
          );
        })}
        <button
        //   onClick={handleCount}
          className="col-span-2 md:col-span-1 p-[9px] flex items-center justify-center gap-1 border border-gray-300 text-gray-300 w-full  rounded-2xl"
        >
          <p className="text-[13px] md:text-[16px] animate-pulse rounded-md shrink-0"> Show More </p>{" "}
          <FaChevronDown size={15} className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default SkeletonCardCity;
