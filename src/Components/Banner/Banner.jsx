import React from "react";
import BannerImage from "../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 pt-16 ">
        <div className=" flex justify-center flex-col items-center ">
          <div className="  ">
            <h1 className="text-7xl font-bold  mx-auto text-center">
              We Build <br />{" "}
              <span className="gradient-text font-extrabold">Productive </span>
              Apps
            </h1>
            <p className="py-6 w-2/3 mx-auto text-center ">
              “Discover trending apps and explore new possibilities. Install
              your favorites in seconds and manage everything with ease. All
              your apps, all in one place — AppZone.”
            </p>
            <div className="flex justify-center gap-4 mb-10">
              <a
                target="_blank"
                href="https://play.google.com/store/apps?hl=en"
              >
                <button className="btn">
                  <FaGooglePlay className="text-2xl" /> Google Play
                </button>
              </a>
              <a target="_blank" href="https://www.apple.com/app-store/">
                <button className="btn">
                  <IoLogoAppleAppstore className="text-2xl" /> App Store
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={BannerImage} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
