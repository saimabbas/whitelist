import React from "react";
import Passengers from "./../assets/img/Passengers.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";

const MintConnect = () => {
  return (
    <div className="app dark-theme">
      <div className="coomsoondark mintmainpage">
        <div className="comsoondmain">
          <video autoPlay muted playsInline className="backvideo">
            <source src={ComingVideo} type="video/mp4" />
          </video>
          <header>
            <div className="header-content">
              <div className="header-left">
                <img src={Passengers} alt="" />
              </div>
              <div className="coomsoonicons">
                <Instagram color="rgba(255, 255, 255, 0.6)" />
                <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
                <Discord color="rgba(255, 255, 255, 0.6)" />
              </div>
            </div>
          </header>
          <div className="comsoondcontent passcontent">
            <h1 className="conthrax">PASSENGERS</h1>
            <div className="passengerbtn">
              <button className="conthrax">Mint</button>
              <div className="minttimer">
                <h6 className="conthrax">
                  MINTING BEGINS: <span className="conthrax"> 00:54:15:07</span>
                </h6>
                <h6 className="conthrax">
                  PRICE: <span className="conthrax"> 0.0 ETH</span>
                </h6>
              </div>
            </div>
            <div className="mintconnect">
              <h6 className="conthrax">CONNECT:</h6>
              <button className="conthrax">CONNECT</button>
            </div>
            <div className="mintdisconnect">
              <h6 className="conthrax">CONNECTED AS: 0xc43....45b21</h6>
              <button className="conthrax">DISCONNECT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintConnect;
