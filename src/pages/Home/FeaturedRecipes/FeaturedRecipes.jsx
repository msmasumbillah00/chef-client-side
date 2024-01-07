import { useEffect, useState } from "react";

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
            <div className="grid  text-black grid-cols-1 gap-10 fetured-recipies scroll-container overflow-scroll overflow-x-hidden">
                {
                    feturedRecipies.map(f => <div key={f.id} className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:py-16 mt-4 shadow-lg rounded-xl">
                        <div className="rounded-xl rounded-md overflow-hidden ">
                            <img className="hover:scale-125 rounded-md transition-all mx-auto w-3/5 min-h-full  duration-1000" src={f.photo} alt="" />
                        </div>
                        <div className="p-4 flex flex-col justify-between mx-auto w-4/5">
                            <div>
                                <h1 className="text-3xl font-bold"> {f.recipi_name}</h1>
                                <p className="my-3">Made by <span className="text-2xl "><i>{f.chef_name}</i></span></p>
                                <p className="first-letter:text-3xl mb-10 line-clamp-4 md:line-clamp-none leading-7">{f.discription}</p>
                            </div>
                            <div className="">
                                <button className="btn btn-sm btn-info text-white">Cook Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedRecipes;