import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.tsx";

export const SignOut = () => {
  return (
    <div>
      <Button onClick={() => signOut(auth)}>サインアウト</Button>
    </div>
  );
};
