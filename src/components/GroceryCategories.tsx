import { getFoodCategories } from "../data/GroceryCategoriesArr";
import useLocalApi from "../hooks/useLocalApi";
import SkeletonCard from "./SkeletonCard";

const GroceryCategories = () => {
  const { data, loading } = useLocalApi(getFoodCategories);
  if (loading) {
    return (
      <SkeletonCard
        headline="Shop groceries on Instamart"
        show={false}
        room="w-[100px] md:w-[126px] lg:w-[170px] h-[100px] md:h-[126px] lg:h-[170px]"
      />
    );
  }

  return (
    <div className="container-section ">
      <h5 className="headline">Shop groceries on Instamart</h5>
      <div className="flex gap-4 md:gap-10 pt-1 px-1 overflow-x-auto scrollbar-hide">
        {data?.map((cat) => (
          <div key={cat.id}>
            <div className="w-[100px] md:w-[126px] lg:w-[170px] xl:w-[190px]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[12px] text-center mt-0.5">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryCategories;
