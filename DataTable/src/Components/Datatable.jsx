import React, { useEffect, useState } from "react";

function Datatable() {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const Apidata = await fetch(`https://fakestoreapi.com/products`);
      //   console.log(Apidata);
      const data = await Apidata.json();
      //   console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);

  const searchingUser = users
    .filter(({ category }) => {
      return category.indexOf(term) >= 0;
    }).map((e) => (
      <div key={e.id}>
        <div
          className="card"
          style={{
            width: "18rem",
            height: "435px   ",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <img
            src={e.image}
            style={{ width: "100%", height: "210px", objectFit: "contain" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Title : </b> {e.title}
            </h5>
            <h5 className="card-title">Category : {e.category}</h5>
            <h3>Price : {e.price}</h3>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="container text-center p-5">
        <h2 className="text-center text-bg-dark w-50 m-auto p-2 rounded mb-5">
          Searching Data
        </h2>
        <input
          type="text"
          className="w-50  text-center rounded"
          placeholder="Enter The Category"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <div className="d-flex flex-wrap justify-content-between gap-5 mt-5">
          {" "}
          {searchingUser}{" "}
        </div>
      </div>
    </>
  );
}

export default Datatable;
