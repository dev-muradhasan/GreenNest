import EcoDecorIdeas from "../components/EcoDecorIdeas";
import GreenExperts from "../components/GreenExperts";
import Hero from "../components/Hero";
import PlantCareTips from "../components/PlantCareTips";
import TopRatedPlants from "../components/TopRatedPlants";


const Home = () => {
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