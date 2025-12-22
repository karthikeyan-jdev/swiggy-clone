import {
  getFoodCategories,
  type FoodCategoriesResponse,
} from "../data/FoodCategegories";
import useLocalApi from "../hooks/useLocalApi";
import Loading from "./Loading";

const FoodCategories = () => {
  const { data, loading } =
    useLocalApi<FoodCategoriesResponse>(getFoodCategories); // promise function
  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  const { top, more } = data;
  return (
    <div className="container-section">
      <h5 className="headline">Order our best food options</h5>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pt-1 px-1">
        {Array.isArray(top) &&
          top.map((cat) => (
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
        {Array.isArray(more) &&
          more.map((cat) => (
            <button
              key={cat.id}
              className=" w-[100px] md:w-[126px] lg:w-[170px] xl:w-[190px] shrink-0"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full object-cover"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default FoodCategories;
