import { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";



const Recipe = ({ recipe, children }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isVisible, setIsVisible] = useState(true);



    const handelAddFavorite = () => {
        setIsFavorite(!isFavorite)
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), 3000)
    }
    return (
        <div className="grid relative mb-10 grid-cols-1 gap-5 lg:grid-cols-2 lg:py-16 mt-4 shadow-lg rounded-xl ">
            <div className="rounded-xl  rounded-md overflow-hidden ">
                <img className="hover:scale-125 rounded-md transition-all z-0 mx-auto w-3/5 min-h-full  duration-1000" src={recipe.photo} alt="" />
                <div onClick={handelAddFavorite} className="absolute top-0 right-0">
                    {
                        <div className="tooltip tooltip-left z-50 " data-tip={!isFavorite ? "add to favorite" : "Remove from Favorite"}>
                            <button disabled={isFavorite} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    }
                    <div className={`toast toast-bottom  toast-end ${isVisible ? "invisible" : "visible"}`}>
                        {
                            isFavorite ?
                                <div className="alert alert-info">
                                    <span className="capitalize z-50">the recipe is added your favorite now</span>
                                </div> :
                                <div className="alert alert-info">
                                    <span className="capitalize z-50">the recipe is removed from your favorite.</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between mx-auto w-4/5">
                <div>
                    <h1 className="text-3xl font-bold"> {recipe.recipe_name}</h1>
                    <p className="my-3">Made by <span className="text-2xl "><i>{recipe.chef_name}</i></span></p>
                    <p className="first-letter:text-3xl first-letter:font-bold mb-4 line-clamp-4 md:line-clamp-none leading-7">{recipe.description}</p>
                </div>
                <div className="mb-8">
                    {
                        children
                    }
                </div>
                <div className="flex justify-between items-center">
                    <button className="btn btn-sm btn-info text-white">Cook Now</button>
                    <div className=" text-yellow-600 flex items-center justify-center">
                        <Rating
                            placeholderRating={recipe.rating}
                            emptySymbol={<FaRegStar />}
                            readonly
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <div className="ms-2">
                            {
                                recipe.rating
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;