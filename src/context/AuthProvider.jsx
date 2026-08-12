import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase";


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (displayName, photoURL) => {
       setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL
      });
    };

    const sendVerificationEmail = ()=>{
      setLoading(true)
      return sendEmailVerification(auth.currentUser)
    }

    const signInUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
      return signInWithPopup(auth, googleProvider);
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
      updateUserProfile,
      sendVerificationEmail,
      googleSignIn,
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