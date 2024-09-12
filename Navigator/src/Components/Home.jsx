import React from "react";

function Home() {
  return (
    <>
       <div className="hero-container">
      <div className="hero-overlay"></div> {/* Black overlay */}
      <div className="hero-content">
        <h5>TRANSPORT & LOGISTICS SOLUTION</h5>
        <h1>
          #1 Place For Your <span className="highlight">Logistics</span> Solution
        </h1>
        <p>
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebun ipsum et diam justo clita et kasd rebun sea elitr.
        </p>
        <div className="hero-buttons">
          <button className="btn-red">Read More</button>
          <button className="btn-blue">Free Quote</button>
        </div>
      </div>
      
    </div>

    </>
  );
}

export default Home;
