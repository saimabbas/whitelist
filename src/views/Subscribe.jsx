import React, { useState } from "react";
import BlobYellow from "../assets/img/blob-yellow.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import Tick from "../assets/icons/Tick";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import SubscribeCard from "../components/pages/Home/SubscribeCard";
import Footer from "../components/modules/Footer";
import Header from "../components/modules/Header";

const Subscribe = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeToDarkTheme = () => {
    setIsLightTheme(false);
  };
  const changeToLightTheme = () => {
    setIsLightTheme(true);
  };
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {/* Header */}
      <Header
        changeToDarkTheme={changeToDarkTheme}
        changeToLightTheme={changeToLightTheme}
      />
      <div className="subscribepage">
        {/* Subscribe Section */}
        <section className="subimgbox">
          <img
            className="subscribe-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="subscribe-bg-dark dark-img"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <div className="app-page">
            <div className="box">
              <div className="subscribe-content subsmainpage">
                <div className="section-heading">
                  <div className="sh-heading">
                    <h2>Subscribe</h2>
                    <img
                      className="light-img"
                      src={BlobYellow}
                      alt="BlobYellow"
                    />

                    <img
                      className="dark-img"
                      src={BlobPurpleDark}
                      alt="BlobPurpleDark"
                    />
                  </div>
                  <p>Join the Whitelist by choose your perfect option below</p>
                </div>
                <div className="subscribe-grid">
                  <SubscribeCard
                    isNotActive4="soge-not-available"
                    isNotActive5="soge-not-available"
                    isNotActive6="soge-not-available"
                    isNotActive7="soge-not-available"
                    isNotActive8="soge-not-available"
                    isNotActive9="soge-not-available"
                    isNotActive10="soge-not-available"
                  />
                  <SubscribeCard
                    isNotActive7="soge-not-available"
                    isNotActive8="soge-not-available"
                    isNotActive9="soge-not-available"
                    isNotActive10="soge-not-available"
                  />
                  <SubscribeCard />
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

export default Subscribe;
