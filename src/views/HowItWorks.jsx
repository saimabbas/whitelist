import React, { useState, useEffect } from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import BlobPurpleDark from "../assets/img/blob-purple2.png";
import HeroBgLight from "./../assets/img/light-bg-without-clouds.png";
import HeroBgLightMob from "./../assets/img/hero-bg-light-mob.png";
import HeroBgDark from "./../assets/img/right-moon.png";
import HeroBgDarkMob from "./../assets/img/right-moon-mob.png";
import { Accordion } from "react-bootstrap";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import LetUsHelpCard from "../components/pages/Home/LetUsHelpCard";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import HeaderMob from "../components/modules/HeaderMob";
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

const HowItWorks = () => {
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
      <div className="letushelp">
        {/* Let Us Work Section */}
        <section className="luh-main">
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
          <div className="app-pagee">
            <div className="box">
              <div className="letushelp-content hiwsection">
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
                      alt="BlobPurpleDark"
                    />
                  </div>
                  <p>
                    Find the most asked questions and their answer right here
                  </p>
                </div>
                <div className="letushelp-grid">
                  <Accordion>
                    <LetUsHelpCard
                      eventKey={1}
                      ques="Does the Whitelist have a roadmap?"
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
                        <a href="https://www.youtube.com/">Subscribe</a>) to
                        find out more.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={3}
                      ques="Can I buy, sell or trade my Tier Pass?"
                    >
                      <p>
                        When you purchase a subscription through Whitelist, you
                        will receive your own Unique NFT pass, Which will be
                        listed on the secondary market Openseas. The whitelist
                        has 3 tier options to pick from. Choose wisely 😉
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard eventKey={4} ques="Do we have social media?">
                      <p>
                        You can find us and our community on Discord, Twitter
                        and Instagram!
                      </p>
                      <div className="luh-social-grid">
                        <button className="light-blue-btn-filled hiwbtnmain greybgc">
                          <FaInstagram color="#807E8E" /> thenftwhitelist
                        </button>
                        <button className="light-blue-btn-filled hiwbtnmain">
                          <FaTwitter /> theNFTwhitelist
                        </button>
                        <button className="light-blue-btn-filled hiwbtnmain greybgc">
                          <FaDiscord color="#807E8E" /> theWhitelist
                        </button>
                      </div>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={5}
                      ques="How do I get in contact with The Whitelist?"
                    >
                      <p>
                        Feel free to reach out to us through email at (
                        <a href="https://www.youtube.com/">
                          {" "}
                          info@thewhitelist.com
                        </a>{" "}
                        ). Or the red button in the bottom right corner.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={6}
                      ques="   How many collections will I get with my Tier pass?"
                    >
                      <p>
                        Every season with the Whitelist, each tiered user will
                        receive 3 NFT’s which is not including your tier pass.
                        For more information about the tier levels please visit
                        our subscription page.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={7}
                      ques=" What is the benefit of holding an NFT from The
                      Whitelist?"
                    >
                      <p>
                        At the whitelist we strive to provide our users with
                        some of the best utility that the market has to offer.
                        For an in-depth understanding of utility please visit
                        <a href="https://www.youtube.com/"> Roadmap</a> and tier
                        options
                        <a href="https://www.youtube.com/"> Subscribe</a>.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={8}
                      ques=" How do I partner with The Whitelist?"
                    >
                      <p>
                        For all enquiries please email
                        <a href="https://www.youtube.com/">
                          {" "}
                          info@thewhitelist.com
                        </a>
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={9}
                      ques="Who is behind The Whitelist? "
                    >
                      <p>
                        <a href="https://www.youtube.com/">Meet the Team</a>
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={10}
                      ques=" When will the collections be revealed?"
                    >
                      <p>
                        Collection reveal date varies per collection. Please
                        visit our collections page for more details.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={11}
                      ques=" How often do I get an NFT with my Whitelist
                      subscription? "
                    >
                      <p>
                        With The Whitelist a user will receive a guaranteed 3
                        drops. Each drop will happen 1-2 months apart depending
                        on the team and artists. At the whitelist we strive to
                        provide you with the best product possible.
                      </p>
                    </LetUsHelpCard>
                    <LetUsHelpCard
                      eventKey={12}
                      ques=" How much does it cost to subscribe to The Whitelist? "
                    >
                      <p>
                        Here at The Whitelist, we have a multitude of
                        subscription options that aim to fit all types of users.
                        Please visit us at
                        <a href="https://www.youtube.com/"> Subscribe</a> for
                        details.
                      </p>
                    </LetUsHelpCard>
                  </Accordion>
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

export default HowItWorks;
