import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProfileDetailsModal from "../../pages/Home/ProfileDetailsModal";
import MessagesIcon from "../../../assets/icons/MessagesIcon";
import MoonIcon from "../../../assets/icons/MoonIcon";
import SunIcon from "../../../assets/icons/SunIcon";
import WalletIcon from "../../../assets/icons/WalletIcon";
import Logo from "../../../assets/img/Logo";
import Menu from "../../../assets/icons/Menu";
import Bell from "../../../assets/icons/Bell";
import { MdExpandMore } from "react-icons/md";
import BlueTick from "../../../assets/img/bluetick.png";
import PersonImg from "../../../assets/img/personimg.png";

import Profile from "../../../assets/icons/Profile";
import Collection from "../../../assets/icons/Collection";
import Logout from "../../../assets/icons/Logout";
import useStylesEffect from "./hooks";
import { WalletUserContext } from "../../../contexts/wallet-context";

const Header = (props) => {
  useStylesEffect();

  const [showProfileModal, setShowProfileModal] = useState(false);
  const showProfileDetailsModal = () => {
    setShowProfileModal(true);
    document.body.classList.add("no-scroll");
  };
  const hideProfileDetailsModal = () => {
    setShowProfileModal(false);
    document.body.classList.remove("no-scroll");
  };

  const { state, connectMetamask } = WalletUserContext();
  const { isWalletConnected } = state;
  const handleWalletConnect = () => {
    connectMetamask();
  };

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
            <div className="not-logged-in-box">
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
                onClick={handleWalletConnect}
              >
                <WalletIcon className="light-img" color="#195BFF" />
                <WalletIcon className="dark-img" color="#fff" />
                <span>Wallet</span>
              </button>
            </div>

            {/* on user sign in */}

            {isWalletConnected && (
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
                          <Profile className="light-img" color="#1f194d" />
                          <Profile className="dark-img" color="#fff" />
                          <h5>Edit Profile</h5>
                        </div>
                        <div className="loginicontext">
                          <Collection className="light-img" color="#1f194d" />
                          <Collection className="dark-img" color="#fff" />
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
                <span></span>
                <Bell className="light-img" color="#1F194D" />
                <Bell className="dark-img" color="#FFFFFF" />
              </div>
            )}
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
