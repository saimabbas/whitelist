import React from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import Logo from "../../assets/img/Logo";

const Header = (props) => {
  return (
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
            <MessagesIcon className="header-right-icon" color="#1F194D" />
            <div className="light-img" onClick={props.changeToDarkTheme}>
              <MoonIcon className="header-right-icon" color="#1F194D" />
            </div>
            <div className="dark-img" onClick={props.changeToLightTheme}>
              <SunIcon className="header-right-icon" color="#FFFF" />
            </div>

            <button className="light-blue-btn-filled">
              {" "}
              <WalletIcon color="#195BFF" /> Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
