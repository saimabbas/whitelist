import React from "react";
import { MdClear } from "react-icons/md";
import Metamask from "../../../assets/img/metamask.png";
import { WalletUserContext } from "../../../contexts/wallet-context";
import { shortenAddress } from "../../../utils/constants";
const ProfileDetailsModal = ({ hideProfileDetailsModal }) => {
  const { state, disconnectWallet } = WalletUserContext();
  const { account } = state;

  const handleDisconnect = () => {
    disconnectWallet();
    hideProfileDetailsModal();
  };
  return (
    <div className="wlupdatemodal">
      <div className="wlupdatecontent">
        <MdClear onClick={hideProfileDetailsModal} />
        <div className="wlupdatemainbox">
          <div className="wlupdateleft">
            <p>Wallet</p>
            <div className="wlloadingdiv"></div>
            <button className="light-blue-btn-filled">SUBSCRIBE RENEWAL</button>
            <h6>
              You are secured Until <span>Oct 22nd, 2022</span>
            </h6>
          </div>
          <div className="wlupdateright">
            <p>Account info</p>
            <div className="wlupinput">
              <label htmlFor="">Display Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="wlupinput">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter Your Email Address" />
            </div>
            <button className="dark-blue-btn-filled">Update Profile</button>
          </div>
        </div>
      </div>
      <div className="wlwalletdisconnect">
        <div className="wlwallettext">
          <p>My Address Wallet</p>
          <h6>{shortenAddress(account)}</h6>
        </div>
        <button className="light-blue-btn-filled" onClick={handleDisconnect}>
          <img src={Metamask} alt="Metamask" /> DISCONNECT METAMASK
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsModal;