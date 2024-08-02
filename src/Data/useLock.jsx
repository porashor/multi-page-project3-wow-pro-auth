import React from 'react'
import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const useLock = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
  
    const login = async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Error logging in:", error.message);
      }
    };
  
    const logout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    };
  
    return { user, login, logout };
  return {}
}

export default useLock
