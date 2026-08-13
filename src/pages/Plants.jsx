import { use } from "react";
import PlantCard from "../components/PlantCard";
import MyContainer from "../components/MyContainer";


const plantsPromise = fetch('/plantsData.json').then(res=>res.json());

const Plants = () => {

    const plantsData = use(plantsPromise)

    return (
      <MyContainer className="pt-14 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#267442]">
            Explore Our Green Collection
          </h2>
          <p className="text-gray-500 mt-2">
            Discover beautiful indoor plants for every corner of your home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plantsData.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
        <section className="py-16 bg-[#eef8ed] text-center mt-14 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Let’s Grow Something Beautiful Together
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Bring nature closer to your home with beautiful indoor plants and
            expert care.
          </p>
        </section>
      </MyContainer>
    );
};

export default Plants;