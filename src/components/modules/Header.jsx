import React, { useState, useEffect } from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import Logo from "../../assets/img/Logo";
import Menu from "../../assets/icons/Menu";
import { gsap } from "gsap";
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

const Header = (props) => {
  useEffect(() => {
    let headerAnim = gsap.timeline({
      delay: 3,
    });
    headerAnim.fromTo(
      ".header-left ul li",
      {
        opacity: 0,
        x: "25rem",
      },
      {
        opacity: 1,
        x: "0",
        duration: 1.25,
        ease: Power4.easeInOut,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <header>
      <div className="box">
        <div className="header-content">
          <div className="header-left">
            <Logo className="light-img" color="#1F194D" />
            <Logo className="dark-img" color="#fff" />
            <div className="mobmenuicon" onClick={props.openMobHeader}>
              <div className="mobmenubox">
                <Menu />
              </div>
            </div>
            {/* <img src={LogoLight} alt="LogoLight" /> */}
            <ul>
              <li>
                <a href="https://www.youtube.com/">
                  <b>P</b>rize pool
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <b>S</b>ubscribe
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <b>R</b>oadmap
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <b>U</b>pcoming Drops
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <b>M</b>eet the Team
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <MessagesIcon
              className="header-right-icon light-img"
              color="#1F194D"
            />
            <MessagesIcon
              className="header-right-icon dark-img"
              color="#FFFF"
            />
            <div className="light-img" onClick={props.changeToDarkTheme}>
              <MoonIcon className="header-right-icon" color="#1F194D" />
            </div>
            <div className="dark-img" onClick={props.changeToLightTheme}>
              <SunIcon className="header-right-icon" color="#FFFF" />
            </div>

            <button className="light-blue-btn-filled">
              {" "}
              <WalletIcon className="light-img" color="#195BFF" />
              <WalletIcon className="dark-img" color="#fff" />
              Wallet
            </button>
            {/* <div className="login-img-box">
                <div className="libimg">
                  <img src={Person} alt="" />
                </div>
                <h6>1.00461</h6>
                <p>ETH</p>
                <MdExpandMore />
              </div>
              <Bell /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
