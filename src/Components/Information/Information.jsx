import React from "react";

const Information = () => {
  return (
    <div className="gradient-bg py-20">
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-5xl text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className=" md:flex justify-center sm:gap-20 mt-10  ">
          <div className=" text-center  space-y-4 px-6 py-2">
            <div className="text-xs opacity-80">Total Downloads</div>
            <div className="text-5xl font-extrabold">29.6M</div>
            <div className="text-xs opacity-80">21% more than last month</div>
          </div>
          <div className=" text-center  space-y-4 px-6 py-2">
            <div className="text-xs opacity-80">Total Reviews</div>
            <div className="text-5xl font-extrabold">906K</div>
            <div className="text-xs opacity-80">46% more than last month</div>
          </div>
          <div className=" text-center  space-y-4 px-6 py-2">
            <div className="text-xs opacity-80">Active Apps</div>
            <div className="text-5xl font-extrabold">132+</div>
            <div className="text-xs opacity-80">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
