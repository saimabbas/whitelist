import React from "react";
import HeroImg from "../assets/img/hero-img-1.png";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobLightBlue from "../assets/img/blob-lightblue.svg";
import BlobGreen from "../assets/img/blob-green.svg";
import BlobYellow from "../assets/img/blob-yellow.svg";
import LogoLight from "./../assets/img/logo-light.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import GlareLight from "./../assets/img/glare-light.svg";
import AboutImg from "./../assets/img/home-about-img.png";
import EllipseYellow from "./../assets/img/ellipse-yellow.svg";
import CollectionsBg from "./../assets/img/collections-bg.svg";
import CollectionsCard from "./../assets/img/collections-card.png";
import Tick from "../assets/icons/Tick";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../assets/icons/ChevronUp";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Home = () => {
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
              <button className="light-blue-btn-filled">
                {" "}
                <WalletIcon color="#195BFF" /> Wallet
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <img
            className="hero-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <div className="box">
            <div className="hero-content">
              <div className="hero-left">
                <h1>
                  <span>
                    <b>Welcome</b> To <br />
                    The <b>WhiteList.</b>
                  </span>
                  <img src={BlobPurple} alt="BlobPurple" />
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
                  src={GlareLight}
                  alt="hero-glare"
                />
                <img
                  className="hero-glare dark-img"
                  src={GlareLight}
                  alt="hero-glare"
                />
                <div className="hero-swiper-box">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    direction={"vertical"}
                    spaceBetween={50}
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
                    <span>
                      <MdKeyboardArrowRight />
                    </span>
                    <span>
                      <MdKeyboardArrowLeft />
                    </span>
                  </div>
                </div>
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
                  className="blob-lightblue"
                  src={BlobLightBlue}
                  alt="BlobLightBlue"
                />
                <h6>
                  About the
                  <img src={LogoLight} alt="LogoLight" />
                </h6>
                <h5>
                  Here at The <b>Whitelist</b>, we are dedicated to providing
                  our community the <b>best art, utility</b> and{" "}
                  <b>community</b> benefits, period.
                </h5>
                <p>
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
            className="collections-bg"
            src={CollectionsBg}
            alt="CollectionsBg"
          />
          <div className="box">
            <div className="collections-content">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Collections</h2>
                  <img src={BlobGreen} alt="BlobGreen" />
                </div>
                <p>
                  Join The Whitelist by choosing the option <br /> that fits you
                  best.{" "}
                </p>
              </div>
              <div className="collections-grid">
                <div className="collections-grid-card">
                  <div className="cgc-top">
                    <h6>
                      <img src={LogoLight} alt="LogoLight" /> Passengers
                    </h6>
                  </div>
                  <div className="cgc-bottom">
                    <img src={CollectionsCard} alt="CollectionsCard" />
                    <div className="coming-tag">
                      Coming This April <span></span>
                    </div>
                  </div>
                </div>
                <div className="collections-grid-card">
                  <div className="cgc-top">
                    <h6>
                      <img src={LogoLight} alt="LogoLight" /> Fractional Friends
                    </h6>
                  </div>
                  <div className="cgc-bottom">
                    <img src={CollectionsCard} alt="CollectionsCard" />
                    <div className="coming-tag">
                      Coming This April <span></span>
                    </div>
                  </div>
                </div>
                <div className="collections-grid-card">
                  <div className="cgc-top">
                    <h6>
                      <img src={LogoLight} alt="LogoLight" /> Walt’s Vault
                    </h6>
                  </div>
                  <div className="cgc-bottom">
                    <img src={CollectionsCard} alt="CollectionsCard" />
                    <div className="coming-tag">
                      Coming This April <span></span>
                    </div>
                  </div>
                </div>
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
                  <img src={BlobYellow} alt="BlobYellow" />
                </div>
                <p>Join the Whitelist by choose your perfect option below</p>
              </div>
              <div className="subscribe-grid">
                <div className="subscribe-grid-card">
                  <div className="top-notch top-notch-pink"></div>
                  <h3>Tier 1</h3>
                  <h4>0.3 ETH </h4>
                  <div className="subscribe-options-grid">
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>3 Drops from The Whitelist (Season 1)</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Access to Community Prize Pools</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>
                        Voting Rights for Future Pools, Drops and artist
                        Collaborations
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">
                        Early Mint access (Higher Change of a legendary item)
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">Launchpad Access </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">“Elixir” air drop</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">
                        Access to “The inner Circle”
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">
                        Yield Farming access and yield farming prize pool
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">
                        Partnered projects Whitelist Spots{" "}
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p className="soge-not-available">
                        Early Access to Season 2 with The Whitelist
                      </p>
                    </div>
                  </div>
                  <div className="subscribe-btn-box">
                    <button className="light-blue-btn-filled">
                      GET STARTED
                    </button>
                  </div>
                </div>
                <div className="subscribe-grid-card">
                  <div className="top-notch top-notch-blue"></div>
                  <h3>Tier 2</h3>
                  <h4>0.4 ETH </h4>
                  <div className="subscribe-options-grid">
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>3 Drops from The Whitelist (Season 1)</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Access to Community Prize Pools</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>
                        Voting Rights for Future Pools, Drops and artist
                        Collaborations
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>
                        Early Mint access (Higher Change of a legendary item)
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Launchpad Access </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>“Elixir” air drop</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p>Access to “The inner Circle”</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p>Yield Farming access and yield farming prize pool</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p>Partnered projects Whitelist Spots </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#D9D9E4" />
                      <p>Early Access to Season 2 with The Whitelist</p>
                    </div>
                  </div>
                  <div className="subscribe-btn-box">
                    <button className="dark-blue-btn-filled">
                      GET STARTED
                    </button>
                  </div>
                </div>
                <div className="subscribe-grid-card">
                  <div className="top-notch top-notch-yellow"></div>
                  <h3>Tier 3 (The Inner Circle)</h3>
                  <h4>0.6 ETH </h4>
                  <div className="subscribe-options-grid">
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>3 Drops from The Whitelist (Season 1)</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Access to Community Prize Pools</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>
                        Voting Rights for Future Pools, Drops and artist
                        Collaborations
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>
                        Early Mint access (Higher Change of a legendary item)
                      </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Launchpad Access </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>“Elixir” air drop</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Access to “The inner Circle”</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Yield Farming access and yield farming prize pool</p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Partnered projects Whitelist Spots </p>
                    </div>
                    <div className="subscribe-options-grid-entry">
                      <Tick color="#2BD182" />
                      <p>Early Access to Season 2 with The Whitelist</p>
                    </div>
                  </div>
                  <div className="subscribe-btn-box">
                    <button className="light-blue-btn-filled">
                      GET STARTED
                    </button>
                  </div>
                </div>
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
                  <img src={BlobPurple} alt="BlobPurple" />
                </div>
                <p>
                  Find the Most Frequently asked questions and there answers
                  right here
                </p>
              </div>
              <div className="letushelp-grid">
                <Accordion>
                  <Accordion.Item eventKey={1}>
                    <Accordion.Header>
                      <div className="faq-q">
                        <h5>Does the Whitelist have a roadmap?</h5>
                        <ChevronUp color="#1F194D" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="faq-a">
                        <p>
                          <a href="">Roadmap</a>
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey={2}>
                    <Accordion.Header>
                      <div className="faq-q">
                        <h5>What does My Subscription get me?</h5>
                        <ChevronUp color="#1F194D" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="faq-a">
                        <p>
                          Depending on the tier you have decided to go with,
                          every tier unlocks certain perks and advantages. Visit
                          (Link to subscriptions) to find out more.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey={3}>
                    <Accordion.Header>
                      <div className="faq-q">
                        <h5>Can I Buy, sell or trade my Tier Pass?</h5>
                        <ChevronUp color="#1F194D" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="faq-a">
                        <p>
                          When you purchase a subscription through The Whitelist
                          you will receive your own Unique NFT pass. The
                          whitelist has 3 tier options to pick from. Choose
                          wisely 😉
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey={4}>
                    <Accordion.Header>
                      <div className="faq-q">
                        <h5>Do we have social media?</h5>
                        <ChevronUp color="#1F194D" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="faq-a">
                        <p>
                          You can find us and our community on Discord, Twitter
                          and Instagram!
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
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
    </div>
  );
};

export default Home;
