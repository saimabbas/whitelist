import React, { useState } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
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
import HeaderMob from "../components/modules/HeaderMob";

const Subscribe = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);

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

      <div className="teammainbox">
        <section className="teampage">
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
          <div className="box">
            <div className="subscribe-content subsmainpage">
              <div className="section-heading">
                <div className="sh-heading">
                  <h2>Meet the Team </h2>
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
              <div className="team-grid">
                <div className="team-grid-content">
                  <TeamCard
                    img={Team1}
                    name="Connor Gregoryn"
                    role="Co Founder"
                  />
                  <TeamCard
                    img={Team2}
                    name="Charles Hiebert"
                    role="Co Founder"
                  />
                  <TeamCard
                    img={Team3}
                    name="Serge Klassen"
                    role="OPerations Manager"
                  />
                  <TeamCard
                    img={Team4}
                    name="Kristian Hybschmann"
                    role="Community Manager"
                  />
                  <TeamCard
                    img={Team1}
                    name="Jenni Hiebertt"
                    role="Project Manager"
                  />
                  <TeamCard
                    img={Team5}
                    name="Evan Klassen"
                    role="Innovations"
                  />
                  <TeamCard
                    img={Team5}
                    name="Alex Merritt"
                    role="Head of Marketing"
                  />
                  <TeamCard img={Team5} name="Sheraz Ahmed" role="Marketing" />
                  <TeamCard
                    img={Team5}
                    name="Andy Ridgway"
                    role="Lead Strategist"
                  />
                  <TeamCard
                    img={Team5}
                    name="Momodou Khan"
                    role="Content Creator"
                  />
                  <TeamCard
                    img={Team5}
                    name="Nilian Studios"
                    role="Artistic Lead Partner"
                  />
                  <TeamCard img={Team5} name="ALi " role="Creative Director" />
                  <TeamCard img={Team5} name=" Ali " role="Art Supervisor" />
                  <TeamCard img={Team5} name=" Ali" role="Artist" />
                  <TeamCard img={Team5} name="Ali " role="Artist" />
                  <TeamCard img={Team5} name="Ali " role="Artist" />
                  <TeamCard
                    img={Team5}
                    name="Nina Laue"
                    role="Head of Advisory"
                  />
                  <TeamCard img={Team5} name="NFTGUYY" role="Advisor" />
                  <TeamCard img={Team5} name="DeltaCrypto" role="Advisor" />
                  <TeamCard
                    img={Team5}
                    name="Salman Shawaf"
                    role="Advisor(Founder of Dippies)"
                  />
                  <TeamCard img={Team5} name="Roland Dudko" role="Chief Dev" />
                  <TeamCard img={Team5} name="Matt Kohn" role="Development" />
                  <TeamCard
                    img={Team5}
                    name="Esteban Valbuena"
                    role="Development"
                  />
                  <TeamCard
                    img={Team5}
                    name="Evan Klassen"
                    role="Innovations"
                  />
                  <TeamCard img={Team5} name="Amir Bagian" role="UI/UX" />
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
