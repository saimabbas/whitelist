import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/coming-soon-bg-light.png";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgDark from "./../assets/img/comingsoon-dark-bg-pc.png";
import HeroBgDarkMob from "./../assets/img/comingsoon-dark-mob.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";

const ComingSoon = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {/* Header */}
      <header>
        <div className="box cslmainheader">
          <div className="header-content">
            <div className="header-left">
              <Logo className="light-img" color="#1F194D" />
              <Logo className="dark-img" color="#fff" />
            </div>
          </div>
        </div>
      </header>
      <div className="comesoonpage">
        {/* Hero Section */}
        <section className="landing-main coomsoon-main">
          <img
            className="hr-bg-light light-img landing-page-bg"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="hr-bg-dark dark-img comingsoon-dark-bg"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <img
            className="hr-bg-dark hr-bg-dark-mob dark-img comingsoon-dark-bg"
            src={HeroBgDarkMob}
            alt="HeroBgDarkMob"
          />
          <div className="box">
            <div className="landing-content comesoonsection">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Coming Soon</h2>

                  <img
                    className="light-img"
                    src={BlobPurple}
                    alt="BlobPurple"
                  />
                  <img
                    className="dark-img"
                    src={BlobPurpleDark}
                    alt="BlobPurpleDark"
                  />
                </div>
                <p>We're working hard to bring you the best!</p>
              </div>
              <div className="coomsoontimer">
                <div className="hero-countdopwn-box">
                  <div className="hero-countdown">
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>105</span>
                        <h6>Days</h6>
                      </div>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>02</span>
                        <h6>Hours</h6>
                      </div>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>23</span>
                        <h6>Minutes</h6>
                      </div>
                    </div>
                    <div className="hc-time-box hcnmar">
                      <div className="hc-time-box-top">
                        <span>53</span>
                        <h6>Seconds</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="coomsoonlast">
                <p>Get notified when site goes live</p>
                <div className="coomsooninput">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your Email"
                  />
                  <button>Subscribe</button>
                </div>
                <div className="coomsoonicons">
                  <Instagram className="light-img" color="#1F194D" />
                  <Instagram className="dark-img" color="#fff" />
                  <TwitterIcon className="light-img" color="#1F194D" />
                  <TwitterIcon className="dark-img" color="#fff" />
                  <Discord className="light-img" color="#1F194D" />
                  <Discord className="dark-img" color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComingSoon;
