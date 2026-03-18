import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const initialApps = [
  {
    id: 1,
    name: "Forest: Focus For Productivity",
    downloads: 9000000,
    rating: 4,
    size: 248,
  },
  {
    id: 2,
    name: "Forest: Focus For Productivity",
    downloads: 9000000,
    rating: 5,
    size: 258,
  },
  {
    id: 3,
    name: "Forest: Focus For Productivity",
    downloads: 9000000,
    rating: 3,
    size: 228,
  },
  {
    id: 4,
    name: "Forest: Focus For Productivity",
    downloads: 9000000,
    rating: 1,
    size: 528,
  },
];

export default function Installation() {
  const [apps, setApps] = useState(initialApps);
  const [sortType, setSortType] = useState("");

  // 🔹 Sort Function
  const handleSort = (type) => {
    setSortType(type);

    let sorted = [...apps];

    if (type === "size") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (type === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setApps(sorted);
    alert("done shorted");
  };

  // 🔹 Uninstall Function
  const handleUninstall = (id) => {
    const remaining = apps.filter((app) => app.id !== id);
    setApps(remaining);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
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
          <option value="size">Sort By Size</option>
          <option value="rating">Sort By Rating</option>
        </select>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-300 rounded"></div>

              <div>
                <h3 className="font-semibold">{app.name}</h3>

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
