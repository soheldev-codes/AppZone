import React from "react";

import errorImage from "../../assets/error-404.png";
import { Link } from "react-router";
import { IoArrowBack } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="">
      <div className=" flex items-center flex-col justify-center py-20">
        <div>
          <img src={errorImage} alt="" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-5xl font-semibold">Oops, page not found!</h2>
          <p>The page you are looking for is not available.</p>

          <Link
            to="/"
            className="gradient-btn px-4 py-3 rounded font-semibold flex items-center gap-2 hover:opacity-90 transition-all w-max mx-auto"
          >
            <IoArrowBack />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
