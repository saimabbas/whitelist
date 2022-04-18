import React from "react";
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
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
const HowItWorks = () => {
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
      {/* Let us Help Section */}
      <section className="letushelp hiwsection">
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
    </div >
  );
};

export default HowItWorks;
