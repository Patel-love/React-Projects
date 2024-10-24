import React from "react";
import Plan from "./Plan";

function Plan02() {
  return (
    <>
      <div className="container">
        <h5 className="text-center pt-4" style={{ color: "#51CFED" }}>
          Pricing Plan
        </h5>
        <h2 className="text-center">Perfect Pricing Plan</h2>
        <div className="row">
          <div className="col-4">
            <Plan level="Basic Plan." rupee="49.00" />
          </div>
          <div className="col-4">
            <Plan level="Standard Plan." rupee="99.00" />
          </div>
          <div className="col-4">
            <Plan level="Advanced Plan." rupee="149.00" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan02;
