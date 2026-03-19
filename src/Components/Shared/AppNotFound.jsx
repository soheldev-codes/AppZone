import React from "react";

import appErrorImage from "../../assets/App-Error.png";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="">
      <div className=" flex items-center flex-col justify-center py-20">
        <div>
          <img src={appErrorImage} alt="" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold pt-10">OPPS!! APP NOT FOUND</h2>
          <p>
            The App you are requesting is not found on our system. please try
            another apps
          </p>

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

export default AppNotFound;
