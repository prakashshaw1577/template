import React from "react";
import "./Testimonial.css";
import avatarImg from "../img/avatar.png";
import data from "../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
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
            {data.testimonial.map((item) => {
              return (
                <div className="testimonial-box" key={item.id}>
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div style={{ backgroundColor: "rgb(216, 230, 231)" }}>
          <div className="container">
            <div className="testimonial-intro">
              <h1>testimonials</h1>
              <Slider {...settings}>
                <div className="slick-carousel">
                  <p className="description">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s"
                  </p>
                  <div className="avatar-img">
                    <img src={avatarImg} alt="avatar1" />
                  </div>
                  <h4>John Doe / CEO of Company</h4>
                </div>
                <div className="slick-carousel">
                  <p className="description">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s"
                  </p>
                  <div className="avatar-img">
                    <img src={avatarImg} alt="avatar1" />
                  </div>
                  <h4>Rahul Sharma</h4>
                </div>
                <div className="slick-carousel">
                  <p className="description">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s"
                  </p>
                  <div className="avatar-img">
                    <img src={avatarImg} alt="avatar1" />
                  </div>
                  <h4>Ram Vangari</h4>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
