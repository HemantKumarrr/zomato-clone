import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col justify-between bg-red-500 px-[0.8rem] sm:px-[10rem] sm:pt-[1rem] pt-[1.6rem] pb-[7.5rem] w-full h-[60vh] bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-cover bg-center">
        <div className="hidden">
          <MdMenu className="text-3xl text-white" />
        </div>
        <div className="text-white flex justify-between items-center">
          <h1 className="shadow-lg text-xl flex items-center justify-center gap-2 cursor-pointer">
            <IoLogoGooglePlaystore />
            Get the App
          </h1>
          <ul className="flex justify-center gap-16 text-xl font-light items-center">
            <li>
              <Link to="/" className="shadow-lg">
                Invester Relations
              </Link>
            </li>
            <li>
              <Link to="/" className="shadow-lg">
                Add restaurant
              </Link>
            </li>
            <li>
              <Link to="/" className="shadow-lg">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="shadow-lg">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-7 text-white ">
          <h1 className="flex justify-center">
            <img className="w-[30%]" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato_image" />
          </h1>
          <p className="text-semibold text-4xl">
            Discover the best food & drinks in Delhi NCR
          </p>
          <div className="w-[65%] flex items-center justify-center">
            <div className="bg-white h-full flex items-center justify-center px-2 rounded-l-md">
              <HiLocationMarker className="text-2xl font-bold text-red-400" />
            </div>
            <div className="h-full">
              <input
                type="text"
                className="w-full h-full pl-2 outline-none text-black"
                placeholder="Block B, Jaypee Greens,"
              />
            </div>
            <div className="bg-white px-1 h-full flex items-center justify-center">
              <MdArrowDropDown className="border-r-2 text-3xl text-gray-700" />
            </div>
            <CiSearch className="bg-white text-gray-500 cursor-pointer text-bold text-5xl p-1 " />
            <input
              className="w-full rounded-r-md h-[3rem] px-2 outline-none text-black"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
