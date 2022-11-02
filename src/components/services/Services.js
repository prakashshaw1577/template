import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="service-header">
            <h3>Our services</h3>
          </div>
          <div className="service-wrapper flex">
            <div className="service-content-box">
              <i className="fa-solid fa-laptop shadow"></i>
              <h3>Web Design</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>

            <div className="service-content-box">
              <i className="fa-solid fa-magnifying-glass shadow"></i>
              <h3>Search Optimization</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>

            <div className="service-content-box">
              <i className="fa-solid fa-cart-shopping shadow"></i>
              <h3>Online shopping</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>

            <div className="service-content-box">
              <i className="fa-solid fa-thumbs-up shadow"></i>
              <h3>Social Media</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
