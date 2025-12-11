import { moreFoodCategories, topFoodCategories } from "../data/LocalArr";

const FoodCategories = () => {
  return (
    <div className="p-4">
      <h5 className="font-bold text-[19px] text-gray-700">
        Order our best food options
      </h5>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pt-1 px-1">
        {topFoodCategories.map((cat) => (
          <button key={cat.id} className="w-[100px] md:w-[126px] shrink-0">
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pt-1 px-1">
        {moreFoodCategories.map((cat) => (
          <button key={cat.id} className=" w-[100px] md:w-[126px] shrink-0">
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
