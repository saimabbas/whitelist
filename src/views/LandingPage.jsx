import React, { useState } from "react";
import HeroBgLight from "./../assets/img/coming-soon-bg-light.png";
import HeroBgDark from "./../assets/img/middle-moon.png";
import Logo from "../assets/img/Logo";

const LandingPage = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  return (
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
      </div>
      <div className="wlupdatemodal">
        <div className="wlupdatecontent">
          <MdClear />
          <div className="wlupdatemainbox">
            <div className="wlupdateleft">
              <p>Wallet</p>
              <div className="wlloadingdiv"></div>
              <button>SUBSCRIBE RENEWAL</button>
              <h6>
                You are secured Until <span>Oct 22nd, 2022</span>
              </h6>
            </div>
            <div className="wlupdateright">
              <p>Account info</p>
              <div className="wlupinput">
                <label htmlFor="">Display Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="wlupinput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email Address" />
              </div>
              <button>Update Profile</button>
            </div>
          </div>
        </div>
        <div className="wlwalletdisconnect">
          <div className="wlwallettext">
            <p>My Address Wallet</p>
            <h6>1F1tAaz5x1HUXrCNLbtMDqc...4xqX</h6>
          </div>
          <button>
            <img src={Metamask} alt="" /> DISCONNECT METAMASK
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
