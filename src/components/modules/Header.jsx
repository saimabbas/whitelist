import React, { useState, useEffect } from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import Logo from "../../assets/img/Logo";
import Menu from "../../assets/icons/Menu";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Bell from "../../assets/icons/Bell";
import PersonImg from "../../assets/img/personimg.png";
import { MdExpandMore } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import BlueTick from "../../assets/img/bluetick.png";
import {
  Power1,
  Power2,
  Power3,
  Power4,
  Linear,
  Back,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import ProfileDetailsModal from "../pages/Home/ProfileDetailsModal";
import Profile from "../../assets/icons/Profile";
import Collection from "../../assets/icons/Collection";
import Logout from "../../assets/icons/Logout";

const Header = (props) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const showProfileDetailsModal = () => {
    setShowProfileModal(true);
    document.body.classList.add("no-scroll");
  };
  const hideProfileDetailsModal = () => {
    setShowProfileModal(false);
    document.body.classList.remove("no-scroll");
  };
  useEffect(() => {
    let headerAnim = gsap.timeline({
      // delay: 4,
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
          ease: Power3.easeInOut,
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
          ease: Power3.easeInOut,
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
          ease: Power3.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".header-right .connect-wallet-btn",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".header-right .connect-wallet-btn",
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
        ".header-right .connect-wallet-btn span",
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
    <header>
      <div className="box">
        <div className="header-content">
          <div className="header-left">
            <Link to="/home">
              <Logo className="light-img header-logo" color="#1F194D" />
              <Logo className="dark-img header-logo" color="#fff" />
            </Link>
            <div className="mobmenuicon" onClick={props.openMobHeader}>
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
            {/* <div className="not-logged-in-box">
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
                onClick={props.changeToDarkTheme}
              >
                <MoonIcon className="header-right-icon" color="#1F194D" />
              </div>
              <div
                className="dark-img header-right-icon"
                onClick={props.changeToLightTheme}
              >
                <SunIcon className="header-right-icon" color="#FFFF" />
              </div>
              <button
                className="light-blue-btn-filled connect-wallet-btn"
                onClick={showProfileDetailsModal}
              >
                <WalletIcon className="light-img" color="#195BFF" />
                <WalletIcon className="dark-img" color="#fff" />
                <span>Wallet</span>
              </button>
            </div> */}

            <div className="logged-in-box">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div className="login-img-box">
                    <img src={PersonImg} alt="" />
                    <h6>1.00461</h6>
                    <p>ETH</p>
                    <MdExpandMore />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="logininfo">
                    <div className="loginnameimg">
                      <img src={PersonImg} alt="" />
                      <div className="logintext">
                        <h6>Mohammad Reza</h6>
                        <img src={BlueTick} alt="" />
                      </div>
                      <p>0xc4c16a645...b21a</p>
                    </div>
                    <div className="loginbottombox">
                      <div className="loginicontext">
                        <Profile />
                        <h5>Edit Profile</h5>
                      </div>
                      <div className="loginicontext">
                        <Collection />
                        <h5>My Collections</h5>
                      </div>
                      <div className="loginicontext lcdisconnect">
                        <Logout />
                        <h5>Disconnect</h5>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* <div className="login-img-box">
                <img src={PersonImg} alt="" />
                <h6>1.00461</h6>
                <p>ETH</p>
                <MdExpandMore />
              </div> */}
              <span></span>
              <Bell />
              {/* <div className="logininfo">
                <div className="loginnameimg">
                  <img src={PersonImg} alt="" />
                  <div className="logintext">
                    <h6>Mohammad Reza</h6>
                    <img src={BlueTick} alt="" />
                  </div>
                  <p>0xc4c16a645...b21a</p>
                </div>
                <div className="loginbottombox">
                  <div className="loginicontext">
                    <Profile />
                    <h5>Edit Profile</h5>
                  </div>
                  <div className="loginicontext">
                    <Collection />
                    <h5>My Collections</h5>
                  </div>
                  <div className="loginicontext lcdisconnect">
                    <Logout />
                    <h5>Disconnect</h5>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {showProfileModal ? (
        <ProfileDetailsModal
          hideProfileDetailsModal={hideProfileDetailsModal}
        />
      ) : null}
    </header>
  );
};

export default Header;
