import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full lg:h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col items-center justify-center px-4 md:flex-row pt-28">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-12">
            I'am Senior UI Developer
          </h2>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
