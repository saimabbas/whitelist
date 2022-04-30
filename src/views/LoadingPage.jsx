import React, { useState, useEffect } from "react";
import HeroBgLight from "./../assets/img/coming-soon-bg-light.png";
import LogoAnimationDark from "./../assets/videos/logo-animation-dark.gif";
import LogoAnimationLight from "./../assets/videos/logo-animation-light.gif";
import HeroBgDark from "./../assets/img/middle-moon.png";
import Cloud1Light from "./../assets/img/cloud-1.png";
import Cloud1Dark from "./../assets/img/cloud-1-dark.png";
import Cloud2Light from "./../assets/img/cloud-2.png";
import Cloud2Dark from "./../assets/img/cloud-2-dark.png";
import Cloud3Light from "./../assets/img/cloud-3.png";
import Cloud3Dark from "./../assets/img/cloud-3-dark.png";
import Support from "./../assets/img/helpiconimg.png";
import { MdClear } from "react-icons/md";

import { gsap } from "gsap";
import {
  Power1,
  Power2,
  Power3,
  Power4,
  Linear,
  Back,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { SplitText } from "gsap/SplitText";
const LoadingPage = (props) => {
  const [isLightTheme] = useState(true);
  useEffect(() => {
    var Cont = { val: 0 },
      NewVal = 100;

    gsap.to(Cont, 2, {
      val: NewVal,
      delay: 1.5,
      roundProps: "val",
      duration: 1,
      ease: Linear.easeInOut,
      onUpdate: function () {
        document.getElementById("counter").innerHTML = Cont.val;
      },
    });

    gsap.fromTo(
      ".land-inner-prog",
      {
        width: 0,
      },
      {
        width: "100%",
        delay: 1.5,
        duration: 2,
      }
    );
    let loadingPageAnim = gsap.timeline({
      delay: 1,
      defaults: {
        ease: Back.easeInOut,
        duration: 1.25,
      },
    });
    loadingPageAnim

      .fromTo(
        ".loading-cloud-1",
        {
          opacity: 0,
          x: "15rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 2,
        }
      )
      .fromTo(
        ".loading-cloud-2",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 2,
        },
        "<0"
      )
      .fromTo(
        ".landing-progres",
        {
          opacity: 0,
          y: "15rem",
        },
        {
          opacity: 1,
          y: "0",
        },
        "<0"
      )
      .fromTo(
        ".landing-content h5",
        {
          opacity: 0,
          y: "15rem",
        },
        {
          opacity: 1,
          y: "0",
        },
        "<0.15"
      )
      .fromTo(
        ".landing-content p",
        {
          opacity: 0,
          y: "15rem",
        },
        {
          opacity: 1,
          y: "0",
        },
        "<0.15"
      );
  }, []);

  return (
    <div className={props.className}>
      <div
        className={`app landingpage landingpage-scroll ${
          isLightTheme ? "light-theme" : "dark-theme"
        }`}
      >
        <div className="landingpage">
          {/* Hero Section */}
          <section className="landing-main">
            <img
              className="hr-bg-light light-img landing-page-bg"
              src={HeroBgLight}
              alt="HeroBgLight"
            />
            <img
              className="hr-bg-dark dark-img landing-page-bg"
              src={HeroBgDark}
              alt="HeroBgLight"
            />
            <div className="landing-page-box">
              <img
                className="loading-page-animation dark-img"
                src={LogoAnimationDark}
                alt="LogoAnimationDark"
              />
              <img
                className="loading-page-animation light-img"
                src={LogoAnimationLight}
                alt="LogoAnimationLight"
              />
              <img
                className="light-img loading-cloud-1"
                src={Cloud2Light}
                alt="Cloud2Light"
              />
              <img
                className="dark-img loading-cloud-1"
                src={Cloud2Dark}
                alt="Cloud2Light"
              />
              <img
                className="light-img loading-cloud-2"
                src={Cloud1Light}
                alt="Cloud1Light"
              />
              <img
                className="dark-img loading-cloud-2"
                src={Cloud1Dark}
                alt="Cloud1Light"
              />
              <div className="landing-content">
                <div className="landing-progres">
                  <div className="land-inner-prog"></div>
                </div>
                <h5>
                  <span id="counter"></span>%
                </h5>
                <p>Please wait...</p>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="wlsuccesfulmodal">
          <div className="maincontentmodal">
            <img src={Successful} alt="" />
            <h6>Your payment was successful</h6>
            <p>Welcome to The White List</p>
            <button>OK</button>
          </div>
        </div>
        <div className="wlfailedmodal">
          <div className="maincontentmodal">
            <img src={Failed} alt="" />
            <h6>Your payment failed</h6>
            <p>Oops! Looks like there was an issue. Please try again.</p>
            <button>OK</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoadingPage;
