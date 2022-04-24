import React from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import { Mousewheel, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { MdDone } from "react-icons/md";

const Roadmap = () => {
  return (
    <div className="app light-theme">
      {/* Header */}

      <Header />
      <div className="roadmapmainpage">
        {/* Roadmap Section */}
        <section className="roadmapmain">
          <img
            className="roadmap-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <div className="app-page">
            <div className="box">
              <div className="letushelp-content hiwsection">
                <div className="section-heading">
                  <div className="sh-heading">
                    <h2>Roadmap</h2>
                    <img src={BlobPurple} alt="BlobPurple" />
                  </div>
                </div>
                <div className="roadmap-content">
                  <div className="roadmap-swiper">
                    <Swiper
                      modules={[FreeMode, Mousewheel]}
                      className="mySwiper"
                      slidesPerView={"auto"}
                      freeMode={true}
                      mousewheel={true}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-startpoint">
                            <span>
                              <p>S1</p>
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step roadmap-done">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-bottom">
                                UI and Site Development
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step roadmap-current">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-top">
                                Advisory and team build out
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-bottom">
                                Community structure
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-top">Site Drop</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-bottom">
                                Voting system implementation
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-top">
                                Sample Text
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-step">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-step-dot">
                              <MdDone />
                              <div className="roadmap-step-dot-inner-1"></div>
                              <div className="roadmap-step-dot-inner-2"></div>
                              <p className="roadmap-step-text-bottom">
                                Sample Text
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide-content">
                          <div className="roadmap-endpoint-box">
                            <div className="roadmap-step-line"></div>
                            <div className="roadmap-endpoint">
                              <span>
                                <p>S1</p>
                              </span>
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
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Roadmap;
