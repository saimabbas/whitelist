import React, { useState, useEffect } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/light-bg-wc.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import Team1 from "./../assets/img/Teams/Connor-Gregory.png";
import Team2 from "./../assets/img/Teams/Chalres-Hiebert.png";
import Team3 from "./../assets/img/Teams/Serge-Klassen.png";
import Team4 from "./../assets/img/Teams/Kristian-Hybschman.png";
import Team5 from "./../assets/img/Teams/JenniHiebert.png";
import Team6 from "./../assets/img/Teams/EvanKlassen.png";
import Team7 from "./../assets/img/Teams/Alex-Merritt.png";
import Team8 from "./../assets/img/Teams/PlaceholderforSal'sadvisor.png";
import Team9 from "./../assets/img/Teams/Andy-Ridgway.png";
import Team10 from "./../assets/img/Teams/MomodouKhan.png";
import Team11 from "./../assets/img/Teams/NilianStudios.png";
import Team12 from "./../assets/img/Teams/Ali-Chenari.png";
import Team13 from "./../assets/img/Teams/NinaLaue.png";
import Team14 from "./../assets/img/Teams/NFTGUYY.png";
import Team15 from "./../assets/img/Teams/DeltaCrypto.png";
import Team16 from "./../assets/img/Teams/SalamanShawaf.png";
import Team17 from "./../assets/img/Teams/RolandDudko.png";
import Team18 from "./../assets/img/Teams/MattKohn.png";
import Team19 from "./../assets/img/Teams/EstebanValbuena.png";
import Team20 from "./../assets/img/Teams/EvanKlassen.png";
import Team21 from "./../assets/img/Teams/Amir-Bagian.png";

import Cloud1Light from "./../assets/img/cloud-1.png";
import Cloud1Dark from "./../assets/img/cloud-1-dark.png";
import Cloud2Light from "./../assets/img/cloud-2.png";
import Cloud2Dark from "./../assets/img/cloud-2-dark.png";
import Cloud3Light from "./../assets/img/cloud-3.png";
import Cloud3Dark from "./../assets/img/cloud-3-dark.png";
import { gsap } from "gsap";
import {
  Back,
  Power3,

  // Power1,
  // Power2,
  Power4,
  Linear,
  // Expo,
  // Circ,
} from "gsap/dist/gsap";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/modules/Footer";
import Header from "../components/modules/Header";
import TeamCard from "../components/pages/Team/TeamCard";
import HeaderMob from "../components/modules/HeaderMob";

const Subscribe = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
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

  useEffect(() => {
    let ComingSoonCloud1Anim = gsap.timeline();
    ComingSoonCloud1Anim.fromTo(
      ".comingsoon-cloud-1",
      {
        transform: "translate(50vw, 0)",
      },
      {
        transform: "translate(101vw, 0)",
        duration: 100,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-1", {
        transform: "translate(-20vw, 0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-1",
        {
          transform: "translate(-20vw, 0)",
        },
        {
          transform: "translate(101vw, 0)",
          duration: 200,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );

    let ComingSoonCloud2Anim = gsap.timeline();
    ComingSoonCloud2Anim.fromTo(
      ".comingsoon-cloud-2",
      {
        transform: "translate(10vw,0)",
      },
      {
        transform: "translate(101vw,0)",
        duration: 125,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-2", {
        transform: "translate(  -10vw,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-2",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 250,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );
    let ComingSoonCloud3Anim = gsap.timeline();
    ComingSoonCloud3Anim.fromTo(
      ".comingsoon-cloud-3",
      {
        transform: "translate(90vw  ,0)",
      },
      {
        transform: "translate( 101vw ,0)",
        duration: 20,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-3", {
        transform: "translate( -10vw ,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-3",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 225,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );
  }, []);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <img
        src={Cloud1Light}
        alt="Cloud1Light"
        className="comingsoon-cloud-1 light-img"
      />
      <img
        src={Cloud2Light}
        alt="Cloud2Light"
        className="comingsoon-cloud-2 light-img"
      />
      <img
        src={Cloud3Light}
        alt="Cloud3Light"
        className="comingsoon-cloud-3 light-img"
      />
      <img
        src={Cloud1Dark}
        alt="Cloud1Dark"
        className="comingsoon-cloud-1 dark-img"
      />
      <img
        src={Cloud2Dark}
        alt="CloudDarkt"
        className="comingsoon-cloud-2 dark-img"
      />
      <img
        src={Cloud3Dark}
        alt="ClouDarkht"
        className="comingsoon-cloud-3 dark-img"
      />
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

      <div className="teammainbox clouds-anim-box">
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
                    role="Operations Manager"
                  />
                  <TeamCard
                    img={Team4}
                    name="Kristian Hybschmann"
                    role="Community Manager"
                  />
                  <TeamCard
                    img={Team5}
                    name="Jenni Hiebertt"
                    role="Project Manager"
                  />
                  <TeamCard
                    img={Team6}
                    name="Evan Klassen"
                    role="Innovations"
                  />
                  <TeamCard
                    img={Team7}
                    name="Alex Merritt"
                    role="Head of Marketing"
                  />
                  <TeamCard img={Team8} name="Sheraz Ahmed" role="Marketing" />
                  <TeamCard
                    img={Team9}
                    name="Andy Ridgway"
                    role="Lead Strategist"
                  />
                  <TeamCard
                    img={Team10}
                    name="Momodou Khan"
                    role="Content Creator"
                  />
                  <TeamCard
                    img={Team11}
                    name="Nilian Studios"
                    role="Artistic Lead Partner"
                  />
                  <TeamCard img={Team12} name="ALi " role="Creative Director" />
                  <TeamCard
                    img={Team13}
                    name="Nina Laue"
                    role="Head of Advisory"
                  />
                  <TeamCard img={Team14} name="NFTGUYY" role="Advisor" />
                  <TeamCard img={Team15} name="DeltaCrypto" role="Advisor" />
                  <TeamCard
                    img={Team16}
                    name="Salman Shawaf"
                    role="Advisor (Founder of Dippies)"
                  />
                  <TeamCard img={Team17} name="Roland Dudko" role="Chief Dev" />
                  <TeamCard img={Team18} name="Matt Kohn" role="Development" />
                  <TeamCard
                    img={Team19}
                    name="Esteban Valbuena"
                    role="Development"
                  />
                  <TeamCard
                    img={Team20}
                    name="Evan Klassen"
                    role="Innovations"
                  />
                  <TeamCard img={Team21} name="Amir Bagian" role="UI/UX" />
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
