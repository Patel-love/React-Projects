import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("User Signed Up Successfully")
    ).catch((error) => alert(error.message));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) => alert(error.message));
  };

  return (
    <div className="signup-container p-4 my-4 rounded shadow-lg bg-light">
      <h1 className="text-center mb-4">Create an Account</h1>
      <div className="form-group mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-danger mb-2" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <button className="btn btn-primary" onClick={signupUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default User;