import { useLoaderData } from "react-router-dom";
import numeral from 'numeral';
import { useEffect, useState } from "react";
import Recipe from "../Home/FeaturedRecipes/Recipe/Recipe";


const ChefRecipies = () => {
    const data = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    const { likes, id, name, number_of_recipes, bio, photo_url, years_of_experience } = data;
    useEffect(() => {
        fetch(`http://localhost:3000/recipies/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="container mx-auto">
            <h2 className=" text-center text-5xl p-5 mt-9 text-black font-bold mb-3 lg:text-6xl">{name}</h2>
            <div className="chef-baner">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="chef-pic h-screen p-4">
                        <img className=" mx-auto h-4/6 rounded-md" src={photo_url} alt="" />
                    </div>
                    <div className="chef-details grid p-4 text-black -mt-72 lg:mt-0  mx-auto w-5/6 first-letter:text-3xl">
                        <p className=" first-letter:text-3xl font-serif first-letter:font-bold">{bio}</p>
                        <div className=" mt-20 lg:-mt-40 mb-6">
                            <div className="stats shadow xl:px-20">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <div className="stat-title">Total Likes</div>
                                    <div className="stat-value text-primary">{numeral(likes).format('0a')}</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">Owner of <span className=" text-rose-300">{number_of_recipes}</span> Recipis in</div>
                                    <div className="stat-value text-secondary">{years_of_experience} Year</div>
                                    <div className="stat-desc">Years of Experience</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chef-recipes text-black lg:-mt-36">
                <h2 className="text-5xl font-bold my-20 px-5" >Recipes of {name}</h2>
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}>
                        <h3 className="text-3xl">ingredients</h3>
                        <ol className="list-disc ms-20">
                            {
                                recipe.ingredients.map((r, ndx) => <li key={ndx}>{r}</li>)
                            }
                        </ol>

                        <h2 className="text-2xl  mt-7">Coocking Methode:-</h2>
                        <p>{recipe.cooking_method}</p>

                    </Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipies;