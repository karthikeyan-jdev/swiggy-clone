import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { SiSwiggy } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";

const MainLayout = () => {
  return (
    <div className="relative">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <div className="fixed bottom-0 flex justify-around w-full mx-auto bg-gray-50">
        <button className="p-2 flex flex-col gap-0.5 items-center">
          <SiSwiggy size={20} className="text-gray-500" />
          <p className="text-[12px]">SWIGGY</p>{" "}
        </button>
        <button className="p-2 flex flex-col gap-0.5 items-center">
          <IoIosSearch size={20} className="text-gray-500" />
          <p className="text-[12px]">SEARCH</p>{" "}
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
