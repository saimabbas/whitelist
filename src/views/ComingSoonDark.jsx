import React, { useEffect, useRef } from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import BackAudio from "../assets/audio/comingsoon-bg-audio.ogg";
import { gsap } from "gsap";
import $ from "jquery";
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
const ComingSoonDark = () => {
  const ad = useRef(null);
  const btntbn = useRef(null);
  gsap.registerPlugin(SplitText);

  const playAudio = () => {
    ad.current.play();
  };
  document.body.addEventListener("mousemove", function () {
    // ad.current.get(0).play();
    btntbn.current.click();
  });
  useEffect(() => {
    /* $(window).on("load", function () {
      ad.current.play();
      console.log("Document Loadeddddddddddddd");
    }); */
    const comingsoonHeading = new SplitText(".comingsoon-heading", {
      type: "chars",
    });
    const comingsoonHeadingChars = comingsoonHeading.chars;

    const comingsoonTimer = new SplitText(".comingsoon-timer", {
      type: "chars",
    });
    const comingsoonTimerChars = comingsoonTimer.chars;

    const comingsoonTextComponent1 = new SplitText(
      ".comingsoon-text-component-1",
      {
        type: "chars",
      }
    );
    const comingsoonTextComponent1Chars = comingsoonTextComponent1.chars;
    const comingsoonTextComponent2 = new SplitText(
      ".comingsoon-text-component-2",
      {
        type: "chars",
      }
    );
    const comingsoonTextComponent2Chars = comingsoonTextComponent2.chars;
    const comingsoonTextComponent3 = new SplitText(
      ".comingsoon-text-component-3",
      {
        type: "chars",
      }
    );
    const comingsoonTextComponent3Chars = comingsoonTextComponent3.chars;
    let tl = gsap.timeline({
      delay: 1,
    });
    tl.fromTo(
      ".comingsoon-header",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        repeat: 3,
      }
    )
      .fromTo(
        ".comsoondcontent",
        {
          scale: 0.85,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: Power3.easeInOut,
        },
        "<0.25"
      )

      .fromTo(
        comingsoonHeadingChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: {
            repeat: 2,
            each: 0.1,
            from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        ".comdarktimer",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: Power3.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        comingsoonTimerChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: {
            repeat: 1,
            each: 0.1,
            from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        ".comingsoon-bottom-box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: Power3.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".comingsoon-op-component",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: Power3.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        comingsoonTextComponent1Chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: {
            repeat: 0,
            each: 0.05,
            from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        ".comingsoon-text-component-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          repeat: 2,
          /* stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          }, */
        },
        "<0.25"
      )
      .fromTo(
        comingsoonTextComponent3Chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: {
            repeat: 1,
            each: 0.05,
            from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        ".coomsoonicons svg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 3,
            each: 0.05,
            from: "random",
          },
        },
        "<0.25"
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
            <h1 className="comingsoon-heading conthrax">
              Coming <br /> Soon
            </h1>
            <div className="comdarktimer">
              <div className="comdarkday">
                <h6 className="comingsoon-timer conthrax">
                  23 <span className="conthrax">DAYS</span>
                </h6>
              </div>
              <p className="conthrax">:</p>
              <div className="comdarkday">
                <h6 className="comingsoon-timer conthrax">
                  02 <span className="conthrax">HOURS</span>
                </h6>
              </div>
              <p className="conthrax">:</p>
              <div className="comdarkday">
                <h6 className="comingsoon-timer conthrax">
                  34 <span className="conthrax">MINUTES</span>
                </h6>
              </div>
            </div>
            {/* <audio ref={ad} controls className="back-audio" src={BackAudio} />
            <button ref={btntbn} onClick={playAudio} type="button">
              Play Audio
            </button> */}
            <div className="comingsoon-bottom-box">
              <h5 className="comingsoon-text-component-1">
                Get notified when we are close to blast off:
              </h5>
              <div className="comdarkinput comingsoon-op-component">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email..."
                />
                <button>Subscribe</button>
              </div>
              <h6 className="comingsoon-text-component-2">
                If you have any qustions, please contact us at:
              </h6>
              <h4 className="comingsoon-text-component-3">
                Info@thewhitelist.com
              </h4>
              <div className="coomsoonicons comingsoon-op-component">
                <Instagram color="rgba(255, 255, 255, 0.6)" />
                <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
                <Discord color="rgba(255, 255, 255, 0.6)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDark;
