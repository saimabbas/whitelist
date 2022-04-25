import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import QRcode from "./../assets/img/qrcode.png";
import Wallet from "./../assets/img/wallet.png";
import SumImg from "./../assets/img/checkoutimg.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import Header from "../components/modules/Header";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeToDarkTheme = () => {
    setIsLightTheme(false);
  };
  const changeToLightTheme = () => {
    setIsLightTheme(true);
  };
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {/* /* Header */}
      <Header
        changeToDarkTheme={changeToDarkTheme}
        changeToLightTheme={changeToLightTheme}
      />
      <div className="roadmapmainpage">
        {/* Roadmap Section */}
        <section className="roadmapmain">
          <img
            className="roadmap-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="roadmap-bg-dark dark-img"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <div className="box">
            <div className="letushelp-content hiwsection">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Checkout</h2>
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
              </div>
              <div className="checkoutmainpage">
                <div className="checkoutleft">
                  <h4>Process & Complete</h4>
                  <div className="coleftimg">
                    <p>
                      Transfer the amount to the following wallet and wait for
                      the confirmation message
                    </p>
                    <img src={QRcode} alt="" />
                  </div>
                  <div className="colwallet">
                    <h5>Wallet address</h5>
                    <p>Transfer to Wallet Address</p>
                    <div className="colwalbtn">
                      <div className="colwalp">
                        <img src={Wallet} alt="" />
                        <p>1vtWSBkSF3wiuy1fN2UPx1Zn5nN2jszSf</p>
                      </div>
                      <button>Copy</button>
                    </div>
                  </div>
                </div>
                <div className="checkoutright">
                  <h4>Summary</h4>
                  <div className="sumimgtext">
                    <img src={SumImg} alt="" />
                    <div className="sumtext">
                      <h6>Season 1</h6>
                      <p>Tier 3 (The Inner Circle)</p>
                      <span>View Item</span>
                    </div>
                  </div>
                  <div className="checkouttotal">
                    <div className="cotinner">
                      <p>Season 1</p>
                      <h6>0.6 ETH</h6>
                    </div>
                    <div className="cotinner">
                      <p>Gas</p>
                      <h6>0.02 ETH</h6>
                    </div>
                    <div className="cottotal">
                      <p>Total</p>
                      <h6>0.62 ETH</h6>
                    </div>
                  </div>
                  <div className="cosub">
                    <input type="text" placeholder="Promo code" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="abc">
        <Link to="/">Checkout</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/comingsoon">comingsoon</Link>
        <Link to="/comingsoondark">comingsoondark</Link>
        <Link to="/team">Team</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/howitworks">HowitWorks</Link>
        <Link to="/mintconnect">MintConnect</Link>
        <Link to="/mintdisconnect">MintDisconnect</Link>
        <Link to="/landingpage">landingpage</Link>
        <Link to="/prizepools">Prizepools</Link>
        <Link to="/subscribe">Subscribe</Link>
        <Link to="/vault">vault</Link>
      </div>
      {/* Footer */}
      <footer>
        <div className="box">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-left">
                <Logo color="#fff" />
                <p>Follow us on social media</p>
                <div className="fl-icons-grid">
                  <Instagram color="#fff" />
                  <TwitterIcon color="#fff" />
                  <Discord color="#fff" />
                </div>
              </div>
              <div className="footer-center">
                <h6>The Whitelist Info</h6>
                <div className="fc-grid">
                  <a href="#">Subscribe</a>
                  <a href="#">Upcoming Drops </a>
                  <a href="#">Roadmap</a>
                  <a href="#">
                    <b>Meet the Team</b>
                  </a>
                  <a href="#">How it Works</a>
                </div>
              </div>
              <div className="footer-right">
                <h6>Join Newsletter</h6>
                <p>
                  Subscribe our newsletter to get latest <Logo color="#fff" />
                  updates
                </p>
                <div className="fr-subscribe-input-box">
                  <input type="text" placeholder="Enter your Email " />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2022. All rights reserved</p>
        </div>
        <div className="more-btn">
          More <RefreshIcon color="#fff" />
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
