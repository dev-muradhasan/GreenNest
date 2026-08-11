import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser =()=>{
      return signOut(auth);
    }

    const userInfo = {
      user,
      setUser,
      createUser,
      signInUser,
      loading,
      setLoading,
      signOutUser,
    };

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
      })
      return ()=>{
        unsubscribe();
      }
    },[])

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;