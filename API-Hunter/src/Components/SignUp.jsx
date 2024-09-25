import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:4040/api`, data).then((res) => {
      console.log(res.data);

      navigate("/login");
    });
   
  }

  return (
    <>
      {" "}
      <div
        className="container mt-5 p-5 w-50 text-center"
        style={{
          backgroundImage: " linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <h1 className="text-center text-primary mb-4">
          <b>
            <i>SignUp Form</i>
          </b>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              <b> User Name </b>
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="form-control shadow-sm"
              style={{ borderRadius: "8px" }}
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <b>User Email </b>
            </label>
            <input
              type="Email"
              className="form-control shadow-sm"
              style={{ borderRadius: "8px" }}
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              placeholder="Enter User Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <b>User Password</b>
            </label>
            <input
              type="Password"
              className="form-control shadow-sm"
              style={{ borderRadius: "8px" }}
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              placeholder="Enter User Password"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary">SignUP</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
