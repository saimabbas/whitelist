import React, { useState } from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import BackAudio from "../assets/audio/comingsoon-bg-audio.ogg";
import { subscribeToWaltsLaunch } from "../HTTP/endpoints";
import ToastCustom from "../components/Toast";

const WaltsVault = () => {
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => setEmail(e.target.value);
  const [toastState, setToastState] = useState({
    showToast: false,
    variant: "Primary",
    message: "",
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    const payload = JSON.stringify({ email });
    try {
      await subscribeToWaltsLaunch(payload);
      setEmail("");
      setToastState({
        showToast: true,
        variant: "Success",
        message: "Subscribe successfully.",
      });

      setTimeout(() => {
        setToastState({
          showToast: false,
          variant: "Primary",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.log("err", err);
      setToastState({
        showToast: true,
        variant: "Danger",
        message: err.message,
      });
    }
  };
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
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <div className="wvinputbox">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    onChange={handleInputChange}
                    value={email}
                    required
                  />
                  <button type="submit" className="wvinputbtn submit-button">
                    <span>Subscribe</span>
                  </button>

                  <div className="toast-container">
                    {toastState.showToast && <ToastCustom {...toastState} />}
                  </div>
                </div>
              </form>
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
