// import Button from "../components/ui/Button";

import Categories from "../components/FoodCategories";
import GroceryCategories from "../components/GroceryCategories";
import Restaurants from "../components/Restaurants";
import CityServicesList from "../components/CityServicesList";
import { FoodServiceCities, GroceryServiceCities } from "../data/LocalArr";

const Home = () => {
  return (
    <>
      <Categories />
      <GroceryCategories />
      <Restaurants />
      <CityServicesList
        headline={"Cities with food delivery"}
        cities={FoodServiceCities}
      />
      <CityServicesList
        headline={"Cities with food grocery"}
        cities={GroceryServiceCities}
      />
    </>
  );
};

export default Home;

{
  /* <Button type={"primary"}>contact us</Button>
<Button type={"secondary"}>contact us</Button> */
}
