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
    <div className="bg-[#F0F0F5]">
      <div className=" container-section mt-8 mb-16 p-4 ">
        {/*grid - footer */}
        <div className=" grid grid-cols-2  gap-4 md:grid-cols-5">
          {/* logo */}
          <div className="space-y-2 my-5 col-span-2 md:col-span-1 md:row-span-2">
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
          {/* grid links */}
          <div className="text-gray-600 text-[14px] space-y-2 md:row-span-2">
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
            <div className="flex items-center gap-6 border p-px px-1 w-fit rounded-md">
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
        <div className="border-t mt-12 sm:flex sm:justify-center gap-2 md:gap-4 sm:p-4 lg:p-5">
          <p className="p-4 text-[14px] sm:text-[16px] font-semibold text-gray-950 text-center sm:min-w-max">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex gap-2.5 ">
            <div className="flex w-[120px] md:w-[150px]  mx-auto items-center gap-1 p-2 text-gray-200 bg-gray-800 rounded-lg">
              <FaApple className="min-w-max h-7 md:h-9" />
              <div className="">
                <p className="min-w-max text-[8px] md:text-[10px]">
                  Download on the
                </p>
                <p className="min-w-max text-[11px] md:text-[15px]">
                  Apple Store
                </p>
              </div>
            </div>
            <div className="flex w-[120px] md:w-[150px]  mx-auto items-center gap-1 p-2 text-gray-200 bg-gray-800 rounded-lg">
              <FaGooglePlay className="min-w-max h-7 md:h-9" />
              <div className="">
                <p className="min-w-max text-[8px] md:text-[10px]">GET IT ON</p>
                <p className="min-w-max text-[11px] md:text-[15px]">
                  Google Play
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
