import React from "react";
import "./PortFolio.css";
// import portfolioImg from "../img/portfolio1.png";
import data from "../data.json";
const Portfolio = () => {
  return (
    <div>
      <div className="portfolio">
        <div className="container">
          <h1>Our PortFolio Awesome</h1>
          <div className="portfolio-wrapper grid">
            {data.portfolio.map((item) => {
              return (
                <div className="portfolio-box" key={item.id}>
                  <div className="portfolio-image">
                    <img src={item.img} alt="portfolio" />
                  </div>
                  <h2>{item.heading}</h2>
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

export default Portfolio;
