import React from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "../assets/img/hero-bg-light.png";
import HeroBgDark from "../assets/img/right-moon.png";
import CollectionsCardImg from "../assets/img/collections-card.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
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
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import CollectionsCard from "../components/pages/Collections/CollectionsCard";

const Collections = () => {
  return (
    <div className="app light-theme">
      {/* Header */}
      <Header />
      <div className="colmainpage">
        {/* Collection Section */}
        <img
          className="col-bg-light light-img"
          src={HeroBgLight}
          alt="HeroBgLight"
        />
        <img
          className="col-bg-dark dark-img"
          src={HeroBgDark}
          alt="HeroBgDark"
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
              >
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
                profileImg={VaultProfilePic}
                collectionName="Passengers"
                swiperIconLeft="collections-swiper-left-2"
                swiperIconRight="collections-swiper-right-2"
              >
                <Swiper
                  navigation={{
                    nextEl: ".collections-swiper-right-2",
                    prevEl: ".collections-swiper-left-2",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={25}
                  slidesPerView={3}
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
