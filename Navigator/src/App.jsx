import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Plan02 from "./Components/Plan02";
import Todo from "./Components/Todo";
import Show from "./Components/Show";
import { useState } from "react";

function App() {
  const [userValue, setUserValue] = useState("");
  const [addItems, setAddItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <>
          {" "}
          <Navbar /> <Home /> <Footer />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar /> <About /> <Footer />
        </>
      ),
    },
    {
      path: "/plans",
      element: (
        <>
          <Navbar />
          <Plan02 />
          <Footer />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Todo
            userValue={userValue}
            setUserValue={setUserValue}
            addItems={addItems}
            setAddItems={setAddItems}
          />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactus",
      element: (
        <>
          <Navbar />
          <h1 className="text-center mt-5 pt-3 rounded pb-3 mb-5 text-bg-success w-50 m-auto">Todo App Data</h1>
          <Show
            addItems={addItems}
            setAddItems={setAddItems}
            setUserValue={setUserValue}
            userValue={userValue}
          />
          <Footer />
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
