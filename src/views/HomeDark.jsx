import { gsap } from "gsap";
import {
  Back, Power3
} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useState } from "react";
import { Accordion, Dropdown, Spinner } from "react-bootstrap";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdExpandMore, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Bell from "../assets/icons/Bell";
import Collection from "../assets/icons/Collection";
import Logout from "../assets/icons/Logout";
import Menu from "../assets/icons/Menu";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import Profile from "../assets/icons/Profile";
import SunIcon from "../assets/icons/SunIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import BlobPurpleDark from "../assets/img/blob-gray.png";
import BlobGreen from "../assets/img/blob-green.svg";
import BlobGreen2 from "../assets/img/blob-green2.png";
import BlobLightBlue from "../assets/img/blob-lightblue.svg";
import BlobLightBlue2 from "../assets/img/blob-lightblue2.png";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurple2 from "../assets/img/blob-purple2.png";
import BlobYellow from "../assets/img/blob-yellow.svg";
import BlobYellow2 from "../assets/img/blob-yellow2.png";
import BlueTick from "../assets/img/bluetick.png";
import HeroImg from "../assets/img/hero-img-1.png";
import Logo from "../assets/img/Logo";
import Footer from "../components/modules/Footer";
import HeaderMob from "../components/modules/HeaderMob";
import HomeCollectionsCard from "../components/pages/Home/HomeCollectionsCard";
import LetUsHelpCard from "../components/pages/Home/LetUsHelpCard";
import ProfileDetailsModal from "../components/pages/Home/ProfileDetailsModal";
import SubscribeCard from "../components/pages/Home/SubscribeCard";
import { WalletUserContext } from "../contexts/wallet-context";
import { shortenAddress, toYdecimalPlace } from "../utils/constants";
import Cloud1Dark from "./../assets/img/cloud-1-dark.png";
import Cloud1Light from "./../assets/img/cloud-1.png";
import Cloud2Dark from "./../assets/img/cloud-2-dark.png";
import Cloud2Light from "./../assets/img/cloud-2.png";
import CollectionsBg from "./../assets/img/collections-bg.svg";
import CollectionsBg2 from "./../assets/img/collections-bg2.png";
import CollectionsCard from "./../assets/img/collections-card.png";
import HeroBgDark from "./../assets/img/dark-bg-without-clouds.png";
import EllipseYellow from "./../assets/img/ellipse-yellow.svg";
import HeroGlareLight from "./../assets/img/glare-light.svg";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroGlareDark from "./../assets/img/hero-glare-dark.png";
import AboutImg from "./../assets/img/home-about-img.png";
import HeroBgLight from "./../assets/img/light-bg-without-clouds.png";
import LogoLight from "./../assets/img/logo-light.svg";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import LoadingPage from "./LoadingPageDark";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  SwiperCore.use([Pagination]);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { state, connectMetamask, disconnectWallet } = WalletUserContext();
  const { account, balance, isBalanceLoading, isWalletConnected, userSubscription } = state;

  const handleWalletConnect = () => {
    connectMetamask();
  };

  const handleDisconnect = () => {
    disconnectWallet();
  };

  const showProfileDetailsModal = () => {
    setShowProfileModal(true);
    document.body.classList.add("no-scroll");
  };
  const hideProfileDetailsModal = () => {
    setShowProfileModal(false);
    document.body.classList.remove("no-scroll");
  };
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
    const heroP = new SplitText(".hero-left p", {
      type: "lines",
    });
    const heroPLines = heroP.lines;
    const aboutRightP = new SplitText(".about-right .about-right-p", {
      type: "lines",
    });
    const aboutRightPLines = aboutRightP.lines;
    /* const aboutRightH5 = new SplitText(".about-right .about-right-h5", {
      type: "lines",
    });
    const aboutRightH5Lines = aboutRightH5.lines; */
    let homeAnim = gsap.timeline({
      delay: 4,
    });
    homeAnim
      .to(".home-loading", {
        top: "-150%",
        duration: 1,
        ease: Power3.easeInOut,
      })
      .to(
        ".home-loading",
        {
          opacity: 0,
          duration: 1,
          ease: Power3.easeInOut,
        },
        "<0.5"
      )
      .fromTo(
        ".swiper-slide-content",
        {
          opacity: 0,
          y: "25rem",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".home-cloud-1",
        {
          opacity: 0,
          x: "15rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".home-cloud-2",
        {
          opacity: 0,
          x: "25rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: Back.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        heroPLines,
        {
          opacity: 0,
          x: "10rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".hero-countdopwn-box h6",
        {
          opacity: 0,
          x: "10rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".hero-left h1",
        {
          opacity: 0,
          x: "10rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".hc-time-box-top span",
        {
          x: "5rem",
        },
        {
          x: 0,
          duration: 1,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".hc-time-box-top span",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0.25"
      )
      .fromTo(
        ".hero-swiper-box .swiper-pagination-bullet",
        {
          x: "1.5rem",
        },
        {
          x: 0,
          duration: 1,
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".hsb-round-btns-box > span",
        {
          opacity: 0,
          x: "2.5rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: Back.easeInOut,
        },
        "<0"
      );
    let homeAboutAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
      },
    });
    homeAboutAnim
      .fromTo(
        ".about-left img",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        }
      )

      .fromTo(
        ".about-right h6",
        {
          x: "7.5rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".about-right-h5",
        {
          x: "7.5rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: Back.easeInOut,
        },
        "<0.15"
      )
      .fromTo(
        aboutRightPLines,
        {
          x: "7.5rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: Back.easeInOut,
        },
        "<0.15"
      )
      .fromTo(
        ".about-right > img",
        {
          x: "7.5rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0.15"
      );

    let homeCollectionsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".collections",
        start: "top 100%",
      },
    });
    homeCollectionsAnim
      .fromTo(
        ".collections .section-heading .sh-heading",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        ".collections .section-heading p",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".collections-grid > *",
        {
          y: "15rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Back.easeInOut,
        },
        "<0"
      );

    let homeSubscribeAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".subscribe",
        start: "top 100%",
      },
    });
    homeSubscribeAnim
      .fromTo(
        ".subscribe .section-heading .sh-heading",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        ".subscribe .section-heading p",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".subscribe-grid > *",
        {
          y: "25rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Back.easeInOut,
        },
        "<0"
      );
    let homeLetUsHelpAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".letushelp",
        start: "top 100%",
      },
    });
    homeLetUsHelpAnim
      .fromTo(
        ".letushelp .section-heading .sh-heading",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        ".letushelp .section-heading p",
        {
          y: "10rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".letushelp-grid > .accordion > *",
        {
          x: "25rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Back.easeInOut,
        },
        "<0"
      );
  }, []);
  useEffect(() => {
    let headerAnim = gsap.timeline({
      delay: 4,
    });
    headerAnim
      .fromTo(
        ".header-left .header-logo",
        {
          opacity: 0,
          x: "25rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 1.5,
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        ".header-left ul li",
        {
          opacity: 0,
          x: "25rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 1.5,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".header-right-icon",
        {
          opacity: 0,
          x: "2.5rem",
        },
        {
          opacity: 1,
          delay: 0.5,
          x: "0",
          duration: 1.5,
          ease: Back.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".header-right button",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".header-right button",
        {
          width: "5rem",
        },
        {
          width: "15rem",
          duration: 1.25,
          ease: Back.easeOut,
        },
        "<0.9"
      )
      .fromTo(
        ".header-right button span",
        {
          width: 0,
          x: "2.5rem",
          opacity: 0,
        },
        {
          width: "7ch",
          x: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeOut,
        },
        "<0.25"
      );
  }, []);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {/* Loading Page */}
      <LoadingPage className="home-loading" />
      {/* Header */}
      {/* <Header
        changeToDarkTheme={changeToDarkTheme}
        changeToLightTheme={changeToLightTheme}
        openMobHeader={openMobHeader}
      /> */}

      <header>
        <div className="box">
          <div className="header-content">
            <div className="header-left">
              <Link to="/home">
                <Logo className="light-img header-logo" color="#1F194D" />
                <Logo className="dark-img header-logo" color="#fff" />
              </Link>
              <div className="mobmenuicon" onClick={openMobHeader}>
                <div className="mobmenubox">
                  <Menu />
                </div>
              </div>
              {/* <img src={LogoLight} alt="LogoLight" /> */}
              <ul>
                <li>
                  <Link to="/prizepools">
                    <a>
                      <b>P</b>rize pool
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/subscribe">
                    <a>
                      <b>S</b>ubscribe
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/roadmap">
                    <a>
                      <b>R</b>oadmap
                    </a>
                  </Link>
                </li>
                <li>
                  <a>
                    <b>U</b>pcoming Drops
                  </a>
                </li>
                <li>
                  <Link to="/team">
                    <a>
                      <b>M</b>eet the Team
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="not-logged-in-box">
                <MessagesIcon
                  className="header-right-icon light-img header-right-icon"
                  color="#1F194D"
                />
                <MessagesIcon
                  className="header-right-icon dark-img header-right-icon"
                  color="#FFFF"
                />
                <div
                  className="light-img header-right-icon"
                  onClick={changeToDarkTheme}
                >
                  <MoonIcon className="header-right-icon" color="#1F194D" />
                </div>
                <div
                  className="dark-img header-right-icon"
                  onClick={changeToLightTheme}
                >
                  <SunIcon className="header-right-icon" color="#FFFF" />
                </div>
                {
                  !isWalletConnected && (
                <button
                  className="light-blue-btn-filled connect-wallet-btn"
                  // onClick={showProfileDetailsModal}
                  onClick={handleWalletConnect}
                >
                  <WalletIcon className="light-img" color="#195BFF" />
                  <WalletIcon className="dark-img" color="#fff" />
                  <span>Wallet</span>
                </button>
                  )
                }
                
              </div> 
              

            {isWalletConnected && (
                <div className="logged-in-box">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <div className="login-img-box">
                      <img src={userSubscription?.picture} alt="" />
                      {isBalanceLoading ? (
                        <>
                          <Spinner
                            animation="grow"
                            className="light-img"
                            variant="dark"
                          />
                          <Spinner
                            animation="grow"
                            className="dark-img"
                            variant="light"
                          />
                        </>
                      ) : ( 
                        <h6>{toYdecimalPlace(balance)}</h6>
                      )}
                      <p>ETH</p>
                      <MdExpandMore />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="logininfo">
                      <div className="loginnameimg">
                        <img src={userSubscription?.picture} alt="" />
                        <div className="logintext">
                          <h6>{userSubscription?.name}</h6>
                          <img src={BlueTick} alt="" />
                        </div>
                        <p>{shortenAddress(account)}</p>
                      </div>
                      <div className="loginbottombox">
                        <div className="loginicontext"
                        onClick={showProfileDetailsModal}
                        >
                          <Profile className="light-img" color="#1f194d" />
                          <Profile className="dark-img" color="#fff" />
                          <h5>Edit Profile</h5>
                        </div>
                        <div className="loginicontext">
                          <Collection className="light-img" color="#1f194d" />
                          <Collection className="dark-img" color="#fff" />
                          <h5>My Collections</h5>
                        </div>
                        <div className="loginicontext lcdisconnect"
                        onClick={handleDisconnect}
                        >
                          <Logout />
                          <h5>Disconnect</h5>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <span></span>
                <Bell className="light-img" color="#1F194D" />
                <Bell className="dark-img" color="#FFFFFF" />
              </div>
            )}
            </div>
          </div>
        </div>
        {showProfileModal ? (
          <ProfileDetailsModal
            hideProfileDetailsModal={hideProfileDetailsModal}
          />
        ) : null}
      </header>

      {isHeaderMobOpen ? (
        <HeaderMob
          changeToDarkTheme={changeToDarkTheme}
          changeToLightTheme={changeToLightTheme}
          closeMobHeader={closeMobHeader}
        />
      ) : null}
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
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
          <img
            className="light-img home-cloud-1"
            src={Cloud2Light}
            alt="Cloud2Light"
          />
          <img
            className="dark-img home-cloud-1"
            src={Cloud2Dark}
            alt="Cloud2Light"
          />
          <img
            className="light-img home-cloud-2"
            src={Cloud1Light}
            alt="Cloud1Light"
          />
          <img
            className="dark-img home-cloud-2"
            src={Cloud1Dark}
            alt="Cloud1Light"
          />
          <div className="box">
            <div className="hero-content hero-content-pc">
              <div className="hero-left">
                <h1>
                  <span>
                    <b>Welcome</b> To <br /> the <b>WhiteList.</b>
                  </span>
                  <img
                    className="light-img"
                    src={BlobPurple}
                    alt="BlobPurple"
                  />
                  <img
                    className="dark-img"
                    src={BlobPurple2}
                    alt="BlobPurple2"
                  />
                </h1>
                <p>
                  The Best Artists, Projects <br /> and Utility. No Compromise.
                </p>
                <div className="hero-countdopwn-box">
                  <h6>Join Us In...</h6>
                  <div className="hero-countdown">
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>0</span>
                        <span>5</span>
                      </div>
                      <h6>DAYS</h6>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>2</span>
                        <span>6</span>
                      </div>
                      <h6>HOURS</h6>
                    </div>
                    <div className="hc-time-box">
                      <div className="hc-time-box-top">
                        <span>1</span>
                        <span>9 </span>
                      </div>
                      <h6>MINUTES</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                <img
                  className="hero-glare light-img"
                  src={HeroGlareLight}
                  alt="hero-glare"
                />
                <img
                  className="hero-glare dark-img"
                  src={HeroGlareDark}
                  alt="hero-glare"
                />
                <div className="hero-swiper-box">
                  <div className="swiper-pagination-hero-pc"></div>
                  <Swiper
                    className="mySwiper"
                    direction={"vertical"}
                    spaceBetween={50}
                    pagination={true}
                    modules={{ Pagination }}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="hsb-round-btns-box">
                    <span className="round-chevron-box round-chevron-box-hero-home">
                      <MdKeyboardArrowRight />
                    </span>
                    <span className="round-chevron-box round-chevron-box-hero-home">
                      <MdKeyboardArrowLeft />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-content hero-content-mob">
              <div className="hero-left">
                <h1>
                  <span>
                    <b>Welcome</b> To <br />
                    The <b>WhiteList.</b>
                  </span>
                  <img
                    className="light-img"
                    src={BlobPurple}
                    alt="BlobPurple"
                  />
                  <img
                    className="dark-img"
                    src={BlobPurple2}
                    alt="BlobPurple2"
                  />
                </h1>
                <p>
                  The Best Artists, Projects <br /> and Utility. No Compromise.
                </p>
              </div>
              <div className="hero-right">
                <img
                  className="hero-glare light-img"
                  src={HeroGlareLight}
                  alt="hero-glare"
                />
                <img
                  className="hero-glare dark-img"
                  src={HeroGlareDark}
                  alt="hero-glare"
                />
                <div className="hero-swiper-box">
                  <Swiper
                    className="mySwiper"
                    direction={"vertical"}
                    spaceBetween={50}
                    pagination={{
                      el: ".swiper-paginations",
                    }}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide-content">
                        <div className="hero-swiper-img-1-box">
                          <img src={HeroImg} alt="HeroImg" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="hsb-round-btns-box">
                    <span className="round-chevron-box">
                      <MdKeyboardArrowRight />
                    </span>
                    <span className="round-chevron-box">
                      <MdKeyboardArrowLeft />
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-countdopwn-box">
                <h6>Join Us In...</h6>
                <div className="hero-countdown">
                  <div className="hc-time-box">
                    <div className="hc-time-box-top">
                      <span>0</span>
                      <span>5</span>
                    </div>
                    <h6>DAYS</h6>
                  </div>
                  <div className="hc-time-box">
                    <div className="hc-time-box-top">
                      <span>2</span>
                      <span>6</span>
                    </div>
                    <h6>HOURS</h6>
                  </div>
                  <div className="hc-time-box">
                    <div className="hc-time-box-top">
                      <span>1</span>
                      <span>9 </span>
                    </div>
                    <h6>MINUTES</h6>
                  </div>
                </div>
              </div>
              <div className="hero-swiper-pagination-box">
                <div className="swiper-paginations"></div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="about">
          <div className="box">
            <div className="about-content">
              <div className="about-left">
                <img src={AboutImg} alt="AboutImg" />
              </div>
              <div className="about-right">
                <img
                  className="ellipse-yellow"
                  src={EllipseYellow}
                  alt="EllipseYellow"
                />
                <img
                  className="blob-lightblue light-img"
                  src={BlobLightBlue}
                  alt="BlobLightBlue"
                />
                <img
                  className="blob-lightblue2 dark-img"
                  src={BlobLightBlue2}
                  alt="BlobLightBlue2"
                />
                <h6>
                  About the
                  <Logo className="light-img" color="#1F194D" />
                  <Logo className="dark-img" color="#fff" />
                </h6>
                <p className="about-right-h5">
                  Here at The <b>Whitelist,</b> we are dedicated to providing
                  our community the <b>best art, utility</b> and{" "}
                  <b>community</b> benefits, period.
                </p>
                <p className="about-right-p">
                  No More grinding to get a whitelist spot on a good project. We
                  Bring the Good Projects to you. We provide a wide range of
                  options to users who are looking at different{" "}
                  <b>levels of engagement and utility.</b>
                  <br />
                  Our priority is giving back to the community and its Holders
                  of a Season pass, or an NFT from one of our collections in
                  ways that has yet to been seen in the space. For all the
                  benefits that we can offer please checkout out our subscribe
                  page, roadmap and prize pool. Or <b>
                    feel free to reach out
                  </b>{" "}
                  to us by email or our socials.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Collections Section */}
        <section className="collections">
          <img
            className="collections-bg light-img"
            src={CollectionsBg}
            alt="CollectionsBg"
          />
          <img
            className="collections-bg dark-img"
            src={CollectionsBg2}
            alt="CollectionsBg2"
          />
          <div className="box">
            <div className="collections-content">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Collections</h2>
                  <img className="light-img" src={BlobGreen} alt="BlobGreen" />
                  <img className="dark-img" src={BlobGreen2} alt="BlobGreen2" />
                </div>
                <p>
                  Join The Whitelist by choosing the option <br /> that fits you
                  best.{" "}
                </p>
              </div>
              <div className="collections-grid">
                <HomeCollectionsCard
                  collectionLogoImg={LogoLight}
                  collectionImg={CollectionsCard}
                  collectionName="Passengers"
                  collectionComingTime="Coming This April"
                />
                <HomeCollectionsCard
                  collectionLogoImg={LogoLight}
                  collectionImg={CollectionsCard}
                  collectionName="Walt's Vault"
                  collectionComingTime="Coming This April"
                />
              </div>
              <div className="collections-swiper-mob collection-home-mob-swiper">
                <Swiper
                  modules={[FreeMode]}
                  className="mySwiper"
                  slidesPerView={1.15}
                  spaceBetween={15}
                  freeMode={true}
                >
                  <SwiperSlide>
                    <HomeCollectionsCard
                      collectionLogoImg={LogoLight}
                      collectionImg={CollectionsCard}
                      collectionName="Passengers"
                      collectionComingTime="Coming This April"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeCollectionsCard
                      collectionLogoImg={LogoLight}
                      collectionImg={CollectionsCard}
                      collectionName="Passengers"
                      collectionComingTime="Coming This April"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeCollectionsCard
                      collectionLogoImg={LogoLight}
                      collectionImg={CollectionsCard}
                      collectionName="Passengers"
                      collectionComingTime="Coming This April"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeCollectionsCard
                      collectionLogoImg={LogoLight}
                      collectionImg={CollectionsCard}
                      collectionName="Passengers"
                      collectionComingTime="Coming This April"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeCollectionsCard
                      collectionLogoImg={LogoLight}
                      collectionImg={CollectionsCard}
                      collectionName="Passengers"
                      collectionComingTime="Coming This April"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe Section */}
        <section className="subscribe">
          <div className="box">
            <div className="subscribe-content">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Subscribe to Season 1</h2>
                  <img
                    className="light-img"
                    src={BlobYellow}
                    alt="BlobYellow"
                  />
                  <img
                    className="light-dark"
                    src={BlobYellow2}
                    alt="BlobYellow2"
                  />
                </div>
                <p>Join the Whitelist by choosing your perfect option below</p>
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
        </section>
        {/* Let us Help Section */}
        <section className="letushelp">
          <div className="box">
            <div className="letushelp-content">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Let us help</h2>
                  <img
                    className="light-img"
                    src={BlobPurple}
                    alt="BlobPurple"
                  />
                  <img
                    className="dark-img"
                    src={BlobPurpleDark}
                    alt="BlobPurple2"
                  />
                </div>
                <p>Find the most asked questions and their answer right here</p>
              </div>
              <div className="letushelp-grid">
                <Accordion>
                  <LetUsHelpCard
                    eventKey={1}
                    ques="Does The Whitelist have a roadmap?"
                  >
                    <p>
                      <a href="https://www.youtube.com/">Roadmap</a>
                    </p>
                  </LetUsHelpCard>
                  <LetUsHelpCard
                    eventKey={2}
                    ques="What does My Subscription get me?"
                  >
                    <p>
                      Depending on the tier you have decided to go with, every
                      tier unlocks certain perks and advantages. Visit (
                      <a href="https://www.youtube.com/">Subscriptions</a>) to
                      find out more.
                    </p>
                  </LetUsHelpCard>
                  <LetUsHelpCard
                    eventKey={3}
                    ques="Can I buy, sell or trade my Tier Pass?"
                  >
                    <p>
                      When you purchase a subscription through The Whitelist you
                      will receive your own Unique NFT pass. The whitelist has 3
                      tier options to pick from. Choose wisely 😉
                    </p>
                  </LetUsHelpCard>
                  <LetUsHelpCard eventKey={4} ques="Do we have social media?">
                    <p>
                      You can find us and our community on Discord, Twitter and
                      Instagram!
                    </p>
                    <div className="luh-social-grid">
                      <button className="light-blue-btn-filled hiwbtnmain greybgc">
                        <FaInstagram /> thenftwhitelist
                      </button>
                      <button className="light-blue-btn-filled hiwbtnmain">
                        <FaTwitter /> theNFTwhitelist
                      </button>
                      <button className="light-blue-btn-filled hiwbtnmain greybgc">
                        <FaDiscord /> theWhitelist
                      </button>
                    </div>
                  </LetUsHelpCard>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer moreBtn={true} />
      </div>
    </div>
  );
};

export default Home;
