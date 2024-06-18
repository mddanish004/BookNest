import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAS5-lNKdYRlIWOBF5AwIpdh6ICDtG5FuY",
  authDomain: "booknest-bb24a.firebaseapp.com",
  projectId: "booknest-bb24a",
  storageBucket: "booknest-bb24a.appspot.com",
  messagingSenderId: "838389577140",
  appId: "1:838389577140:web:188fa3577d3b4d3101eee1"
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const FireBaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FireBaseApp);
const GoogleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      setUser(user ? user : null);
    });
  }, []);

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const signinWithGoogle = () => {
    return signInWithPopup(FirebaseAuth, GoogleProvider);
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider value={{ signupUser, signinUser, signinWithGoogle, isLoggedIn, user }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
