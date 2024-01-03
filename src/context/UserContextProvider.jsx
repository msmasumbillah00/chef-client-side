import { createContext } from "react";



export const UserContext = createContext("");


const UserContextProvider = ({ children }) => {

    const contextInfo = {
        name: "Md Masum Billah",
    }

    return (
        <UserContext.Provider value={contextInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;