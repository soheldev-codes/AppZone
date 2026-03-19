import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router";

const app = {
  id: 12,
  image: "https://i.ibb.co/app12.png",
  title: "TaskHero",
  companyName: "HeroTech",
  description: "Complete tasks like a hero with productivity tools.",
  size: 150,
  reviews: 11000,
  ratingAvg: 4.3,
  downloads: 1700000,
  ratings: [
    { name: "1 star", count: 300 },
    { name: "2 star", count: 600 },
    { name: "3 star", count: 1400 },
    { name: "4 star", count: 3500 },
    { name: "5 star", count: 5200 },
  ],
};

export default function AppDetails() {
  const id = useParams();
  console.log(id);

  if (!app) return <p>No App Found</p>;

  const maxRating = Math.max(...app.ratings.map((r) => r.count));

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Top Section */}
      <div className="flex gap-6 border-b pb-6">
        {/* Image */}
        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
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
          <div className="flex gap-8 mt-4">
            <div>
              <p className="flex items-center gap-1 text-green-600">
                <IoMdDownload /> Downloads
              </p>
              <h3 className="font-semibold text-lg">
                {app.downloads / 1000000}M
              </h3>
            </div>

            <div>
              <p className="flex items-center gap-1 text-orange-500">
                <FaStar /> Average Ratings
              </p>
              <h3 className="font-semibold text-lg">{app.ratingAvg}</h3>
            </div>

            <div>
              <p className="text-purple-500">Total Reviews</p>
              <h3 className="font-semibold text-lg">{app.reviews / 1000}K</h3>
            </div>
          </div>

          {/* Install Button */}
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mt-6 border-b pb-6">
        <h2 className="font-semibold mb-4">Ratings</h2>

        <div className="space-y-3">
          {app.ratings
            .slice()
            .reverse()
            .map((rating, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-12 text-sm text-gray-600">
                  {rating.name}
                </span>

                <div className="flex-1 bg-gray-200 h-3 rounded">
                  <div
                    className="bg-orange-500 h-3 rounded"
                    style={{
                      width: `${(rating.count / maxRating) * 100}%`,
                    }}
                  ></div>
                </div>

                <span className="text-sm text-gray-500 w-12 text-right">
                  {rating.count}
                </span>
              </div>
            ))}
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
