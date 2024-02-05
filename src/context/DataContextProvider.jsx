import React, { useEffect, useState } from 'react';
import { createContext } from 'react';


export const DataContext = createContext("");


const DataContextProvider = ({ children }) => {
    const [favoriteRecipies, setFavoriteRecipies] = useState([]);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("FavoriteRecipies")) || favoriteRecipies;
        setFavoriteRecipies(storedData)

    }, [])


    const dbInfo = {
        favoriteRecipies,
        setFavoriteRecipies,
    }
    return (
        <DataContext.Provider value={dbInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;