import { use } from "react";
import AllPlants from "./AllPlants";

const plantPromise = fetch('/plantsData.json').then(res=>res.json());

const TopRatedPlants = () => {
     const plants = use(plantPromise)

     return (
       <div className="">
         <AllPlants plants={plants}></AllPlants>
       </div>
     );
};

export default TopRatedPlants;