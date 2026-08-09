import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, category, careLevel, price, rating, image } =
    plant;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
      <figure className="p-4">
        <img
          src={image}
          alt={plantName}
          className="h-48 w-full object-cover rounded-xl"
        />
      </figure>

      <div className="px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-[#1F2937]">{plantName}</h3>

            <p className="text-sm text-gray-500">
              {category} • {careLevel}
            </p>
          </div>

          <div className="flex items-center gap-1 text-amber-500">
            <FaStar size={12} />
            <span className="text-sm font-semibold text-gray-700">
              {rating}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-bold text-green-700">${price}</p>

          <Link
            to={`/plant/${plantId}`}
            className="btn btn-sm bg-green-700 hover:bg-green-800 text-white border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;