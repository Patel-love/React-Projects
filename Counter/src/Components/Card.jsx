import { useState } from "react";
import { Data } from "./Data";

function Card() {
  const [currentIndex, setIndex] = useState(0);

  const productData = Data[currentIndex];

  // Next Button Function
  function Next() {
    if (currentIndex < Data.length - 1) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
  }

  // Previous Button Function
  function Previous() {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    } else {
      setIndex(19);
    }
  }

  const { image, title, price, description } = productData;

  return (
    <>
      <h1 className="text-center">
        <b>
          <i>Cards</i>
        </b>
      </h1>
      <div
        className="container text-center"
        style={{ paddingLeft: "31%" }}
      >
          <div className="card rounded-4" style={{ width: "350px", height: "520px" ,boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
            <div className="text-center p-3">
              <img
                src={image}
                className="card-img-top w-75"
                style={{
                  mixBlendMode: "multiply",
                  height: "200px",
                  objectFit: "contain",
                }}
                alt={image}
              />
            </div>
            <div className="card-body">
              <h4 className="card-title fs-5">{title.slice(0, 30)}</h4>
              <h5>{price}</h5>
              <p className="card-text">{description.slice(0, 190)}</p>
              <div className="text-center">
                <a href="#">
                  <button type="button" class="btn btn-outline-primary">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        <div className="btns d-flex text-center py-4">
          <div className="btn1 ps-5 " style={{ marginLeft: "30px" }}>
            <button
              type="button"
              onClick={Previous}
              className="btn btn-outline-dark"
            >
              Previous
            </button>
          </div>
          <div className="btn2 ps-5 ">
            <button
              onClick={Next}
              type="button"
              className="btn btn-outline-dark"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
