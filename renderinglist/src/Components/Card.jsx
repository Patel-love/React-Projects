import React from "react";
import { ProductData } from "./Data";

function Card() {
  // Filter To The men's clothing
  const mensClothing = ProductData.filter(
    (product) => product.category === "men's clothing"
  );

  // Filter To The women's clothing
  const womensClothing = ProductData.filter(
    (product) => product.category === "women's clothing"
  );

  // Filter To The jewelry
  const jewelry = ProductData.filter(
    (product) => product.category === "jewelery"
  );

  // Filter To The electronics
  const electronics = ProductData.filter(
    (product) => product.category === "electronics"
  );

  const renderCard = (product) => (
    <li
      key={product.id}
      style={{
        padding: "10px 0px 10px 0px",
        textAlign: "center",
        borderRadius: "10px",
        margin: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          style={{ height: "230px", objectFit: "contain", width: "230px" }}
          alt={product.title}
        />
        <div className="card-body">
          <h3>
            {product.title.slice(0, 35)}
          </h3>
          <p>
            {product.description.slice(0, 35)}
          </p>
          <h3>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              ₹{product.price}
            </a>
          </h3>
        </div>
      </div>
    </li>
  );

  return (
    <div>
      <section style={{ marginTop: "10%" }}>
        <h2 style={{ textAlign: "center", color: "#333", margin: "20px 0" }}>
          <mark style={{ padding: "5px 10px 5px 10px" }}>Men's Clothing</mark>
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {mensClothing.map(renderCard)}
        </ul>
      </section>

      <section style={{ marginTop: "10%" }}>
        <h2 style={{ textAlign: "center", color: "#333", margin: "20px 0" }}>
          <mark style={{ padding: "5px 10px 5px 10px" }}>Women's Clothing</mark>
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {womensClothing.map(renderCard)}
        </ul>
      </section>

      <section style={{ marginTop: "10%" }}>
        <h2 style={{ textAlign: "center", color: "#333", margin: "20px 0" }}>
          <mark style={{ padding: "5px 10px 5px 10px" }}>Electronics</mark>
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {electronics.map(renderCard)}
        </ul>
      </section>

      <section style={{ marginTop: "10%" }}>
        <h2 style={{ textAlign: "center", color: "#333", margin: "20px 0" }}>
          <mark style={{ padding: "5px 10px 5px 10px" }}>Jewellery </mark>
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {jewelry.map(renderCard)}
        </ul>
      </section>
    </div>
  );
}

export default Card;
