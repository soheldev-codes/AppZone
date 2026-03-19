import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { getInstalledApps, removeApp } from "../DB/localStorage";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

export default function Installation() {
  const allApps = useLoaderData();

  //  localStorage get to id
  const [installedIds, setInstalledIds] = useState(getInstalledApps());
  const [sortType, setSortType] = useState("");

  //  filter installed apps
  let apps = allApps.filter((app) => installedIds.includes(app.id));

  //  sorting apply
  if (sortType === "low") {
    apps = [...apps].sort((a, b) => a.downloads - b.downloads);
  } else if (sortType === "high") {
    apps = [...apps].sort((a, b) => b.downloads - a.downloads);
  }

  //  sort handler
  const handleSort = (type) => {
    setSortType(type);
  };

  //  uninstall UI + localStorage sync
  const handleUninstall = (id) => {
    const updated = installedIds.filter((appId) => appId !== id);
    console.log(updated);
    setInstalledIds(updated);
    removeApp(id);

    toast.success("App Uninstalled");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold pt-10">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">{apps.length} Apps Found</h2>

        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="">Sort By</option>
          <option value="low">Low To High</option>
          <option value="high">High To Low</option>
        </select>
      </div>

      {/* Empty State */}
      {apps.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No Installed Apps Found 😢
        </p>
      )}

      {/* Cards */}
      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-18 h-18 p-2 bg-gray-300 rounded">
                <img src={app.image} alt="" />
              </div>

              <div>
                <h3 className="font-semibold">{app.title}</h3>

                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1 text-green-600">
                    <IoMdDownload /> {app.downloads / 1000000}M
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <FaStar /> {app.rating}
                  </span>

                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
