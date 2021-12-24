import React from "react";
import "../css/Login.css";
import { auth, provider } from "../FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  //google sign in
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //navigate to home
      navigate("/createpost");
    });
  };
  return (
    <>
      <section className="login__container">
        <h3>Sign In</h3>
        <button
          type="button"
          className="login-with-google-btn"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </section>
    </>
  );
}

export default Login;
