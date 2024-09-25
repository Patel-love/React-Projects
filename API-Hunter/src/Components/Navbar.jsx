import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user }) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand  text-white" href="#">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{paddingLeft:"35%"}}>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link  text-white active fs-4  "
                  aria-current="page"
                  href="#"
                >
                  <b>
                    <u>SignUp</u>
                  </b>
                </Link>
              </li>
              <li className="nav-item ps-5">
                <Link
                  to="/login"
                  className="nav-link  text-white active fs-4"
                  aria-current="page"
                  href="#"
                >
                  <b>
                    <u> Login </u>
                  </b>
                </Link>
              </li>
            </ul>
            <div className="collapse navbar-collapse">
              {user ? (
                <div className="d-flex align-items-center ms-5" style={{paddingLeft:"30%"}}>
                  <span className="navbar-text me-3">
                   <b className="fs-5   text-white"> Welcome, <i>{user.name} </i>  </b>
                  </span>
                  <button className="btn btn-outline-danger   text-white" >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
