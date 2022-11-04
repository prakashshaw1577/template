import React, { useState } from "react";
import logoImg from "../img/logo.png";
import menuList from "../data.json";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <div className="header ">
        <nav>
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <ul className={isClick ? "nav-list menu-list" : "nav-list"}>
            {menuList.menu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    className="nav-item"
                    href={`#${item.menuList.toLowerCase()}`}
                    onClick={() => setIsClick(false)}
                  >
                    {item.menuList}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="menu-bar">
            <i
              className={isClick ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              style={{ color: isClick ? "white" : "black" }}
              onClick={() => (isClick ? setIsClick(false) : setIsClick(true))}
            ></i>
          </div>
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
