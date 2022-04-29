import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import QRcode from "./../assets/img/qrcode.png";
import Wallet from "./../assets/img/wallet.png";
import WalletDark from "./../assets/img/wallet-dark.png";
import SumImg from "./../assets/img/checkoutimg.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import Header from "../components/modules/Header";
import { Link } from "react-router-dom";
import Footer from "../components/modules/Footer";
import HeaderMob from "../components/modules/HeaderMob";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../assets/icons/ChevronUp";

const Checkout = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);

  const changeToDarkTheme = () => {
    setIsLightTheme(false);
  };
  const changeToLightTheme = () => {
    setIsLightTheme(true);
  };
  const openMobHeader = () => {
    setIsHeaderMobOpen(true);
    document.body.classList.add("no-scroll");
  };
  const closeMobHeader = () => {
    setIsHeaderMobOpen(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {/* /* Header */}
      <Header
        changeToDarkTheme={changeToDarkTheme}
        changeToLightTheme={changeToLightTheme}
        openMobHeader={openMobHeader}
      />
      {isHeaderMobOpen ? (
        <HeaderMob
          changeToDarkTheme={changeToDarkTheme}
          changeToLightTheme={changeToLightTheme}
          closeMobHeader={closeMobHeader}
        />
      ) : null}
      <div className="roadmapmainpage">
        {/* Roadmap Section */}
        <section className="roadmapmain">
          <img
            className="hr-bg-light hr-bg-light-pc"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="hr-bg-light hr-bg-light-mob"
            src={HeroBgLightMob}
            alt="HeroBgLightMob"
          />
          <img
            className="hr-bg-dark hr-bg-dark-pc"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <img
            className="hr-bg-dark hr-bg-dark-mob"
            src={HeroBgDarkMob}
            alt="HeroBgDarkMob"
          />
          <div className="box">
            <div className="letushelp-content hiwsection page-body-con checkout-nm">
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
                        <img className="light-img" src={Wallet} alt="Wallet" />
                        <img
                          className="dark-img"
                          src={WalletDark}
                          alt="Wallet"
                        />
                        <p>1vtWSBkSF3wiuy1fN2..jszSf</p>
                      </div>
                      <button>Copy</button>
                    </div>
                  </div>
                </div>
                <div className="checkoutright">
                  <div className="checkoutright-pc">
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
                      <div className="choty-choty-box">
                        <span></span>
                        <div></div>
                        <span></span>
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
                  <div className="checkoutright-mob">
                    <Accordion>
                      <Accordion.Item eventKey={1}>
                        <Accordion.Header>
                          <div className="checkout-mob-acc-header">
                            <h4>Summary</h4>
                            <ChevronUp color="var(--dark-blue-white)" />
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
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
                            <div className="choty-choty-box">
                              <span></span>
                              <div></div>
                              <span></span>
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
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Checkout;
