import React from "react";
import logoImg from "../img/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <ul className="nav-list">
            <li>
              <a className="nav-item" href="#a">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="#a">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-item" href="#a">
                About
              </a>
            </li>
            <li>
              <a className="nav-item" href="#a">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-item" href="#a">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-content">
          <div className="container">
            <h1>good design to good bussiness</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
