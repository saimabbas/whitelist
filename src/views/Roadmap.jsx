import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import { Mousewheel, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { MdDone } from "react-icons/md";

const Roadmap = () => {
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
      <div className="roadmapmainpage">
        {/* Roadmap Section */}
        <section className="roadmapmain">
          <img
            className="roadmap-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <img
            className="roadmap-bg-dark dark-img"
            src={HeroBgDark}
            alt="HeroBgDark"
          />
          <div className="app-page">
            <div className="box">
              <div className="letushelp-content hiwsection">
                <div className="section-heading">
                  <div className="sh-heading">
                    <h2>Roadmap</h2>
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
                              <div className="roadmap-step-text-bottom">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-top">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-bottom">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-top">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-bottom">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-top">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
                              <div className="roadmap-step-text-bottom">
                                <h6>UI and Site Development</h6>
                                <p>
                                  We are working to bring our users the best
                                  experience possible.{" "}
                                </p>
                              </div>
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
