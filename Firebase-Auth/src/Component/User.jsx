import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Signed Up Successfully"))
      .catch((error) => alert(error.message));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) => alert(error.message));
  };

  return (
    <div className="signup-container">
      <h1 className="form-title">Create an Account</h1>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-outline-primary me-5" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <button className="btn  btn-outline-success" onClick={signupUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default User;
