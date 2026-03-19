import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard/AppCard";
import AppNotFound from "../Components/Shared/AppNotFound";

const AllApps = () => {
  const appsData = useLoaderData();

  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (filteredApps.length === 0) {
    return <AppNotFound />;
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className=" container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 pt-10">
            Our All Applications
          </h1>
          <p className="text-gray-500 mt-2">
            Explore All Apps on the Market developed by us.
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-700 font-medium">
            ({filteredApps.length}) Apps Found
          </p>

          <input
            type="text"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-md w-full md:w-64 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
