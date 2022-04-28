import React from "react";
import Discord from "../../assets/icons/Discord";
import Instagram from "../../assets/icons/Instagram";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import Logo from "../../assets/img/Logo";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../assets/icons/ChevronUp";
import HelpIcon from "../../assets/img/help-icon.svg";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-pc">
        <div className="box">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-left">
                <Logo color="#fff" />
                <p>Follow Us On Social Media</p>
                <div className="fl-icons-grid">
                  <Instagram color="#fff" />
                  <TwitterIcon color="#fff" />
                  <Discord color="#fff" />
                </div>
              </div>
              <div className="footer-center">
                <h6>The Whitelist Info</h6>
                <div className="fc-grid">
                  <a href="https://www.youtube.com/">Subscribe</a>
                  <a href="https://www.youtube.com/">Upcoming Drops </a>
                  <a href="https://www.youtube.com/">Roadmap</a>
                  <a href="https://www.youtube.com/">
                    <b>Meet the Team</b>
                  </a>
                  <a href="https://www.youtube.com/">How it Works</a>
                </div>
              </div>
              <div className="footer-right">
                <h6>Join Newsletter</h6>
                <p>
                  Subscribe our newsletter to get latest <Logo color="#fff" />{" "}
                  <br />
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
      </div>
      <div className="footer-mob">
        <div className="box">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-left">
                <Logo color="#fff" />
                <p>Follow Us On Social Media</p>
                <div className="fl-icons-grid">
                  <Instagram color="#fff" />
                  <TwitterIcon color="#fff" />
                  <Discord color="#fff" />
                </div>
              </div>

              <div className="footer-center-mob">
                <Accordion>
                  <Accordion.Item eventKey={1}>
                    <Accordion.Header>
                      <div className="footer-center-header-mob">
                        <h6>The Whitelist Info</h6>
                        <ChevronUp color="#fff" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="fc-grid-mob">
                        <a href="https://www.youtube.com/">Subscribe</a>
                        <a href="https://www.youtube.com/">Upcoming Drops </a>
                        <a href="https://www.youtube.com/">Roadmap</a>
                        <a href="https://www.youtube.com/">
                          <b>Meet the Team</b>
                        </a>
                        <a href="https://www.youtube.com/">How it Works</a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <Accordion>
                <Accordion.Item eventKey={1}>
                  <Accordion.Header>
                    <div className="footer-center-header-mob">
                      <h6>Join Newsletter</h6>
                      <ChevronUp color="#fff" />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-right">
                      <p>
                        Subscribe our newsletter to get latest{" "}
                        <Logo color="#fff" />
                        updates
                      </p>
                      <div className="fr-subscribe-input-box">
                        <input type="text" placeholder="Enter your Email " />
                        <button>Subscribe</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="footer-bottom">
            <p>Copyright © 2022. All rights reserved</p>
            <img src={HelpIcon} alt="HelpIcon" />
          </div>
        </div>
      </div>
      {props.moreBtn ? (
        <div className="more-btn">
          More <RefreshIcon className="light-img" color="#fff" />{" "}
          <RefreshIcon className="dark-img" color="#000" />
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
