import React from 'react';
import image1 from "../assets/service-1.webp"
import image2 from "../assets/service-2.webp"
import image3 from "../assets/service-3.webp"
import image4 from "../assets/service-4.webp"
import image5 from "../assets/service-5.webp"
import image6 from "../assets/service-6.webp"

const Services = () => {
  const serviceData = [
    {
      image: image1,
      title: 'Company Work',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Learn More',
    },
    {
      image: image2,
      title: 'Custom Clearance',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Read More',
    },
    {
      image: image3,
      title: 'Road Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Learn More',
    },
    {
      image: image4,
      title: 'Freight Forwarder',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Learn More',
    },
    {
      image: image5,
      title: 'Customs Clearance',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Read More',
    },
    {
      image: image6,
      title: 'Transportation',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      buttonText: 'Learn More',
    },
  ];

  return (
    <section className="services">
      <h3 className="section-subtitle">OUR SERVICES</h3>
      <h2 className="section-title">Explore Our Services</h2>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
