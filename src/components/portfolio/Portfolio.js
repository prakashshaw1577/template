import React from "react";
import "./PortFolio.css";
import portfolioImg from "../img/portfolio1.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio">
        <div className="container">
          <h1>Our PortFolio Awesome</h1>
          <div className="portfolio-wrapper grid">
            <div className="portfolio-box">
              <div className="portfolio-image">
                <img src={portfolioImg} alt="portfolio" />
              </div>
              <h2>Lorem Ipsum is simply</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="portfolio-box">
              <div className="portfolio-image">
                <img src={portfolioImg} alt="portfolio" />
              </div>
              <h2>Lorem Ipsum is simply</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="portfolio-box">
              <div className="portfolio-image">
                <img src={portfolioImg} alt="portfolio" />
              </div>
              <h2>Lorem Ipsum is simply</h2>
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

export default Portfolio;
