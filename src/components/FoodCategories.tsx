import { moreFoodCategories } from "../data/MoreFoodCategories";
import { topFoodCategories } from "../data/TopFoodCategories";

const FoodCategories = () => {
  return (
    <div className="container-section">
      <h5 className="headline">Order our best food options</h5>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pt-1 px-1">
        {topFoodCategories.map((cat) => (
          <button
            key={cat.id}
            className="w-[100px] md:w-[126px] lg:w-[170px] xl:w-[190px] shrink-0"
          >
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
          <button
            key={cat.id}
            className=" w-[100px] md:w-[126px] lg:w-[170px] xl:w-[190px] shrink-0"
          >
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
