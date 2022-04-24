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
import Footer from "../components/modules/Footer";
import Header from "../components/modules/Header";
import TeamCard from "../components/pages/Team/TeamCard";
const Subscribe = () => {
  return (
    <div className="app light-theme">
      {/* Header */}
      <Header />
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
                  <TeamCard img={Team1} name="Serge Klassen" />
                  <TeamCard img={Team2} name="Evan Klassen" />
                  <TeamCard img={Team3} name="Kristian Hybschman" />
                  <TeamCard img={Team4} name="Connor Gregory" />
                  <TeamCard img={Team1} name="Charles Hiebert" />
                  <TeamCard img={Team5} name="Jennifer Hiebert" />
                </div>
              </div>
              <div className="team-grid">
                <h3>Advisory</h3>
                <div className="team-grid-content">
                  <TeamCard img={Team1} name="TBD" />
                  <TeamCard img={Team2} name="TBD" />
                  <TeamCard img={Team3} name="TBD" />
                  <TeamCard img={Team4} name="TBD" />
                  <TeamCard img={Team1} name="TBD" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
      {/* <>
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
      </> */}
    </div>
  );
};

export default Subscribe;
