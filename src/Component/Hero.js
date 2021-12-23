import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button";
import "../css/Hero.css";

function Hero({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  startBtn,
  readBtn,
  img,
  alt,
  imgStart,
  id,
}) {
  return (
    <>
      <div
        id={id}
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/login">
                  <button className="hero__btn start">{startBtn}</button>
                </Link>
                <Link to="/blog">
                  <button className="hero__btn read">{readBtn}</button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src="/images/heroImage.png"
                  className="heroImg"
                  alt="heroImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
