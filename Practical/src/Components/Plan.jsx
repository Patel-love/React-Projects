// src/Components/Plan.js
import React from "react";
import { useCart } from "../Components/CartContext";

function Plan({ level, rupee }) {
  const { addToCart } = useCart(); // Access addToCart from context

  const handleBuyNow = () => {
    const item = { level, rupee }; // Create item object
    addToCart(item); // Add item to cart
    alert(`${level} has been added to your cart!`); // Alert user
  };

  return (
    <div className="card mt-5 mb-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h4 className="card-title text-danger">{level}</h4>
        <p className="card-text">
          <b>$ <span style={{ fontSize: "45px" }}>{rupee}</span>/Month</b>
        </p>
        <hr />
        <h5 style={{ color: "#555555", paddingTop: "10px" }}> - HTML5 & CSS3</h5>
        <h5 style={{ color: "#555555", paddingTop: "10px" }}> - Bootstrap v5</h5>
        <h5 style={{ color: "#555555", paddingTop: "10px" }}> - FontAwesome Icons</h5>
        <h5 style={{ color: "#555555", paddingTop: "10px" }}> - Responsive Layout</h5>
        <h5 style={{ color: "#555555", paddingTop: "10px" }}> - Cross-browser Support</h5>
        <button type="button" className="text-center btn btn-outline-dark mt-4" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Plan;
