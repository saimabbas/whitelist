import React, { useEffect } from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import { gsap } from "gsap";

const ComingSoonDark = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".comingsoon-heading",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
    tl.fromTo(
      ".comingsoon-heading span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        stagger: {
          repeat: 3,
          each: 0.1,
          from: "random",
        },
      }
    );
  }, []);

  return (
    <div className="app light-theme">
      <div className="coomsoondark">
        <div className="comsoondmain">
          <video autoPlay muted playsInline className="backvideo">
            <source src={ComingVideo} type="video/mp4" />
          </video>
          <header className="comingsoon-header">
            <div className="header-content">
              <div className="header-left">
                <img src={Passengers} alt="" />
              </div>
            </div>
          </header>
          <div className="comsoondcontent">
            <h1 className="comingsoon-heading">
              <span className="conthrax">C</span>
              <span className="conthrax">O</span>
              <span className="conthrax">M</span>
              <span className="conthrax">I</span>
              <span className="conthrax">N</span>
              <span className="conthrax">G</span>
              <span className="conthrax">S</span>
              <span className="conthrax">O</span>
              <span className="conthrax">O</span>
              <span className="conthrax">N</span>
            </h1>
            <div className="comdarktimer">
              <div className="comdarkday">
                <h6>
                  25 <span>DAYS</span>
                </h6>
              </div>
              <p>:</p>
              <div className="comdarkday">
                <h6>
                  25 <span>DAYS</span>
                </h6>
              </div>
              <p>:</p>
              <div className="comdarkday">
                <h6>
                  25 <span>DAYS</span>
                </h6>
              </div>
            </div>
            <h5>Get notified when we are close to blast off:</h5>
            <div className="comdarkinput">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email..."
              />
              <button>Subscribe</button>
            </div>
            <h6>If you have any qustions, please contact us at:</h6>
            <h4>Info@thewhitelist.com</h4>
            <div className="coomsoonicons">
              <Instagram color="rgba(255, 255, 255, 0.6)" />
              <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
              <Discord color="rgba(255, 255, 255, 0.6)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDark;
