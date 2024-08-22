import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.tsx";
import CallIcon from "@mui/icons-material/Call";

export const SignOut = () => {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => signOut(auth)}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser?.displayName}</h3>
      <CallIcon />
    </div>
  );
};
