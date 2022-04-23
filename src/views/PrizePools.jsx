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
import VaultImg1 from "../assets/img/vault-img-1.png";
import VaultImg2 from "../assets/img/vault-img-2.png";
import VaultImg3 from "../assets/img/vault-img-3.png";
import VaultProfilePic from "../assets/img/vault-profile-pic.png";
import PassengersLogo from "../assets/img/passengers-logo.svg";
import InfoIcon from "../assets/icons/InfoIcon";
import { MdDone } from "react-icons/md";
const PrizePools = () => {
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
      <div className="prizepools">
        {/* Collection Section */}
        <img
          className="col-bg-light light-img app-page-hero-bg"
          src={HeroBgLight}
          alt="HeroBgLight"
        />
        <div className="box">
          <div className="page-body-con">
            <div className="section-heading">
              <div className="sh-heading">
                <h2>Collections</h2>
                <img src={BlobPurple} alt="BlobPurple" />
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
              <div className="prizepools-grid-card">
                <div className="prizepools-grid-card-top">
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
                                <InfoIcon color="#1F194D" />
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
                            <div className="vo-option-prog vo-option-prog-active"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon color="#1F194D" />
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
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog vo-option-prog-active"></div>
                          </div>
                        </div>
                        <div className="vo-grid-card">
                          <div className="vo-grid-card-head">
                            <div className="top-notch top-notch-magenda"></div>
                            <p>
                              <span>B</span> POOL
                            </p>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon color="#1F194D" />
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
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog vo-option-prog-active"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon color="#1F194D" />
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
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog vo-option-prog-active"></div>
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
                                <InfoIcon color="#1F194D" />
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
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog vo-option-prog-active"></div>
                          </div>
                          <div className="vo-option">
                            <div className="vo-option-left">
                              <div className="vo-info-box">
                                <InfoIcon color="#1F194D" />
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
                                <input type="checkbox" name="" id="id1" />
                                <label htmlFor="id1">
                                  <div className="vo-checkbox-circle">
                                    <MdDone />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="vo-option-prog vo-option-prog-active"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prizepools-grid-card">
                <div className="prizepools-grid-card-top">
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
  );
};

export default PrizePools;
