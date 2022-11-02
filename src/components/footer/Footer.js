import React from "react";
import "./Footer.css";
import footerImg from "../img/footer1.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper grid">
            <div className="col">
              <h2>bird feeds</h2>
              <div>
                <p>Check out the great theme item</p>
                <a href="#a">http://dgsfufy.com</a>
                <p>2 week ago</p>
              </div>
              <hr />
              <div>
                <p>Check out the great theme item</p>
                <a href="#a">http://dgsfufy.com</a>
                <p>2 week ago</p>
              </div>
              <hr />
              <div>
                <p>Check out the great theme item</p>
                <a href="#a">http://dgsfufy.com</a>
                <p>2 week ago</p>
                <hr />
              </div>
            </div>
            <div className="col">
              <h2>news letter</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <hr />
              <form>
                <label>Your Email Address</label>
                <br />
                <input type="email" placeholder="me@example.com" />
                <br />
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="col">
              <h2>recent projects</h2>
              <div className="flex">
                <div className="article-img">
                  <img src={footerImg} alt="article1" />
                </div>
                <div className="article-detail">
                  <p>Bussiness Card</p>
                  <a href="#a">http://dgsfufy.com</a>
                  <p>2 week ago</p>
                </div>
              </div>
              <hr />
              <div className="flex">
                <div className="article-img">
                  <img src={footerImg} alt="article1" />
                </div>
                <div className="article-detail">
                  <p>Bussiness Card</p>
                  <a href="#a">http://dgsfufy.com</a>
                  <p>2 week ago</p>
                </div>
              </div>
              <hr />
              <div className="flex">
                <div className="article-img">
                  <img src={footerImg} alt="article1" />
                </div>
                <div className="article-detail">
                  <p>Bussiness Card</p>
                  <a href="#a">http://dgsfufy.com</a>
                  <p>2 week ago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <h2>contact</h2>
              <div className="info flex">
                <i className="fa-solid fa-phone"></i>
                <div className="article-detail">
                  <p>+91 987654321</p>
                  <p>+91 987654321</p>
                </div>
              </div>
              <div className="info flex">
                <i className="fa-solid fa-message"></i>
                <div className="article-detail">
                  <p>+91 987654321</p>
                  <p>+91 987654321</p>
                </div>
              </div>
              <div className="info flex">
                <i className="fa-solid fa-envelope"></i>
                <div className="article-detail">
                  <p>info@company.com</p>
                  <p>support@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
