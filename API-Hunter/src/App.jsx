import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

 

function toggleLogin() {
  setIsLogin(!isLogin);
  
}


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Navbar user={user}  />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          {" "}
          <Navbar user={user}  />{" "}
          <SignUp toggleLogin={toggleLogin} />{" "}
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar user={user}  />
          <Login setUser={setUser} toggleLogin={toggleLogin} />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
