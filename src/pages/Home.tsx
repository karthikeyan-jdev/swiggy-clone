// import Button from "../components/ui/Button";

import Categories from "../components/FoodCategories";
import GroceryCategories from "../components/GroceryCategories";
import Restaurants from "../components/Restaurants";
import CityServicesList from "../components/CityServicesList";
import { FoodServiceCities, GroceryServiceCities } from "../data/LocalArr";

const Home = () => {
  return (
    <div className="">
      <Categories />
      <GroceryCategories />
      <Restaurants />
      <CityServicesList
        prefix="Order food online in "
        headline={"Cities with food delivery"}
        cities={FoodServiceCities}
      />
      <CityServicesList
        prefix="Order food online in "
        headline={"Cities with food grocery"}
        cities={GroceryServiceCities}
      />
    </div>
  );
};

export default Home;

{
  /* <Button type={"primary"}>contact us</Button>
<Button type={"secondary"}>contact us</Button> */
}
