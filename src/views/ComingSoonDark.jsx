import React, { useEffect } from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import { gsap } from "gsap";

const ComingSoonDark = () => {
  useEffect(() => {
    gsap.fromTo(
      ".comingsoon-heading span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
        duration: 0.25,
        stagger: {
          repeat: 5,
          each: 0.075,
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
            <div className="box">
              <div className="header-content">
                <div className="header-left">
                  <img src={Passengers} alt="" />
                </div>
              </div>
            </div>
          </header>
          <div className="comsoondcontent">
            <h1 className="comingsoon-heading">
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>S</span>
              <span>O</span>
              <span>O</span>
              <span>N</span>
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
