import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";
import { AiFillAppstore } from "react-icons/ai";

const TreandingApp = () => {
  const appsData = useLoaderData();

  const apps = appsData.slice(0, 8);
  return (
    <div className="container mx-auto mb-10">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 pt-10">
          Our All Applications
        </h1>
        <p className="text-gray-500 mt-2">
          Explore All Apps on the Market developed by us.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/apps"
          className="gradient-btn  px-4 py-3 rounded font-semibold flex items-center gap-2 hover:opacity-90 transition-all w-max mx-auto"
        >
          <AiFillAppstore />
          All Apps
        </Link>
      </div>
    </div>
  );
};

export default TreandingApp;
