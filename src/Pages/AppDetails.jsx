import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { getInstalledApps, saveAppDB } from "../DB/localStorage";
import toast from "react-hot-toast";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiDownload } from "react-icons/fi";
import { MdRateReview } from "react-icons/md";

export default function AppDetails() {
  const appsData = useLoaderData();
  const { id } = useParams();

  const app = appsData.find((item) => item.id === parseInt(id));

  const [installed, setInstalled] = useState(() => {
    const apps = getInstalledApps();
    return apps.some((a) => a == id);
  });

  const handleInstall = () => {
    saveAppDB(app.id);
    setInstalled(true);
    toast.success("App Installed Successfully");
  };

  if (!app) return <p>No App Found</p>;

  const sortedRatings = [...app.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name),
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Top Section */}
      <div className="flex gap-6 border-b pb-6">
        {/* Image */}
        <div className="w-48 h-48 p-2 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-gray-500 text-sm mt-1">
            Developed by{" "}
            <span className="text-blue-500">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-4">
            <div className="flex flex-col items-center gap-2">
              <span>
                <FiDownload className="text-2xl text-green-600" />
              </span>
              <p className=" text-green-600">Downloads</p>
              <h3 className="font-extrabold text-2xl">
                {app.downloads / 1000000}M
              </h3>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span>
                <FaStar className="text-2xl  text-orange-500" />
              </span>
              <p className=" text-orange-500">Average Ratings</p>
              <h3 className="font-extrabold text-2xl">{app.ratingAvg}</h3>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span>
                <MdRateReview className="text-2xl  text-purple-500" />
              </span>
              <p className="text-purple-500">Total Reviews</p>
              <h3 className="font-extrabold text-2xl ">
                {app.reviews / 1000}K
              </h3>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-5 py-2 rounded cursor-pointer text-white ${
              installed ? "bg-gray-400" : "bg-green-500"
            }`}
          >
            {installed ? "Installed" : `Install (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mt-6 border-b pb-6">
        <h2 className="font-semibold mb-4">Ratings</h2>

        <div className="w-full h-64 min-w-0">
          <ResponsiveContainer width="100%" height={256}>
            <BarChart data={sortedRatings} layout="vertical">
              {/* Numbers */}
              <XAxis type="number" />

              {/* Categories */}
              <YAxis dataKey="name" type="category" />

              <Tooltip contentStyle={{ borderRadius: "8px", border: "none" }} />

              <Bar dataKey="count" fill="#f97316" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}
