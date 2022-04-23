import React from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import Logo from "../../assets/img/Logo";

const Header = () => {
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
            <MessagesIcon color="#1F194D" />
            <MoonIcon color="#1F194D" />
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
