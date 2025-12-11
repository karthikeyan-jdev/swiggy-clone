import Navbar from "../components/Navbar.tsx";
import HeaderBanners from "../components/HeaderBanners.tsx";

const Header = () => {
  return (
    <div className="bg-primary p-4">
      <Navbar />
      <HeaderBanners />
    </div>
  );
};

export default Header;
