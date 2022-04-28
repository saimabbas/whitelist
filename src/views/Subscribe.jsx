import React, { useState } from "react";
import BlobYellow from "../assets/img/Purpleellipse.png";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import SubscribeCard from "../components/pages/Home/SubscribeCard";
import Footer from "../components/modules/Footer";
import Header from "../components/modules/Header";
import HeaderMob from "../components/modules/HeaderMob";

const Subscribe = () => {
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
      {/* Header */}
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

      <div className="subscribepage">
        {/* Subscribe Section */}
        <section className="subimgbox">
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
                  <p>
                    Join the Whitelist by choosing your perfect option below
                  </p>
                </div>
                <div className="subscribe-grid">
                  <SubscribeCard
                    tier="Tier 1"
                    eth="0.3ETH"
                    isNotActive4="soge-not-available"
                    isNotActive5="soge-not-available"
                    isNotActive6="soge-not-available"
                    isNotActive7="soge-not-available"
                    isNotActive8="soge-not-available"
                    isNotActive9="soge-not-available"
                    isNotActive10="soge-not-available"
                    topNotchColor="top-notch-pink"
                  />
                  <SubscribeCard
                    tier="Tier 2"
                    eth="0.4ETH"
                    isNotActive7="soge-not-available"
                    isNotActive8="soge-not-available"
                    isNotActive9="soge-not-available"
                    isNotActive10="soge-not-available"
                    topNotchColor="top-notch-blue"
                  />
                  <SubscribeCard
                    tier="Tier 3"
                    eth="0.5ETH"
                    topNotchColor="top-notch-yellow"
                  />
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
