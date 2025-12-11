import { GroceryCategoriesArr } from "../data/LocalArr";

const GroceryCategories = () => {
  return (
    <div className="px-4 mt-2 ">
      <h5 className="font-bold text-[19px] text-gray-700 pyf-3">
        Order our best food options
      </h5>
      <div className="flex gap-4 md:gap-10 pt-3 px-1 overflow-x-auto scrollbar-hide">
        {GroceryCategoriesArr.map((cat) => (
          <div key={cat.id} >
            <div className="w-[100px]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-[12px] text-center mt-0.5">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryCategories;
