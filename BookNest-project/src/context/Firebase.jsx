import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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


const FireBaseApp= initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    );
}   