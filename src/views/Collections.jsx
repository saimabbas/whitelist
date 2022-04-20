import React from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Logo from "../assets/img/Logo";
import CollectionsCard from "./../assets/img/collections-card.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import LogoLight from "./../assets/img/logo-light.svg";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import VerifiedIcon from "../assets/icons/VerifiedIcon";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import VaultImg1 from "../assets/img/vault-img-1.png";
import VaultImg2 from "../assets/img/vault-img-2.png";
import VaultImg3 from "../assets/img/vault-img-3.png";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdEast,
} from "react-icons/md";
const Collections = () => {
  return (
    <div className="app light-theme">
      {/* Header */}
      <header>
        <div className="box">
          <div className="header-content">
            <div className="header-left">
              <Logo color="#1F194D" />
              {/* <img src={LogoLight} alt="LogoLight" /> */}
              <ul>
                <li>
                  <a href="#">
                    <b>P</b>rize pool
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>S</b>ubscribe
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>R</b>oadmap
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>U</b>pcoming Drops
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>M</b>eet the Team
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <MessagesIcon color="#1F194D" />
              <MoonIcon color="#1F194D" />
              <button className="light-blue-btn-filled btn-sm-ds">
                {" "}
                <WalletIcon color="#195BFF" /> Wallet
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="colmainpage">
        {/* Collection Section */}
        <img
          className="col-bg-light light-img"
          src={HeroBgLight}
          alt="HeroBgLight"
        />
        <div className="box">
          <div className="page-body-con">
            <div className="section-heading">
              <div className="sh-heading">
                <h2>Collections</h2>
                <img src={BlobPurple} alt="BlobPurple" />
              </div>
              <div className="mainroadmap"></div>
            </div>
            <div className="collections-grid">
              <div className="collections-grid-card-content">
                <div className="top-notch top-notch-pink"></div>
                <div className="collections-grid-card-left">
                  <div className="collections-user-details-box">
                    <div className="user-details-box-img">
                      <img src={VaultProfilePic} alt="VaultProfilePic" />
                    </div>
                    <div>
                      <h6>
                        Passengers <VerifiedIcon color="#50C8FB" />
                      </h6>
                    </div>
                  </div>
                  <a href="#" className="view-more-link-box">
                    <p>View collection</p>
                    <span>
                      <MdEast />
                    </span>
                  </a>
                </div>
                <div className="collections-grid-card-right">
                  <span className="round-chevron-box collections-swiper-left collections-swiper-left-1">
                    <MdKeyboardArrowLeft />
                  </span>
                  <span className="round-chevron-box collections-swiper-right collections-swiper-right-1">
                    <MdKeyboardArrowRight />
                  </span>
                  <div className="collections-swiper-box">
                    <Swiper
                      navigation={{
                        nextEl: ".collections-swiper-right-1",
                        prevEl: ".collections-swiper-left-1",
                      }}
                      modules={[Navigation]}
                      className="mySwiper"
                      spaceBetween={25}
                      slidesPerView={3}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="collections-grid-card-right-card">
                            <img src={CollectionsCard} alt="CollectionsCard" />
                            <div className="coming-tag">
                              Coming This April <span></span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="collections-grid-card-right-card">
                            <img src={CollectionsCard} alt="CollectionsCard" />
                            <div className="coming-tag">
                              Coming This April <span></span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="collections-grid-card-right-card">
                            <img src={CollectionsCard} alt="CollectionsCard" />
                            <div className="coming-tag">
                              Coming This April <span></span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="collections-grid-card-right-card">
                            <img src={CollectionsCard} alt="CollectionsCard" />
                            <div className="coming-tag">
                              Coming This April <span></span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Collections;
