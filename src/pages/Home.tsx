// import Button from "../components/ui/Button";

import Categories from "../components/FoodCategories";
import GroceryCategories from "../components/GroceryCategories";
import Restaurants from "../components/Restaurants";
import CityServicesList from "../components/CityServicesList";
import DownloadApp from "../components/DownloadApp";
import { getFoodServiceCities } from "../data/FoodServiceCities";
import { getGroceryServiceCities } from "../data/GroceryServiceCities";
import useLocalApi from "../hooks/useLocalApi";
import SkeletonCardCity from "../components/SkeletonCardCity";

const Home = () => {
  const { data } = useLocalApi(getFoodServiceCities);
  const { data: groceryData } = useLocalApi(
    getGroceryServiceCities,
  );
  return (
    <div className="">
      <Categories />
      <GroceryCategories />
      <Restaurants />
      <DownloadApp />
      {data ? (
        <CityServicesList label={"food"} data={data} />
      ) : (
        <SkeletonCardCity label={"food"} />
      )}
      {groceryData ? (
        <CityServicesList label={"grocery"} data={groceryData} />
      ) : (
        <SkeletonCardCity label={"grocery"} />
      )}
    </div>
  );
};

export default Home;

{
  /* <Button type={"primary"}>contact us</Button>
<Button type={"secondary"}>contact us</Button> */
}
