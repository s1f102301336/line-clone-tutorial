import { Button } from "@mui/material";
import React from "react";
// import firebase from "firebase/compat/app";
import { auth } from "../firebase.tsx";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    //Googleの認証プロバイダを使えるようになる
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  );
};
