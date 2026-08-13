import { use } from "react";
import EcoDecorIdeas from "../components/EcoDecorIdeas";
import GreenExperts from "../components/GreenExperts";
import Hero from "../components/Hero";
import PlantCareTips from "../components/PlantCareTips";
import TopRatedPlants from "../components/TopRatedPlants";
import { AuthContext } from "../context/AuthContext";
import { RingLoader } from "react-spinners";


const Home = () => {
    const {loading} = use(AuthContext);
     if (loading) {
       return (
         <div className="flex justify-center items-center min-h-[38vh]">
           <RingLoader color="#267442" />
         </div>
       );
     }
    return (
        <div>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
            <GreenExperts></GreenExperts>
            <EcoDecorIdeas></EcoDecorIdeas>
        </div>
    );
};

export default Home;