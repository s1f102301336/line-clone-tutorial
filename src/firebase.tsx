import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//初期化の際はfirebase/compat/appではなくinitializeAppなどでimport
// import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4XO7aWd9tHCKbJJRUZvawsVzkfsc48Vc",
  authDomain: "line-clone-tutorial-21a36.firebaseapp.com",
  projectId: "line-clone-tutorial-21a36",
  storageBucket: "line-clone-tutorial-21a36.appspot.com",
  messagingSenderId: "572761332259",
  appId: "1:572761332259:web:dadb853cd48ef41761af96",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //database情報

const auth = getAuth(app); //人を認証する情報を扱えるようにする
//今の認証状態

export { db, auth };
