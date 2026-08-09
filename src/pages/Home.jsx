import Hero from "../components/Hero";
import PlantCareTips from "../components/PlantCareTips";
import TopRatedPlants from "../components/TopRatedPlants";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
        </div>
    );
};

export default Home;