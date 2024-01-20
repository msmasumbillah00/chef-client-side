import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";

const FeaturedRecipes = () => {
    const [feturedRecipies, setFeturedRecipies] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/featured_recipies")
            .then(res => res.json())
            .then(data => setFeturedRecipies(data))
    }, [])
    return (
        <div className="container  mx-auto p-4">
            <h1 className=" text-4xl font-bold text-black my-7 lg:text-6xl ">Featured Recipies</h1>
            <div className="grid  text-black grid-cols-1 gap-10 fetured-recipies scroll-container overflow-scroll">
                {
                    feturedRecipies.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default FeaturedRecipes;