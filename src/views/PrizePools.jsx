import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import VaultImg1 from "../assets/img/vault-img-1.png";
import VaultImg2 from "../assets/img/vault-img-2.png";
import VaultImg3 from "../assets/img/vault-img-3.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import PassengersLogo from "../assets/img/passengers-logo.svg";
import Header from "../components/modules/Header";

import InfoIcon from "../assets/icons/InfoIcon";
import { MdDone } from "react-icons/md";
import Footer from "../components/modules/Footer";
import HeaderMob from "../components/modules/HeaderMob";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../assets/icons/ChevronUp";
import PrizePoolsOptionMobModal from "../components/pages/PrizePools/PrizePoolsOptionMobModal";

const PrizePools = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [showInfoBox1, setShowInfoBox1] = useState(false);

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
  const showInfoBox1Fun = () => {
    setShowInfoBox1(true);
    document.body.classList.add("no-scroll");
  };
  const hideInfoBox1Fun = () => {
    setShowInfoBox1(false);
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

      <div className="prizepools">
        {/* Collection Section */}
        <img
          className="hr-bg-light light-img"
          src={HeroBgLight}
          alt="HeroBgLight"
        />
        <img
          className="hr-bg-dark dark-img"
          src={HeroBgDark}
          alt="HeroBgDark"
        />
        <div className="box">
          <div className="page-body-con">
            <div className="section-heading">
              <div className="sh-heading">
                <h2>Prize Pools</h2>
                <img className="light-img" src={BlobPurple} alt="BlobPurple" />
                <img
                  className="dark-img"
                  src={BlobPurpleDark}
                  alt="BlobPurpleDark"
                />
              </div>
              <p>
                Prize pools are another exciting reason to be apart of The
                Whitelist and its community. Each Whitelist season pass holder
                will have the ability to vote in all 3 categories. Each pool
                will open before every project drop, and close before each mint.
                The most voted items in each pool will be given away after mint.
                Each holder has one vote per pool and can not be changed after
                submission. Choose wisely.
              </p>
            </div>
            <div className="prizepools-grid">
              <div className="prizepools-grid-card">
                <div className="prizepools-grid-card-top">
                  <div className="prizepools-grid-card-top-box">
                    <div className="pgc-top-left">
                      <div className="pgc-top-left-profile">
                        <img src={VaultProfilePic} alt="VaultProfilePic" />
                      </div>

                      <img
                        className="pgc-top-left-logo"
                        src={PassengersLogo}
                        alt="PassengersLogo"
                      />
                    </div>
                    <div className="pgc-top-right">
                      <img src={VaultImg1} alt="VaultImg1" />
                      <img src={VaultImg2} alt="VaultImg2" />
                      <img src={VaultImg3} alt="VaultImg3" />
                      <img src={VaultImg1} alt="VaultImg1" />
                      <div className="pgc-top-right-swiper-box">
                        <Swiper
                          className="mySwiper"
                          spaceBetween={25}
                          slidesPerView={3.5}
                        >
                          <SwiperSlide>
                            <img src={VaultImg1} alt="VaultImg1" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={VaultImg2} alt="VaultImg2" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={VaultImg3} alt="VaultImg3" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={VaultImg1} alt="VaultImg1" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prizepools-grid-card-bottom">
                  <div className="pgc-bottom-content">
                    <div className="voting-closed">
                      <div className="vc-grid">
                        <div className="vc-grid-card">
                          <h6>
                            <span>A</span> Pool
                          </h6>
                          <h5>A Mac laptop device</h5>
                        </div>
                        <div className="vc-grid-card">
                          <h6>
                            <span>B</span> Pool
                          </h6>
                          <h5>A Tesla car</h5>
                        </div>
                        <div className="vc-grid-card">
                          <h6>
                            <span>C</span> Pool
                          </h6>
                          <h5>Around the world in 80 days</h5>
                        </div>
                        <div className="voting-closed-tag">Voting closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prizepools-grid-card prizepools-grid-card-voting-active">
                <div className="prizepools-grid-card-top">
                  <div className="prizepools-grid-card-top-box">
                    <div className="pgc-top-left">
                      <div className="pgc-top-left-profile">
                        <img src={VaultProfilePic} alt="VaultProfilePic" />
                      </div>
                      <h6>Fractional Friends</h6>
                    </div>
                    <div className="pgc-top-right">
                      <img src={VaultImg1} alt="VaultImg1" />
                      <img src={VaultImg2} alt="VaultImg2" />
                      <img src={VaultImg3} alt="VaultImg3" />
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </div>
                </div>
                <div className="prizepools-grid-card-bottom">
                  <div className="pgc-bottom-content">
                    <div className="voting-open">
                      <div className="vo-grid">
                        <div className="vo-grid-card">
                          <div className="vo-grid-card-head">
                            <div className="top-notch top-notch-purple"></div>
                            <p>
                              <span>A</span> POOL
                            </p>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>1x board ape NFT’s</h6>
                                  <p>
                                    The winner will get the choice of ape within
                                    the first 3 of floor price and purchased
                                    through openseas.io. Winner will get the
                                    choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p>1x board ape NFT’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>1x Ferrari 488</h6>
                                  <p>
                                    2017-2021 Ferrari 488. Color and spec based
                                    on availability. Winner Must follow pricing
                                    guidelines 0-300,000 USD. Vehicle can be
                                    purchase where the winner is located or
                                    shipped from the UAE subject to receiving
                                    countries export laws. Winner will get the
                                    choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p>1x Ferrari 488</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-1" />
                                <label htmlFor="vo-1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>1x McLaren 720 </h6>
                                  <p>
                                    Description- 2018-2021 McLaren 720. Color
                                    and spec based on availability. Winner Must
                                    follow pricing guidelines between 0-300,000
                                    USD. Vehicle can be purchase where the
                                    winner is located or shipped from the UAE
                                    subject to receiving countries export laws.
                                    Winner will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>1x McLaren 720 </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-2" />
                                <label htmlFor="vo-2">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 1x Nissan GTR</h6>
                                  <p>
                                    2018-2021 Nissan GTR. Color and spec based
                                    on availability. Winner Must follow pricing
                                    guidelines between 0-300,000 USD. Vehicle
                                    can be purchase where the winner is located
                                    or shipped from the UAE subject to receiving
                                    countries export laws. Winner will get the
                                    choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p> 1x Nissan GTR</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-3" />
                                <label htmlFor="vo-3">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 5x vacations to Disney land </h6>
                                  <p>
                                    Winners of the Disney prize pool will work
                                    with our dedicated prize pool managers to
                                    plan out their dream vacation. Packages will
                                    include theme park tickets, accommodations
                                    and flights. Pricing guidelines for this
                                    package is 0-20,000USD per winner. Winners
                                    will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p> 5x vacations to Disney land </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-4" />
                                <label htmlFor="vo-4">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>20x cash prizes of 10,000USD</h6>
                                  <p>
                                    Winners will receive 10,000USD in their
                                    choice of BUSD, USDT, ETH or BTC.
                                  </p>
                                </div>
                              </div>
                              <p> 20x cash prizes of 10,000USD</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-5" />
                                <label htmlFor="vo-5">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 1x Lamborghini Huracan</h6>
                                  <p>
                                    2018-2021 Lamborghini Huracan. Color and
                                    spec based on availability. Winner Must
                                    follow pricing guidelines between 0-300,000
                                    USD. Vehicle can be purchase where the
                                    winner is located or shipped from the UAE
                                    subject to receiving countries export laws.
                                    Winner will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p> 1x Lamborghini Huracan </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-6" />
                                <label htmlFor="vo-6">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 4x 50k worth of ETH</h6>
                                  <p>
                                    4 winners will receive 50,000 USD worth of
                                    ETH.
                                  </p>
                                </div>
                              </div>
                              <p> 4x 50k worth of ETH </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-7" />
                                <label htmlFor="vo-7">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 2x Converted sprinter vans </h6>
                                  <p>
                                    Winner will receive a custom Sprint of there
                                    choice and built to their spec. Company’s to
                                    choose to build from are the following.
                                    Sportsmobile, SYNC Vans, Van Works,
                                    Beartooth Vanworks, CampoVans, Momentum
                                    Vans. Winners Must follow pricing guidelines
                                    between 0-100,000 USD. Winners will get the
                                    choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p> 2x Converted sprinter vans </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-8" />
                                <label htmlFor="vo-8">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 1X Richard Mille </h6>
                                  <p>
                                    Model and spec based on availability. User
                                    Must follow pricing guidelines between
                                    0-300,000 USD. Winner will get the choice of
                                    prize won or equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>1X Richard Mille</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-9" />
                                <label htmlFor="vo-9">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vo-grid-card">
                          <div className="vo-grid-card-head">
                            <div className="top-notch top-notch-magenda"></div>
                            <p>
                              <span>B</span> POOL
                            </p>
                          </div>
                          <div className="vo-option vo-option-active">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>4x Mutant apes </h6>
                                  <p>
                                    The winners will get the choice of ape
                                    within the first 8 of floor price and
                                    purchased through openseas.io. Winners will
                                    get the choice of prize won or equivalent
                                    cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>4x Mutant apes </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input
                                  type="checkbox"
                                  name=""
                                  id="vo-11"
                                  defaultChecked={true}
                                />
                                <label htmlFor="vo-11">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x Tesla model X or Y’s</h6>
                                  <p>
                                    2018-2021 Tesla model X or Y’s. Color and
                                    spec based on availability. Winners Must
                                    follow pricing guidelines between 0-100,000
                                    USD. Vehicle can be purchase where the
                                    winner is located or shipped from the UAE
                                    subject to receiving countries export laws.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>2x Tesla model X or Y’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-12" />
                                <label htmlFor="vo-12">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x jeep wranglers </h6>
                                  <p>
                                    2018-2021 Jeep Wranglers. Color and spec
                                    based on availability. Winners Must follow
                                    pricing guidelines between 0-100,000 USD.
                                    Vehicle can be purchase where the winner is
                                    located or shipped from the UAE subject to
                                    receiving countries export laws. Winners
                                    will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>2x jeep wranglers </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-13" />
                                <label htmlFor="vo-13">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>10x Dream gaming set ups </h6>
                                  <p>
                                    Spec based on part availability. Winners
                                    Must follow pricing guidelines between
                                    0-10,000 USD. PC’s will ship from the UAE or
                                    have the option to build at a local
                                    retailer. Winners will get the choice of
                                    prize won or equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>10x Dream gaming set ups </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-14" />
                                <label htmlFor="vo-14">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>3x Rolexes </h6>
                                  <p>
                                    Spec based on availability. Winners Must
                                    follow pricing guidelines between 0-25,000
                                    USD. Watches will ship from the UAE or have
                                    the option to purchase at a local retailer.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout
                                  </p>
                                </div>
                              </div>
                              <p>3x Rolexes </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-15" />
                                <label htmlFor="vo-15">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x World cup trip </h6>
                                  <p>
                                    Winners of the World Cup Trip Prize pool
                                    will work with our dedicated prize pool
                                    managers to plan out their dream World cup
                                    trip. Pricing guidelines for this package is
                                    0-20,000USD per winner. Packages will
                                    include 2 tickets to the world cup,
                                    accommodations and flights. Winners will get
                                    the choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p>2x World cup trip </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-16" />
                                <label htmlFor="vo-16">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 2x 2023 super bowl trip </h6>
                                  <p>
                                    Winners of the World Cup Trip Prize pool
                                    will work with our dedicated prize pool
                                    managers to plan out their dream Superbowl
                                    trip. Pricing guidelines for this package is
                                    0-20,000USD per winner. Packages will
                                    include 2 tickets to the 2023 Superbowl,
                                    accommodations and flights. Winners will get
                                    the choice of prize won or equivalent cash
                                    payout.
                                  </p>
                                </div>
                              </div>
                              <p> 2x 2023 super bowl trip</p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-17" />
                                <label htmlFor="vo-17">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x Dubai adventure trip </h6>
                                  <p>
                                    Winners of the Dubai adventure prize pool
                                    will work with our dedicated prize pool
                                    managers to plan out their dream vacation.
                                    Packages will include accommodations,
                                    activities and flights. Pricing guidelines
                                    for this package is 0-20,000USD per winner.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>2x Dubai adventure trip </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-18" />
                                <label htmlFor="vo-18">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 2x African adventure trip</h6>
                                  <p>
                                    Winners of the African adventure prize pool
                                    will work with our dedicated prize pool
                                    managers to plan out their dream vacation.
                                    Packages will include accommodations,
                                    activities and flights. Pricing guidelines
                                    for this package is 0-20,000USD per winner.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p> 2x African adventure trip </p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-19" />
                                <label htmlFor="vo-19">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6> 4x 25,000k </h6>
                                  <p>
                                    4 Whitelist winners will receive 25,000 USD
                                    in their choice of BUSD, USDT, ETH or BTC.
                                  </p>
                                </div>
                              </div>
                              <p> 4x 25,000k</p>
                            </div>
                            <div className="vo-option-right">
                              <h6>35</h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-20" />
                                <label htmlFor="vo-20">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog"></div>
                          </div>
                        </div>
                        <div className="vo-grid-card">
                          <div className="vo-grid-card-head">
                            <div className="top-notch top-notch-pink"></div>
                            <p>
                              <span>C</span> POOL
                            </p>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>50x Xbox Series X</h6>
                                  <p>
                                    Xbox’s will ship from the UAE. Winners will
                                    get the choice of prize won or equivalent
                                    cash payout. (1TB model)
                                  </p>
                                </div>
                              </div>
                              <p>50x Xbox Series X</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-21" />
                                <label htmlFor="vo-21">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>50x PlayStation 5</h6>
                                  <p>
                                    PlayStation’s will ship from the UAE.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout. (1TB model)
                                  </p>
                                </div>
                              </div>
                              <p>50x PlayStation 5</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-22" />
                                <label htmlFor="vo-22">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>10x MacBook Pro’s</h6>
                                  <p>
                                    MacBook’s will ship from the UAE. Winners
                                    will get the choice of prize won or
                                    equivalent cash payout. (MacBook Pro, 2021
                                    model, 14’, M1 pro, 512 GB, 16GB Ram)
                                  </p>
                                </div>
                              </div>
                              <p>10x MacBook Pro’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-23" />
                                <label htmlFor="vo-23">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>25x iPhone 13 ProMax</h6>
                                  <p>
                                    Iphone’s will ship from the UAE. Winners
                                    will get the choice of prize won or
                                    equivalent cash payout. (512-1TB model)
                                  </p>
                                </div>
                              </div>
                              <p>25x iPhone 13 ProMax</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-24" />
                                <label htmlFor="vo-24">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>25 Peloton’s</h6>
                                  <p>
                                    Peloton will ship Directly from Peleton.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout. Bike ultimate
                                    package
                                  </p>
                                </div>
                              </div>
                              <p>25 Peloton’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-25" />
                                <label htmlFor="vo-25">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x Louis Vuitton travel sets</h6>
                                  <p>
                                    LV luggage sets will ship from the UAE.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout. (1x Travel Bag, 2x
                                    rolling luggage, 2x travel accessories)
                                  </p>
                                </div>
                              </div>
                              <p>2x Louis Vuitton travel sets</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-26" />
                                <label htmlFor="vo-26">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>20x Microsoft surface pro’s</h6>
                                  <p>
                                    Microsoft Surface pro’s will ship from the
                                    UAE. Winners will get the choice of prize
                                    won or equivalent cash payout. (2021 model,
                                    13’, intel core I7, 512-1TB, 16GB Ram)
                                  </p>
                                </div>
                              </div>
                              <p>20x Microsoft surface pro’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-27" />
                                <label htmlFor="vo-27">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x invisible friends </h6>
                                  <p>
                                    The winners will get the choice of an
                                    invisible friend within the first 4 of floor
                                    price and purchased through openseas.io.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout.
                                  </p>
                                </div>
                              </div>
                              <p>2x invisible friends </p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-28" />
                                <label htmlFor="vo-28">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>25 Peloton’s</h6>
                                  <p>
                                    Peloton will ship Directly from Peleton.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout. Bike ultimate
                                    package
                                  </p>
                                </div>
                              </div>
                              <p>25 Peloton’s</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-25" />
                                <label htmlFor="vo-25">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon
                                  className="light-img"
                                  color="#1F194D"
                                />
                                <InfoIcon className="dark-img" color="#fff" />
                                <div className="vo-info-box-content">
                                  <h6>2x Louis Vuitton travel sets</h6>
                                  <p>
                                    LV luggage sets will ship from the UAE.
                                    Winners will get the choice of prize won or
                                    equivalent cash payout. (1x Travel Bag, 2x
                                    rolling luggage, 2x travel accessories)
                                  </p>
                                </div>
                              </div>
                              <p>2x Louis Vuitton travel sets</p>
                            </div>
                            <div className="vo-option-right">
                              <h6></h6>
                              <div className="vo-option-checkbox">
                                <input type="checkbox" name="" id="vo-26" />
                                <label htmlFor="vo-26">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="voting-open-mob">
                      <div className="voting-open-mob-acc">
                        <Accordion>
                          <Accordion.Item eventKey={1}>
                            <Accordion.Header>
                              <div className="voting-open-mob-acc-header">
                                <div className="top-notch top-notch-purple"></div>
                                <h4>
                                  <span>A</span> POOL
                                </h4>
                                <ChevronUp className="dark-img" color="#fff" />
                                <ChevronUp
                                  className="light-img"
                                  color="#1F194D"
                                />
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="vo-grid-card">
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <div
                                        className="info-icon"
                                        onClick={showInfoBox1Fun}
                                      >
                                        <InfoIcon
                                          className="light-img"
                                          color="#1F194D"
                                        />
                                        <InfoIcon
                                          className="dark-img"
                                          color="#fff"
                                        />
                                      </div>
                                      <div className="vo-info-box-content">
                                        <h6>1x board ape NFT’s</h6>
                                        <p>
                                          The winner will get the choice of ape
                                          within the first 3 of floor price and
                                          purchased through openseas.io. Winner
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>1x board ape NFT’s</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input type="checkbox" name="" id="id1" />
                                      <label htmlFor="id1">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>1x Ferrari 488</h6>
                                        <p>
                                          2017-2021 Ferrari 488. Color and spec
                                          based on availability. Winner Must
                                          follow pricing guidelines 0-300,000
                                          USD. Vehicle can be purchase where the
                                          winner is located or shipped from the
                                          UAE subject to receiving countries
                                          export laws. Winner will get the
                                          choice of prize won or equivalent cash
                                          payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>1x Ferrari 488</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-1"
                                      />
                                      <label htmlFor="vo-1">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>1x McLaren 720 </h6>
                                        <p>
                                          Description- 2018-2021 McLaren 720.
                                          Color and spec based on availability.
                                          Winner Must follow pricing guidelines
                                          between 0-300,000 USD. Vehicle can be
                                          purchase where the winner is located
                                          or shipped from the UAE subject to
                                          receiving countries export laws.
                                          Winner will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>1x McLaren 720 </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-2"
                                      />
                                      <label htmlFor="vo-2">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 1x Nissan GTR</h6>
                                        <p>
                                          2018-2021 Nissan GTR. Color and spec
                                          based on availability. Winner Must
                                          follow pricing guidelines between
                                          0-300,000 USD. Vehicle can be purchase
                                          where the winner is located or shipped
                                          from the UAE subject to receiving
                                          countries export laws. Winner will get
                                          the choice of prize won or equivalent
                                          cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 1x Nissan GTR</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-3"
                                      />
                                      <label htmlFor="vo-3">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 5x vacations to Disney land </h6>
                                        <p>
                                          Winners of the Disney prize pool will
                                          work with our dedicated prize pool
                                          managers to plan out their dream
                                          vacation. Packages will include theme
                                          park tickets, accommodations and
                                          flights. Pricing guidelines for this
                                          package is 0-20,000USD per winner.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 5x vacations to Disney land </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-4"
                                      />
                                      <label htmlFor="vo-4">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>20x cash prizes of 10,000USD</h6>
                                        <p>
                                          Winners will receive 10,000USD in
                                          their choice of BUSD, USDT, ETH or
                                          BTC.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 20x cash prizes of 10,000USD</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-5"
                                      />
                                      <label htmlFor="vo-5">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 1x Lamborghini Huracan</h6>
                                        <p>
                                          2018-2021 Lamborghini Huracan. Color
                                          and spec based on availability. Winner
                                          Must follow pricing guidelines between
                                          0-300,000 USD. Vehicle can be purchase
                                          where the winner is located or shipped
                                          from the UAE subject to receiving
                                          countries export laws. Winner will get
                                          the choice of prize won or equivalent
                                          cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 1x Lamborghini Huracan </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-6"
                                      />
                                      <label htmlFor="vo-6">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 4x 50k worth of ETH</h6>
                                        <p>
                                          4 winners will receive 50,000 USD
                                          worth of ETH.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 4x 50k worth of ETH </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-7"
                                      />
                                      <label htmlFor="vo-7">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 2x Converted sprinter vans </h6>
                                        <p>
                                          Winner will receive a custom Sprint of
                                          there choice and built to their spec.
                                          Company’s to choose to build from are
                                          the following. Sportsmobile, SYNC
                                          Vans, Van Works, Beartooth Vanworks,
                                          CampoVans, Momentum Vans. Winners Must
                                          follow pricing guidelines between
                                          0-100,000 USD. Winners will get the
                                          choice of prize won or equivalent cash
                                          payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 2x Converted sprinter vans </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-8"
                                      />
                                      <label htmlFor="vo-8">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 1X Richard Mille </h6>
                                        <p>
                                          Model and spec based on availability.
                                          User Must follow pricing guidelines
                                          between 0-300,000 USD. Winner will get
                                          the choice of prize won or equivalent
                                          cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>1X Richard Mille</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6></h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-9"
                                      />
                                      <label htmlFor="vo-9">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion>
                          <Accordion.Item eventKey={1}>
                            <Accordion.Header>
                              <div className="voting-open-mob-acc-header">
                                <div className="top-notch top-notch-magenda"></div>
                                <h4>
                                  <span>B</span> POOL
                                </h4>
                                <ChevronUp className="dark-img" color="#fff" />
                                <ChevronUp
                                  className="light-img"
                                  color="#1F194D"
                                />
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="vo-grid-card">
                                <div className="vo-option vo-option-active">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>4x Mutant apes </h6>
                                        <p>
                                          The winners will get the choice of ape
                                          within the first 8 of floor price and
                                          purchased through openseas.io. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>4x Mutant apes </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-11"
                                        defaultChecked={true}
                                      />
                                      <label htmlFor="vo-11">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x Tesla model X or Y’s</h6>
                                        <p>
                                          2018-2021 Tesla model X or Y’s. Color
                                          and spec based on availability.
                                          Winners Must follow pricing guidelines
                                          between 0-100,000 USD. Vehicle can be
                                          purchase where the winner is located
                                          or shipped from the UAE subject to
                                          receiving countries export laws.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x Tesla model X or Y’s</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-12"
                                      />
                                      <label htmlFor="vo-12">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x jeep wranglers </h6>
                                        <p>
                                          2018-2021 Jeep Wranglers. Color and
                                          spec based on availability. Winners
                                          Must follow pricing guidelines between
                                          0-100,000 USD. Vehicle can be purchase
                                          where the winner is located or shipped
                                          from the UAE subject to receiving
                                          countries export laws. Winners will
                                          get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x jeep wranglers </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-13"
                                      />
                                      <label htmlFor="vo-13">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>10x Dream gaming set ups </h6>
                                        <p>
                                          Spec based on part availability.
                                          Winners Must follow pricing guidelines
                                          between 0-10,000 USD. PC’s will ship
                                          from the UAE or have the option to
                                          build at a local retailer. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>10x Dream gaming set ups </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-14"
                                      />
                                      <label htmlFor="vo-14">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>3x Rolexes </h6>
                                        <p>
                                          Spec based on availability. Winners
                                          Must follow pricing guidelines between
                                          0-25,000 USD. Watches will ship from
                                          the UAE or have the option to purchase
                                          at a local retailer. Winners will get
                                          the choice of prize won or equivalent
                                          cash payout
                                        </p>
                                      </div>
                                    </div>
                                    <p>3x Rolexes </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-15"
                                      />
                                      <label htmlFor="vo-15">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x World cup trip </h6>
                                        <p>
                                          Winners of the World Cup Trip Prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream World cup trip. Pricing
                                          guidelines for this package is
                                          0-20,000USD per winner. Packages will
                                          include 2 tickets to the world cup,
                                          accommodations and flights. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x World cup trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-16"
                                      />
                                      <label htmlFor="vo-16">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 2x 2023 super bowl trip </h6>
                                        <p>
                                          Winners of the World Cup Trip Prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream Superbowl trip. Pricing
                                          guidelines for this package is
                                          0-20,000USD per winner. Packages will
                                          include 2 tickets to the 2023
                                          Superbowl, accommodations and flights.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 2x 2023 super bowl trip</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-17"
                                      />
                                      <label htmlFor="vo-17">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x Dubai adventure trip </h6>
                                        <p>
                                          Winners of the Dubai adventure prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream vacation. Packages will include
                                          accommodations, activities and
                                          flights. Pricing guidelines for this
                                          package is 0-20,000USD per winner.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x Dubai adventure trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-18"
                                      />
                                      <label htmlFor="vo-18">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 2x African adventure trip</h6>
                                        <p>
                                          Winners of the African adventure prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream vacation. Packages will include
                                          accommodations, activities and
                                          flights. Pricing guidelines for this
                                          package is 0-20,000USD per winner.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 2x African adventure trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-19"
                                      />
                                      <label htmlFor="vo-19">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 4x 25,000k </h6>
                                        <p>
                                          4 Whitelist winners will receive
                                          25,000 USD in their choice of BUSD,
                                          USDT, ETH or BTC.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 4x 25,000k</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-20"
                                      />
                                      <label htmlFor="vo-20">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="vo-option-prog"></div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion>
                          <Accordion.Item eventKey={1}>
                            <Accordion.Header>
                              <div className="voting-open-mob-acc-header">
                                <div className="top-notch top-notch-pink"></div>
                                <h4>
                                  <span>C</span> POOL
                                </h4>
                                <ChevronUp className="dark-img" color="#fff" />
                                <ChevronUp
                                  className="light-img"
                                  color="#1F194D"
                                />
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="vo-grid-card">
                                <div className="vo-option vo-option-active">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>4x Mutant apes </h6>
                                        <p>
                                          The winners will get the choice of ape
                                          within the first 8 of floor price and
                                          purchased through openseas.io. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>4x Mutant apes </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-11"
                                        defaultChecked={true}
                                      />
                                      <label htmlFor="vo-11">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x Tesla model X or Y’s</h6>
                                        <p>
                                          2018-2021 Tesla model X or Y’s. Color
                                          and spec based on availability.
                                          Winners Must follow pricing guidelines
                                          between 0-100,000 USD. Vehicle can be
                                          purchase where the winner is located
                                          or shipped from the UAE subject to
                                          receiving countries export laws.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x Tesla model X or Y’s</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-12"
                                      />
                                      <label htmlFor="vo-12">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x jeep wranglers </h6>
                                        <p>
                                          2018-2021 Jeep Wranglers. Color and
                                          spec based on availability. Winners
                                          Must follow pricing guidelines between
                                          0-100,000 USD. Vehicle can be purchase
                                          where the winner is located or shipped
                                          from the UAE subject to receiving
                                          countries export laws. Winners will
                                          get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x jeep wranglers </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-13"
                                      />
                                      <label htmlFor="vo-13">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>10x Dream gaming set ups </h6>
                                        <p>
                                          Spec based on part availability.
                                          Winners Must follow pricing guidelines
                                          between 0-10,000 USD. PC’s will ship
                                          from the UAE or have the option to
                                          build at a local retailer. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>10x Dream gaming set ups </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-14"
                                      />
                                      <label htmlFor="vo-14">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>3x Rolexes </h6>
                                        <p>
                                          Spec based on availability. Winners
                                          Must follow pricing guidelines between
                                          0-25,000 USD. Watches will ship from
                                          the UAE or have the option to purchase
                                          at a local retailer. Winners will get
                                          the choice of prize won or equivalent
                                          cash payout
                                        </p>
                                      </div>
                                    </div>
                                    <p>3x Rolexes </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-15"
                                      />
                                      <label htmlFor="vo-15">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x World cup trip </h6>
                                        <p>
                                          Winners of the World Cup Trip Prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream World cup trip. Pricing
                                          guidelines for this package is
                                          0-20,000USD per winner. Packages will
                                          include 2 tickets to the world cup,
                                          accommodations and flights. Winners
                                          will get the choice of prize won or
                                          equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x World cup trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-16"
                                      />
                                      <label htmlFor="vo-16">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 2x 2023 super bowl trip </h6>
                                        <p>
                                          Winners of the World Cup Trip Prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream Superbowl trip. Pricing
                                          guidelines for this package is
                                          0-20,000USD per winner. Packages will
                                          include 2 tickets to the 2023
                                          Superbowl, accommodations and flights.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 2x 2023 super bowl trip</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-17"
                                      />
                                      <label htmlFor="vo-17">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6>2x Dubai adventure trip </h6>
                                        <p>
                                          Winners of the Dubai adventure prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream vacation. Packages will include
                                          accommodations, activities and
                                          flights. Pricing guidelines for this
                                          package is 0-20,000USD per winner.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p>2x Dubai adventure trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-18"
                                      />
                                      <label htmlFor="vo-18">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 2x African adventure trip</h6>
                                        <p>
                                          Winners of the African adventure prize
                                          pool will work with our dedicated
                                          prize pool managers to plan out their
                                          dream vacation. Packages will include
                                          accommodations, activities and
                                          flights. Pricing guidelines for this
                                          package is 0-20,000USD per winner.
                                          Winners will get the choice of prize
                                          won or equivalent cash payout.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 2x African adventure trip </p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-19"
                                      />
                                      <label htmlFor="vo-19">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="vo-option">
                                  <div className="vo-option-left">
                                    <div className="vo-info-box">
                                      <InfoIcon
                                        className="light-img"
                                        color="#1F194D"
                                      />
                                      <InfoIcon
                                        className="dark-img"
                                        color="#fff"
                                      />
                                      <div className="vo-info-box-content">
                                        <h6> 4x 25,000k </h6>
                                        <p>
                                          4 Whitelist winners will receive
                                          25,000 USD in their choice of BUSD,
                                          USDT, ETH or BTC.
                                        </p>
                                      </div>
                                    </div>
                                    <p> 4x 25,000k</p>
                                  </div>
                                  <div className="vo-option-right">
                                    <h6>35</h6>
                                    <div className="vo-option-checkbox">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id="vo-20"
                                      />
                                      <label htmlFor="vo-20">
                                        <div className="vo-checkbox-circle">
                                          <MdDone />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prizepools-grid-card">
                <div className="prizepools-grid-card-top">
                  <div className="prizepools-grid-card-top-box">
                    <div className="pgc-top-left">
                      <div className="pgc-top-left-profile">
                        <img src={VaultProfilePic} alt="VaultProfilePic" />
                      </div>

                      <h6>Walt's Vault </h6>
                    </div>
                    <div className="pgc-top-right">
                      <img src={VaultImg1} alt="VaultImg1" />
                      <img src={VaultImg2} alt="VaultImg2" />
                      <img src={VaultImg3} alt="VaultImg3" />
                      <img src={VaultImg1} alt="VaultImg1" />
                    </div>
                  </div>
                </div>
                <div className="prizepools-grid-card-bottom">
                  <div className="pgc-bottom-content">
                    <div className="voting-comingsoon">
                      <div>
                        <span>Voting coming soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {showInfoBox1 ? (
        <PrizePoolsOptionMobModal hideInfoBoxFun={hideInfoBox1Fun} />
      ) : null}
    </div>
  );
};

export default PrizePools;
