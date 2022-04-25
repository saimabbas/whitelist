import React from "react";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import Logo from "../assets/img/Logo";

const LandingPage = () => {
  return (
    <div className="app Dark-theme">
      <div className="landingpage">
        {/* Hero Section */}
        <section className="landing-main">
          <img
            className="landing-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="landing-bg-dark dark-img"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <div className="box">
            <div className="landing-content">
              <div className="landing-head">
                <Logo color="#1F194D" />
                <h3>The Whitelist</h3>
              </div>
              <div className="landing-progres">
                <div className="land-inner-prog"></div>
              </div>
              <h5>64%</h5>
              <p>Please wait...</p>
            </div>
          </div>
        </section>
        {/* Footer */}
      </div>
    </div>
  );
};

export default LandingPage;
