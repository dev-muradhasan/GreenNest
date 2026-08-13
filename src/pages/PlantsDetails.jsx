import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyContainer from "../components/MyContainer";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";


const PlantsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const singlePlant = data.find(d=>d.plantId === Number(id));
    const {
      plantId,
      plantName,
      category,
      price,
      rating,
      availableStock,
      careLevel,
      description,
      image,
      providerName,
    } = singlePlant;

    const handleOnSubmit =(e)=>{
        e.preventDefault();
    };

    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <MyContainer className="flex-1">
          <div className="bg-white py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                {/* Plant Image */}
                <div className="w-full">
                  <div className="bg-[#d4e8d5] rounded-2xl overflow-hidden h-100 md:h-125 lg:h-137.5">
                    <img
                      src={image}
                      alt={plantName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to={"/plants"}
                    className="btn bg-[#267442] text-white mt-8"
                  >
                    <span className="mr-1">Back to All Plants</span>{" "}
                    <FaArrowLeftLong />
                  </Link>
                </div>

                {/* Plant Information */}
                <div className="flex flex-col">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="bg-[#edf8ef] text-[#267442] px-4 py-2 rounded-full text-sm font-medium">
                      {category}
                    </span>

                    <span className="bg-[#edf8ef] text-[#267442] px-4 py-2 rounded-full text-sm font-medium">
                      {careLevel} Care
                    </span>
                  </div>

                  {/* Plant Name */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {plantName}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mt-5">
                    <div className="text-orange-400 text-xl tracking-tight flex ">
                      {[...Array(5)].map((_, index) => (
                        <FaStar size={17} key={index} />
                      ))}
                    </div>

                    <span className="text-gray-700 font-medium">
                      {rating} rating
                    </span>
                  </div>

                  {/* Price */}
                  <h2 className="text-4xl font-bold text-[#267442] mt-6">
                    ${price}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-7 mt-8">
                    {description}
                  </p>

                  {/* Plant Information */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div>
                      <p className="text-gray-500 text-sm">Stock</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {availableStock} available
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Care Level</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {careLevel}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Provider</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {providerName}
                      </p>
                    </div>
                  </div>

                  {/* Consultation Form */}
                  <div className="bg-[#edf8ef] rounded-2xl p-6 md:p-7 mt-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                      Book a Consultation
                    </h2>

                    {/* Success Message - Design Only */}
                    {/* <div className="bg-[#dff2e2] text-[#267442] rounded-lg px-4 py-3 mb-5 text-sm font-medium">
                      ✓ Consultation booked! We'll be in touch shortly.
                    </div> */}

                    <form onSubmit={handleOnSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Name
                        </label>

                        <input
                          type="text"
                          placeholder="Your name"
                          className="input input-bordered w-full bg-white"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Email
                        </label>

                        <input
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="input input-bordered w-full bg-white"
                        />
                      </div>

                      {/* Button */}
                      <button
                        type="submit"
                        className="btn w-full bg-[#267442] hover:bg-[#1e6035] border-none text-white text-base font-semibold mt-1"
                      >
                        Book Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default PlantsDetails;