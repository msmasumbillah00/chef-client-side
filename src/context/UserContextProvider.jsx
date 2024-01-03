import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.init';




export const UserContext = createContext("");


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState("");



    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        });
        return () => {
            unsubscribe()
        };

    }, [])



    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const singInWithGitHub = () => {
        return signInWithPopup(auth, gitProvider)
    }
    const singInWithEmailPAss = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const createUserWithEmailPAss = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const updateProfileDetails = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url,

        })
    }


    const contextInfo = {
        singInWithGoogle,
        singInWithGitHub,
        singInWithEmailPAss,
        createUserWithEmailPAss,
        updateProfileDetails,
        user,
        setUser,
        auth,

    }

    return (
        <UserContext.Provider value={contextInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;