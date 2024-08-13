import React, { useEffect, useState } from "react";

function Template() {
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("404 Not Found");
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    select === "all"
      ? products
      : products.filter((product) => product.category === select);

  return (
    <div className="container py-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded rounded-3 mb-4">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item">
                <button
                  style={{ marginLeft: "140px" }}
                  className="btn btn-outline-dark "
                  onClick={() => setSelect("all")}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ marginLeft: "300px" }}
                  className="btn btn-outline-dark "
                  onClick={() => setSelect("men's clothing")}
                >
                  Men's Clothing
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ marginLeft: "230px" }}
                  className="btn btn-outline-dark "
                  onClick={() => setSelect("women's clothing")}
                >
                  Women's Clothing
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top mx-auto p-3"
                alt={product.title}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="card-text">
                  <b>Rating :-</b> <b> Rate:</b> {product.rating.rate}{" "}
                  <b>Count:</b> {product.rating.count}
                </p>
                <p className="card-text">
                  <strong>Price :- ${product.price}</strong>
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template;
