import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import VerifiedIcon from "../assets/icons/VerifiedIcon";
import VaultImg1 from "../assets/img/vault-img-1.png";
import VaultImg2 from "../assets/img/vault-img-2.png";
import VaultImg3 from "../assets/img/vault-img-3.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/modules/Header";

import "swiper/css";
import "swiper/css/navigation";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdEast,
} from "react-icons/md";
import VaultCollectionCard from "../components/pages/Vault/VaultCollectionCard";
import Footer from "../components/modules/Footer";

const Vault = () => {
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
      <div className="vaultmainpage">
        {/* Collection Section */}
        <img
          className="vault-bg-light light-img"
          src={HeroBgLight}
          alt="HeroBgLight"
        />
        <img
          className="vault-bg-dark dark-img"
          src={HeroBgDark}
          alt="HeroBgDark"
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
                  spaceBetween={25}
                  slidesPerView={3}
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
                userName="Passengers"
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
                  spaceBetween={25}
                  slidesPerView={3}
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
                userName="Passengers"
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
                  spaceBetween={25}
                  slidesPerView={3}
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
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Vault;
