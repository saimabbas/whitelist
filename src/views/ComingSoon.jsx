import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/coming-soon-bg-light.png";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgDark from "./../assets/img/comingsoon-dark-bg-pc.png";
import HeroBgDarkMob from "./../assets/img/comingsoon-dark-bg-pc.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import { subscribeToComingSoonI } from "../HTTP/endpoints";
import Moon from "../assets/img/moon.png";
import Cloud1Light from "./../assets/img/cloud-1.png";
import Cloud1Dark from "./../assets/img/cloud-1-dark.png";
import Cloud2Light from "./../assets/img/cloud-2.png";
import Cloud2Dark from "./../assets/img/cloud-2-dark.png";
import Cloud3Light from "./../assets/img/cloud-3.png";
import Cloud3Dark from "./../assets/img/cloud-3-dark.png";
import { gsap } from "gsap";
import {
  Back,
  Power3,

  // Power1,
  // Power2,
  Power4,
  Linear,
  // Expo,
  // Circ,
} from "gsap/dist/gsap";
const ComingSoon = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState();

  const handleSubscribe = async (e) => {
    if (!email) return;
    const payload = JSON.stringify({ email });
    try {
      setIsLoading(true);
      await subscribeToComingSoonI(payload);
      setEmail("");
      setIsLoading(false);
      toast.success("Subscribed Successfully.");
    } catch (err) {
      console.log("err", err);
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`05/12/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  useEffect(() => {
    let ComingSoonCloud1Anim = gsap.timeline();
    ComingSoonCloud1Anim.fromTo(
      ".comingsoon-cloud-1",
      {
        transform: "translate(50vw, 0)",
      },
      {
        transform: "translate(101vw, 0)",
        duration: 100,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-1", {
        transform: "translate(-20vw, 0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-1",
        {
          transform: "translate(-20vw, 0)",
        },
        {
          transform: "translate(101vw, 0)",
          duration: 200,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );

    let ComingSoonCloud2Anim = gsap.timeline();
    ComingSoonCloud2Anim.fromTo(
      ".comingsoon-cloud-2",
      {
        transform: "translate(10vw,0)",
      },
      {
        transform: "translate(101vw,0)",
        duration: 125,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-2", {
        transform: "translate(  -10vw,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-2",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 250,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );
    let ComingSoonCloud3Anim = gsap.timeline();
    ComingSoonCloud3Anim.fromTo(
      ".comingsoon-cloud-3",
      {
        transform: "translate(90vw  ,0)",
      },
      {
        transform: "translate( 101vw ,0)",
        duration: 20,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-3", {
        transform: "translate( -10vw ,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-3",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 225,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );

    let ComingSoonPageAnim = gsap.timeline();
    ComingSoonPageAnim.fromTo(
      ".sh-heading",
      {
        y: "20rem",
        opacity: 0,
      },
      {
        y: "0",
        opacity: 1,
        ease: Power3.easeInOut,
        duration: 1,
        delay: 0.5,
      }
    )
      .fromTo(
        ".section-heading p",
        {
          y: "20rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 1,
        },
        "<0.1"
      )
      .fromTo(
        ".hc-time-box",
        {
          scale: "0",
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 1,
          stagger: 0.1,
        },
        "<0.1"
      )
      .fromTo(
        ".coomsoonlast > p",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 1,
        },
        "<0.1"
      )
      .fromTo(
        ".coomsooninput",
        {
          scale: "0",
          opacity: 0,
        },
        {
          scale: "1",
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 1.25,
        },
        "<0.1"
      )
      .fromTo(
        ".coomsooninput input",
        {
          width: "0",
          padding: "0",
        },
        {
          width: "27.5rem",
          padding: "0 1rem",
          ease: Power3.easeInOut,
          duration: 1,
        },
        "<0.5"
      )
      .fromTo(
        ".coomsoonicons a",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 1,
          stagger: 0.05,
        },
        "<0"
      );
  }, []);

  return (
    <div
      className={`app comesoonpage ${
        isLightTheme ? "light-theme" : "dark-theme"
      }`}
    >
      <img
        className="hr-bg-light light-img object-position-top"
        src={HeroBgLight}
        alt="HeroBgLight"
      />
      <img
        className="hr-bg-dark dark-img comingsoon-dark-bg"
        src={HeroBgDark}
        alt="HeroBgDark"
      />
      <img src={Moon} alt="Moon" className="comingsoon-moon dark-img" />
      <img
        src={Cloud1Light}
        alt="Cloud1Light"
        className="comingsoon-cloud-1 light-img"
      />
      <img
        src={Cloud2Light}
        alt="Cloud2Light"
        className="comingsoon-cloud-2 light-img"
      />
      <img
        src={Cloud3Light}
        alt="Cloud3Light"
        className="comingsoon-cloud-3 light-img"
      />
      <img
        src={Cloud1Dark}
        alt="Cloud1Dark"
        className="comingsoon-cloud-1 dark-img"
      />
      <img
        src={Cloud2Dark}
        alt="CloudDarkt"
        className="comingsoon-cloud-2 dark-img"
      />
      <img
        src={Cloud3Dark}
        alt="ClouDarkht"
        className="comingsoon-cloud-3 dark-img"
      />
      {/* Header */}
      <div className="comingsoon-header">
        <Logo className="light-img" color="#1F194D" />
        <Logo className="dark-img" color="#fff" />
      </div>
      {/* Hero Section */}
      <div className="comesoonsection">
        <div className="section-heading">
          <div className="sh-heading">
            <h2>Coming Soon</h2>

            <img className="light-img" src={BlobPurple} alt="BlobPurple" />
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
                  <span>{("0" + timeLeft?.days).slice(-2)}</span>
                  <h6>Days</h6>
                </div>
              </div>
              <div className="hc-time-box">
                <div className="hc-time-box-top">
                  <span>{("0" + timeLeft?.hours).slice(-2)}</span>
                  <h6>Hours</h6>
                </div>
              </div>
              <div className="hc-time-box">
                <div className="hc-time-box-top">
                  <span>{("0" + timeLeft?.minutes).slice(-2)}</span>
                  <h6>Minutes</h6>
                </div>
              </div>
              <div className="hc-time-box hcnmar">
                <div className="hc-time-box-top">
                  <span>{("0" + timeLeft?.seconds).slice(-2)}</span>
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
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <div className="coomsoonicons">
            <a href="https://www.instagram.com/_thewhitelist_/">
              <Instagram className="light-img" color="#1F194D" />
            </a>
            <a href="https://www.instagram.com/_thewhitelist_/">
              <Instagram className="dark-img" color="#fff" />
            </a>
            <a href="https://twitter.com/_TheWhitelist_">
              <TwitterIcon className="light-img" color="#1F194D" />
            </a>
            <a href="https://twitter.com/_TheWhitelist_">
              <TwitterIcon className="dark-img" color="#fff" />
            </a>
            <a href="https://discord.gg/5y6Htj7Q">
              <Discord className="light-img" color="#1F194D" />
            </a>
            <a href="https://discord.gg/5y6Htj7Q">
              <Discord className="dark-img" color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
