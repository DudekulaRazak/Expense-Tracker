import React, { useState } from "react";
import { auth, googleAuth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../useGetUserInfo";

const Login = () => {
  const navigate = useNavigate();
  const [isIn, setIn] = useState(false);

  const signInWithGoogle = async () => {
    const userInfoFromGoogle = await signInWithPopup(auth, googleAuth);
    const user = {
      userID: userInfoFromGoogle.user.uid,
      name: userInfoFromGoogle.user.displayName,
      profilePhoto: userInfoFromGoogle.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(user));
    navigate("/homepage");
  };
  const handleMouseIn = () => {
    setIn(true);
  }
  const handleMouseOut = () => {
    setIn(false);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#252422",
      }}
    >
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          color: "white",
        }}
      >LOGIN USING </p>
      <img
        style={{
          cursor: "pointer",
          margin: "10px",
          width: "50px",
          transform: isIn && "scale(1.5)",
          transition: "0.2s"
        }}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        onClick={signInWithGoogle} src={require("../google.png")}
      />
    </div>
  );
};

export default Login;
