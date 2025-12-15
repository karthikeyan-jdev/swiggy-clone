import Navbar from "../components/Navbar";
import HeaderBanners from "../components/HeaderBanners";

const Header = () => {
  return (
    <div className="bg-primary h-fit pb-5 md:pb-8">
      <Navbar />
      <HeaderBanners />
    </div>
  );
};

export default Header;
