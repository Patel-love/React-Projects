import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css'; 
import User from "./Component/User";

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="auth-container text-center p-5">
        <h3 className="mb-5 heading">Create an account to get started</h3>
        <User/>
      </div>
    );
  }

  return (
    <div className="auth-container text-center p-5 shadow rounded-lg">
      <h1 className="welcome-heading mb-4">Welcome!</h1>
      <h2 className="user-greeting mb-4"> {user.email}</h2>
      <p className="info-text mb-4">You are now logged in using Google Auth.</p>
      <button className="btn btn-logout" onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
