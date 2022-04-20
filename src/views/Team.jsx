import React from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import Team1 from "./../assets/img/team1.png";
import Team2 from "./../assets/img/team2.png";
import Team3 from "./../assets/img/team3.png";
import Team4 from "./../assets/img/team4.png";
import Team5 from "./../assets/img/team5.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Subscribe = () => {
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
      <div className="teammainbox">
        <section className="teampage">
          <img
            className="team-bg-light light-img"
            src={HeroBgLight}
            alt="HeroBgLight"
          />
          <div className="box">
            <div className="subscribe-content subsmainpage">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Meet the Team </h2>
                  <img src={BlobPurple} alt="BlobYellow" />
                </div>
              </div>
              <div className="team-grid">
                <h3>Founders</h3>
                <div className="team-grid-content">
                  <div className="team-grid-main">
                    <img src={Team1} alt="" />
                    <h6>Serge Klassen</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team2} alt="" />
                    <h6>Evan Klassen</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team3} alt="" />
                    <h6>Kristian Hybschman</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team4} alt="" />
                    <h6>Connor Gregory</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team1} alt="" />
                    <h6>Charles Hiebert</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team5} alt="" />
                    <h6>Jennifer Hiebert</h6>
                  </div>
                </div>
              </div>
              <div className="team-grid">
                <h3>Advisory</h3>
                <div className="team-grid-content">
                  <div className="team-grid-main">
                    <img src={Team1} alt="" />
                    <h6>TBD</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team2} alt="" />
                    <h6>TBD</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team3} alt="" />
                    <h6>TBD</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team4} alt="" />
                    <h6>TBD</h6>
                  </div>
                  <div className="team-grid-main">
                    <img src={Team1} alt="" />
                    <h6>TBD</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Subscribe;
