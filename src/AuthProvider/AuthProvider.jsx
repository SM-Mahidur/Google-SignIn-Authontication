import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firbase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log("observing current user catch", currentUser);
            setLoading(false)
        });
        return() =>{
            unSubscribe();
        }
    } ,[])

    const signinUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);

    }

    // observe auth state change 

    const authInfo = {user, 
        createUser, 
        signinUser, 
        logOut,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}


/**
 * 1. Create Conext and exporot it 
 * 2. set provider with value
 * 3. use the authprovide main.jsx file 
 * 4. access children in the authprovider 
 */