import React from 'react'

function Footer() {
  return (
    <>
     <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="footer-column">
            <h3>Address</h3>
            <ul className="footer-list">
              <li>- 123 Street, New York, USA</li>
              <li>- +012 345 67890</li>
              <li>- mail@domain.com</li>
            </ul>
           
          </div>

          {/* Services Section */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-list">
              <li><a href="#">- Air Freight</a></li>
              <li><a href="#">- Sea Freight</a></li>
              <li><a href="#">- Road Freight</a></li>
              <li><a href="#">- Logistic Solutions</a></li>
              <li><a href="#">- Industry Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <form>
              <input type="email" placeholder="Your email" className="email-input"/>
              <button type="submit" className="signup-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer