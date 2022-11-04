import React from "react";
import "./Services.css";
import data from "../data.json";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="service-header">
            <h3>Our services</h3>
          </div>
          <div className="service-wrapper grid">
            {data.service.map((item) => {
              return (
                <div className="service-content-box" key={item.id}>
                  <i className={`${item.icon} shadow`}></i>
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
