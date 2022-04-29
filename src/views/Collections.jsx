import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import CollectionsCardImg from "../assets/img/collections-card.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import VaultProfilePic1 from "../assets/img/may.png";
import VaultProfilePic2 from "../assets/img/june.png";
import Header from "../components/modules/Header";
import HeaderMob from "../components/modules/HeaderMob";

import VerifiedIcon from "../assets/icons/VerifiedIcon";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdEast,
} from "react-icons/md";
import Footer from "../components/modules/Footer";
import CollectionsCard from "../components/pages/Collections/CollectionsCard";

const Collections = () => {
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

      <div className="colmainpage">
        {/* Collection Section */}
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
          <div className="page-body-con">
            <div className="section-heading">
              <div className="sh-heading">
                <h2>Collections</h2>
                <img className="light-img" src={BlobPurple} alt="BlobPurple" />
                <img
                  className="dark-img"
                  src={BlobPurpleDark}
                  alt="BlobPurpleDark"
                />
              </div>
              <div className="mainroadmap"></div>
            </div>
            <div className="collections-grid">
              <CollectionsCard
                profileImg={VaultProfilePic}
                collectionName="Passengers"
                swiperIconLeft="collections-swiper-left-1"
                swiperIconRight="collections-swiper-right-1"
                topNotchColor="top-notch-pink"
              >
                <Swiper
                  navigation={{
                    nextEl: ".collections-swiper-right-1",
                    prevEl: ".collections-swiper-left-1",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={1}
                  breakpoints={{
                    1150: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This April <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This April <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This April <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This April <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </CollectionsCard>
              <CollectionsCard
                profileImg={VaultProfilePic2}
                collectionName="Walt's Vault"
                swiperIconLeft="collections-swiper-left-2"
                swiperIconRight="collections-swiper-right-2"
                topNotchColor="top-notch-orange"
              >
                <Swiper
                  navigation={{
                    nextEl: ".collections-swiper-right-2",
                    prevEl: ".collections-swiper-left-2",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={1}
                  breakpoints={{
                    1150: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This June <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This June <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This June <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <div className="collections-grid-card-right-card">
                        <img src={CollectionsCardImg} alt="CollectionsCard" />
                        <div className="coming-tag">
                          Coming This June <span></span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </CollectionsCard>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Collections;
