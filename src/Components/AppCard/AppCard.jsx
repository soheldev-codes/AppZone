import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/details/${app.id}`}>
      <div
        key={app.id}
        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
      >
        <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
          <img
            src={app.image}
            alt={app.title}
            className="w-16 h-16 object-contain"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-800">{app.title}</h2>
        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded flex items-center gap-1">
            <FaDownload /> {Math.floor(app.downloads / 1000000)}M
          </span>
          <span className="text-orange-500 text-xs bg-orange-100 px-2 py-1 rounded flex items-center gap-1">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
