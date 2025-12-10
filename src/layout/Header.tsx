import React from "react";
import Navbar from "../components/Navbar";
import HeaderBanners from "../components/HeaderBanners";

const Header = () => {
  return (
    <div className="bg-primary p-4">
      <Navbar />
      <HeaderBanners />
    </div>
  );
};

export default Header;
