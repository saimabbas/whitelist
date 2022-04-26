import React from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import { MdClear } from "react-icons/md";
import Logo from "../../assets/img/Logo";

const HeaderMob = (props) => {
  return (
    <div className="headermobilecontent">
      <div className="headermobicon">
        <div className="headermic-left">
          <div className="mobmenubox">
            <MoonIcon color="#1F194D" />
          </div>
          <div className="mobmenubox">
            <MessagesIcon color="#1F194D" />
          </div>
        </div>
        <div className="headermic-right">
          <div className="mobmenubox">
            <MdClear onClick={props.closeMobHeader} />
          </div>
        </div>
      </div>
      <div className="headermobtext">
        <Logo color="#fff" />
        <h6>The White List</h6>
        <p>Subscribe</p>
        <p>Prize Pool</p>
        <p>Roadmap</p>
        <p>Upcoming Drops</p>
        <p>Meet the Team</p>
        <button className="light-blue-btn-filled">
          {" "}
          <WalletIcon color="#fff" /> Wallet
        </button>
      </div>
    </div>
  );
};

export default HeaderMob;
