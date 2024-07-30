import React from "react";
import { ProductData } from "./Data";
import FilterCard from "./Card"

function Product() {
  const cardData = ProductData.map((products) => (
    <li key={products.id}  style={{margin:"10px",textAlign:"center",borderRadius:"10px",padding:"10px 0px 10px 0px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>  
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={products.image}
          style={{ height: "230px", objectFit: "contain",width:"230px" }}
          alt={products.title}
        />
        <div className="card-body">
          <h3 >{products.title.slice(0, 40)}</h3>
          <p>{products.description.slice(0, 35)}</p>
          <h3>
          <a href="#" style={{color:"black",textDecoration:"none"}}>₹
            {products.price}
          </a>
          </h3>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <h1 style={{textAlign:"center",marginTop:"5%"}}><mark style={{padding:"5px 10px 5px 10px"}}>All Products</mark></h1>
      <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
        {cardData}
      </ul>
      <FilterCard/>
    </>
  );
}

export default Product;