// import Button from "../components/ui/Button";

import Categories from "../components/FoodCategories";
import GroceryCategories from "../components/GroceryCategories";
import Restaurants from "../components/Restaurants";
import CityServicesList from "../components/CityServicesList";
import DownloadApp from "../components/DownloadApp";
import { foodServiceCities } from "../data/FoodServiceCities";
import { groceryServiceCities } from "../data/GroceryServiceCities";

const Home = () => {
  return (
    <div className="">
      <Categories />
      <GroceryCategories />
      <Restaurants />
      <DownloadApp />
      <CityServicesList
        prefix="Order food online in "
        headline={"Cities with food delivery"}
        cities={foodServiceCities}
      />
      <CityServicesList
        prefix="Order food online in "
        headline={"Cities with food grocery"}
        cities={groceryServiceCities}
      />
    </div>
  );
};

export default Home;

{
  /* <Button type={"primary"}>contact us</Button>
<Button type={"secondary"}>contact us</Button> */
}
