import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  function handleFirstName(e) {
    setForm({
      ...form,
      fname: e.target.value,
    });
  }
  function handleLastName(e) {
    setForm({
      ...form,

      lname: e.target.value,
    });
  }
  function handleEmail(e) {
    setForm({
      ...form,

      email: e.target.value,
    });
  }
  function handlePassword(e) {
    setForm({
      ...form,

      password: e.target.value,
    });
  }
  function handleNumber(e) {
    setForm({
      ...form,
      number: e.target.value,
    });
  }
    function handleAddress(e) {
      setForm({
        ...form,

        address: e.target.value,
      });
    }
    return (
      <div
        className="container mt-5 text-white mb-5 border border-3 border-black rounded p-4 w-50"
        style={{backgroundColor: "#28334AFF"}}
      >
        <h1 className="text-center">
          <b>
            <i>Form</i>
          </b>
        </h1>
        <form className="form" onClick={((e)=>{e.preventDefault()})}>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your First Name :</b>
            </label>
            <input
              type="text"
              value={form.fname}
              onChange={handleFirstName}
              placeholder="Enter Your First Name"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your Last Name :</b>
            </label>
            <input
              type="text"
              value={form.lname}
              onChange={handleLastName}
              placeholder="Enter Your Last Name"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your Email :</b>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleEmail}
              placeholder="Enter Your Email"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your Password :</b>
            </label>
            <input
              type="password"
              value={form.password}
              onChange={handlePassword}
              placeholder="Enter Your Password"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your Contact Number :</b>
            </label>
            <input
              type="number"
              value={form.number}
              onChange={handleNumber}
              placeholder="Enter Your Contact Number"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>
              <b>Enter Your Address :</b>
            </label>
            <textarea
              placeholder="Enter Your Address"
              value={form.address}
              onChange={handleAddress}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div className="box mt-5 p-3 border text-black rounded-1 bg-primary-subtle">
          <h4 className="text-center mb-3"><b><i><u>User Information</u></i></b></h4>
          <p>
            <strong>
              <i> Name : </i>
            </strong>
            <span>
              <b>
                {" "}
                {form.fname} {form.lname}{" "}
              </b>
            </span>
          </p>
          <p>
            <b>
              <i> Email : </i>
            </b>
            <span>
              <b>{form.email} </b>
            </span>
          </p>
          <p>
            <strong>
              <i> Password : </i>
            </strong>
            <span>
              <b>{form.password} </b>
            </span>
          </p>
          <p>
            <strong>
              <i> Contact Number : </i>
            </strong>
            <span>
              <b>{form.number} </b>
            </span>
          </p>
          <p>
            <strong>
              <i> Address : </i>
            </strong>
            <span>
              <b>{form.address}</b>
            </span>
          </p>
        </div>
      </div>
    );
  }

export default Form;
