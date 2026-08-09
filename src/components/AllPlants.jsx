import PlantCard from "./PlantCard";


const AllPlants = ({plants}) => {
    return (
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#1F2937]">
            Top Rated Indoor Plants
          </h2>

          <p className="text-gray-500 mt-2">Loved by our GreenNest community</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </section>
    );
};

export default AllPlants;