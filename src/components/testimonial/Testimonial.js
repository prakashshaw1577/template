import React from "react";
import "./Testimonial.css";
import avatarImg from "../img/avatar.png";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <div className="container">
          <div className="testimonial-intro">
            <h1>what we offer</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="testimonial-wrapper grid">
            <div className="testimonial-box">
              <h3>Web Design</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="testimonial-box">
              <h3>Search Optimization</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="testimonial-box">
              <h3>Online Shop</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="testimonial-box">
              <h3>Social Media</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="testimonial-intro">
            <h1>testimonials</h1>
            <p className="description">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever."
            </p>

            <h4>John Doe / CEO of Company</h4>

            <div className="avatar-wrapper flex">
              <div className="avatar-img">
                <img src={avatarImg} alt="avatar1" />
              </div>
              <div className="avatar-img">
                <img src={avatarImg} alt="avatar2" />
              </div>
              <div className="avatar-img">
                <img src={avatarImg} alt="avatar3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
