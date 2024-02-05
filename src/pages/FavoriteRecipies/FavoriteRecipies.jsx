import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContextProvider";

const FavoriteRecipies = () => {
    const { favoriteRecipies, setFavoriteRecipies } = useContext(DataContext);

    const [displayFavoriteRecipies, setDisplayedFavoriteRecipies] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/recipies`)
            .then(res => res.json()
                .then(data => {
                    setDisplayedFavoriteRecipies(data.filter(item => favoriteRecipies.includes(item.id)))
                }))
    }, [favoriteRecipies]);

    const handelRemoveItems = (data) => {
        setFavoriteRecipies(favoriteRecipies.filter(item => item !== data))
        localStorage.setItem("FavoriteRecipies", JSON.stringify(favoriteRecipies));

    }
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-5xl my-5 text-center font-bold mb-20">Favorite Recipies</h1>

                {/* Cart Items */}
                <div className="">
                    {/* Sample Cart Item */}
                    {
                        displayFavoriteRecipies.map(recipie => {
                            return <div key={recipie.id}>
                                <div className="bg-white mb-3 p-4 shadow-md rounded-md flex items-center">
                                    <div>
                                        <img
                                            src={recipie.photo}
                                            alt="Product"
                                            className="w-full h-32 object-cover mb-4"
                                        />
                                    </div>
                                    <div className="ms-5">
                                        <h2 className="text-lg font-semibold mb-2">{recipie.recipe_name}</h2>
                                        <p className="text-gray-600 mb-2">Price: $19.99</p>
                                        <p className="text-gray-600 mb-2">Made By: {recipie.chef_name}</p>
                                    </div>
                                    <div className="ms-auto">
                                        <button onClick={() => handelRemoveItems(recipie.id)} className="text-red-500 hover:underline">Remove</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {/* Repeat the above structure for each cart item */}
                </div>


            </div>
        </div>
    );
};

export default FavoriteRecipies;