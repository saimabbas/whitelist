import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import VaultImg1 from "../assets/img/vault-img-1.png";
import VaultImg2 from "../assets/img/vault-img-2.png";
import VaultImg3 from "../assets/img/vault-img-3.png";
import VaultImg6 from "../assets/img/Vaultimg6.png";
import VaultImg7 from "../assets/img/Vaultimg7.png";
import VaultImg8 from "../assets/img/Vaultimg8.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/modules/Header";
import Support from "../assets/img/helpiconimg.png";
import Metamask from "../assets/img/metamask.png";
import { MdClear } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import VaultCollectionCard from "../components/pages/Vault/VaultCollectionCard";
import Footer from "../components/modules/Footer";
import HeaderMob from "../components/modules/HeaderMob";

const Vault = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
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
      <div className="vaultmainpage">
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
                <h2>Your collections</h2>
                <img className="light-img" src={BlobPurple} alt="BlobPurple" />
                <img
                  className="dark-img"
                  src={BlobPurpleDark}
                  alt="BlobPurpleDark"
                />
              </div>
              <h6>4 collections</h6>
            </div>
            <div className="vault-grid">
              <VaultCollectionCard
                userImg={VaultProfilePic}
                userName="Passengers"
                noOfItems={1000}
                swiperIconRight="vault-swiper-right-1"
                swiperIconLeft="vault-swiper-left-1"
              >
                <Swiper
                  navigation={{
                    nextEl: ".vault-swiper-right-1",
                    prevEl: ".vault-swiper-left-1",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={2.35}
                  breakpoints={{
                    650: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg8} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg6} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg7} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg2} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg3} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </VaultCollectionCard>
              <VaultCollectionCard
                userImg={VaultProfilePic}
                userName="Fractional Friends"
                noOfItems={1000}
                swiperIconRight="vault-swiper-right-2"
                swiperIconLeft="vault-swiper-left-2"
              >
                <Swiper
                  navigation={{
                    nextEl: ".vault-swiper-right-2",
                    prevEl: ".vault-swiper-left-2",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={2.35}
                  breakpoints={{
                    650: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg2} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg3} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg2} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg3} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </VaultCollectionCard>
              <VaultCollectionCard
                userImg={VaultProfilePic}
                userName="Walt's Vault"
                noOfItems={1000}
                swiperIconRight="vault-swiper-right-3"
                swiperIconLeft="vault-swiper-left-3"
              >
                <Swiper
                  navigation={{
                    nextEl: ".vault-swiper-right-3",
                    prevEl: ".vault-swiper-left-3",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={2.35}
                  breakpoints={{
                    650: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg2} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg6} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg2} alt="VaultImg2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide-content">
                      <img src={VaultImg3} alt="VaultImg3" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </VaultCollectionCard>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      <div className="wlcomingsoonmodal">
        <div className="wlcsmainbox">
          <div className="top-notch top-notch-orange"></div>
          <h6>Coming Soon</h6>
          <p>Join us in...</p>
          <div className="wlcstimer">
            <div className="days">
              <span>02</span>
              <h6>Days</h6>
            </div>
            <p>:</p>
            <div className="days">
              <span>02</span>
              <h6>Days</h6>
            </div>
            <p>:</p>
            <div className="days">
              <span>02</span>
              <h6>Days</h6>
            </div>
            <p>:</p>
            <div className="days">
              <span>02</span>
              <h6>Days</h6>
            </div>
          </div>
          <div className="coomsooninput">
            <input type="text" name="" id="" placeholder="Early access code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
