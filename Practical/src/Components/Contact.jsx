import React from 'react';

const ContactSection = () => {
  return (
    <>
    <h1 className='text-center'><b><i><u>Contact Us</u></i></b></h1>
    <div className="contact-section">
      <div className="contact-form">
        <h2>Contact For Any Query</h2>
        <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24144.29413982758!2d-73.99478194750755!3d40.73061040664814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0d097d65%3A0x8420b479bc6bfb69!2sNew%20York!5e0!3m2!1sen!2sus!4v1617723838580!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default ContactSection;
