import React from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import BackAudio from "../assets/audio/comingsoon-bg-audio.ogg";

const WaltsVault = () => {
  return (
    <div className="app light-theme">
      <div className="waltsvault">
        <div className="waltsvaultmain">
          {/* <video autoPlay muted playsInline className="backvideo">
            <source src={ComingVideo} type="video/mp4" />
          </video> */}
          <div className="waltsvaultcontent">
            <p>The whitelist presents</p>
            <h4>Walt's Vault</h4>
            <h6>Coming Soon</h6>
            <div className="waltsvaulttimer">
              <div className="wvdays">
                <div className="wvdcount">
                  <span>23</span>
                </div>
                <h6>Days</h6>
              </div>
              <p>:</p>
              <div className="wvdays">
                <div className="wvdcount">
                  <span>23</span>
                </div>
                <h6>Days</h6>
              </div>
              <p>:</p>
              <div className="wvdays">
                <div className="wvdcount">
                  <span>23</span>
                </div>
                <h6>Days</h6>
              </div>
            </div>
            <div className="waltsvaultinput">
              <p>Get notified when we are close to launch:</p>
              <div className="wvinputbox">
                <input type="text" placeholder="Enter your email..." />
                <div className="wvinputbtn">
                  <span>Subscribe</span>
                </div>
              </div>
            </div>
            <div className="waltsvaulticons">
              <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
              <Instagram color="rgba(255, 255, 255, 0.6)" />
              <Discord color="rgba(255, 255, 255, 0.6)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaltsVault;
