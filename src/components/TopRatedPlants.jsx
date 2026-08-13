import { use } from "react";
import AllPlants from "./AllPlants";
import MyContainer from "./MyContainer";

const plantPromise = fetch('/plantsData.json').then(res=>res.json());

const TopRatedPlants = () => {
     const plant = use(plantPromise)
     const plants = plant.slice(0,4)

     return (
       <MyContainer className="">
         <AllPlants plants={plants}></AllPlants>
       </MyContainer>
     );
};

export default TopRatedPlants;