// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Plan02 from "./Components/Plan02";
import Cart from "./Components/Cart"; // Import the Cart component
import { CartProvider } from "./Components/CartContext";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home /> <Footer />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar /> <Home /> <Footer />
        </>
      ),
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
      path: "/service",
      element: (
        <>
          <Navbar /> <Services /> <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar /> <Contact /> <Footer />
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
      path: "/cart", // Add the cart route here
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
