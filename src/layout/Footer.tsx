import {
  FaApple,
  FaChevronDown,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { SiSwiggy } from "react-icons/si";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <div className="bg-[#F0F0F5] p-4 ">
      {/* logo */}
      <div className="space-y-2 my-5">
        <div className="flex items-center gap-2 ">
          <div className="bg-primary text-gray-300 p-0.5 rounded-md">
            <SiSwiggy size={22} />
          </div>
          <h1 className="text-xl font-bold text-primary">Swiggy</h1>
        </div>
        <div className="flex items-center">
          <MdOutlineCopyright />
          <p>{year} Swiiggy Limited</p>
        </div>
      </div>
      {/* footer grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="text-gray-600 text-[14px] space-y-2">
          <h4 className="text-[18px] text-black font-semibold">Company</h4>
          <p>About Us</p>
          <p>Swiggy Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>
        <div className="text-gray-600 text-[14px] space-y-2">
          <h4 className="text-[18px] text-black font-semibold">Contact Us</h4>
          <p>Help & Support</p>
          <p>Partner With Us </p>
          <p>Ride With Us</p>
        </div>
        <div className="text-gray-600 text-[14px] space-y-2">
          <h4 className="text-[18px] text-black font-semibold">Legal</h4>
          <p>Term & Condition</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className="text-gray-600 text-[14px] space-y-2">
          <h4 className="text-[18px] text-black font-semibold">
            Available in:
          </h4>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>delhi</p>
          <p>Mumbai</p>
          <p>pune</p>
          <div className="flex items-center gap-6 border p-0.5 w-fit rounded-md">
            <p>685 cities </p>
            <FaChevronDown className="mt-1" />
          </div>
        </div>
        <div className="text-gray-600 text-[14px] space-y-2">
          <h4 className="text-[18px] text-black font-semibold">
            Life at Swiggy
          </h4>
          <p>Explore With Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>
        </div>
        <div className="text-gray-600 text-[14px] space-y-3">
          <h4 className="text-[18px] text-black font-semibold">
            Socoial Links
          </h4>
          <div className="flex gap-1">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
      {/* download option */}
      <div className="mt-12 mb-4">
        <div className="border-t"></div>
        <p className="my-4 px-8 ">
          For better experience, download the Swiggy app now
        </p>
        <div className="grid grid-cols-2 px-8 ">
          {" "}
          <div className="flex w-[80%] mx-auto items-center gap-1 p-0.5 text-gray-200 bg-gray-800 rounded-lg">
            <FaApple size={32} className="m-1" />
            <div className="">
              <p className="text-[10px]">Download on the</p>
              <p>Apple Store</p>
            </div>
          </div>
          <div className="flex w-[80%] mx-auto items-center gap-1 p-0.5 text-gray-200 bg-gray-800 rounded-lg">
            <FaGooglePlay size={32} className="m-1" />
            <div className="">
              <p className="text-[10px]">GET IT ON</p>
              <p>Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
