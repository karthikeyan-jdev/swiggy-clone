import { groceryCategoriesArr } from "../data/GroceryCategoriesArr";

const GroceryCategories = () => {
  return (
    <div className="container-section ">
      <h5 className="headline">Order our best food options</h5>
      <div className="flex gap-4 md:gap-10 pt-1 px-1 overflow-x-auto scrollbar-hide">
        {groceryCategoriesArr.map((cat) => (
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
