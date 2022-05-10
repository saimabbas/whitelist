import React, { useState, useEffect } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/light-bg-wc.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import CollectionsCardImg from "../assets/img/collections-card.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import VaultProfilePic1 from "../assets/img/may.png";
import VaultProfilePic2 from "../assets/img/june.png";
import Header from "../components/modules/Header";
import HeaderMob from "../components/modules/HeaderMob";
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
  }, []);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
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
