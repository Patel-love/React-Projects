// src/Components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../Components/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink to="/home" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4"><b> Home </b></li>
              </NavLink>
              <NavLink to="/about" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4"><b> About </b></li>
              </NavLink>
              <NavLink to="/service" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4"><b> Services </b></li>
              </NavLink>
              <NavLink to="/contact" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4"><b> Contact </b></li>
              </NavLink>
              <NavLink to="/plans" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4"><b> Plans </b></li>
              </NavLink>
              <NavLink to="/cart" className={(e) => (e.isActive ? "text-bg-dark" : "")} style={{ textDecoration: "none" }}>
                <li className="nav-item px-4">
                  <b> Cart ({cartItems.length}) </b>
                </li>
              </NavLink>
            </ul>
            <button className="btn btn-outline-success mx-5" type="submit">
              LogIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
