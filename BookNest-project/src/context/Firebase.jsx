import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

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
const firestore=getFirestore(FireBaseApp);
const storage = getStorage(FireBaseApp);




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

  console.log('user', user);

  const handleCreateNewListing = async (name, isbn, image, price) => {
   
    const imageRef = ref(storage, `uploads/images/${Date.now}-${image.name}`);
    const uploadResult= await uploadBytes(imageRef, image);
    return await addDoc(collection(firestore, 'books'), { name, isbn, imageURL:uploadResult.ref.fullPath, price, user: user.uid, userEmail: user.email, displayName: user.displayName , photoURL: user.photoURL });
  }
  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider value={{ signupUser, signinUser, signinWithGoogle, isLoggedIn, user , handleCreateNewListing }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
