import React from "react";
import "../styles/views/Home.css";
import HeroImgLight from "../assets/img/hero-img-light.png";
import HeroImgDark from "../assets/img/hero-img-dark.png";
import BlobBlue from "../assets/img/blob-blue.svg";

const Home = () => {
  return (
    <div className="app light-theme">
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="box">
            <div className="hero-content">
              <div className="hero-left">
                <h1>
                  <span>
                    <b>Welcome</b> To <br />
                    The <b>WhiteList.</b>
                  </span>
                  <img src={BlobBlue} alt="BlobBlue" />
                </h1>
                <p>
                  The Best Artists, Projects <br /> and Utility. No Compromise.
                </p>
                <div className="hero-countdopwn-box">
                  <h6>Join Us In...</h6>
                  <div className="hero-countdown">
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>0</span>
                        <span>5</span>
                      </div>
                      <h6>DAYS</h6>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>2</span>
                        <span>6</span>
                      </div>
                      <h6>HOURS</h6>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>1</span>
                        <span>9 </span>
                      </div>
                      <h6>MINUTES</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                <img
                  className="light-img"
                  src={HeroImgLight}
                  alt="HeroImgLight"
                />
                <img className="dark-img" src={HeroImgDark} alt="HeroImgDark" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
