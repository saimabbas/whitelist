import React from 'react'
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";

const Vault = () => {
    return (
        <div className="app light-theme">
            {/* Header */}
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
                            <button className="light-blue-btn-filled btn-sm-ds">
                                {" "}
                                <WalletIcon color="#195BFF" /> Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="vaultmainpage">
                {/* Collection Section */}
                <section className="vaultmain">
                    <img
                        className="vault-bg-light light-img"
                        src={HeroBgLight}
                        alt="HeroBgLight"
                    />
                    <div className="box">
                        <div className="letushelp-content vaultsection">
                            <div className="section-heading">
                                <div className="sh-heading">
                                    <h2>Your collections</h2>
                                    <img src={BlobPurple} alt="BlobPurple" />
                                </div>
                                <p>4 collections</p>
                                <div className="mainroadmap">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <footer>
                <div className="box">
                    <div className="footer-content">
                        <div className="footer-top">
                            <div className="footer-left">
                                <Logo color="#fff" />
                                <p>Follow us on social media</p>
                                <div className="fl-icons-grid">
                                    <Instagram color="#fff" />
                                    <TwitterIcon color="#fff" />
                                    <Discord color="#fff" />
                                </div>
                            </div>
                            <div className="footer-center">
                                <h6>The Whitelist Info</h6>
                                <div className="fc-grid">
                                    <a href="#">Subscribe</a>
                                    <a href="#">Upcoming Drops </a>
                                    <a href="#">Roadmap</a>
                                    <a href="#">
                                        <b>Meet the Team</b>
                                    </a>
                                    <a href="#">How it Works</a>
                                </div>
                            </div>
                            <div className="footer-right">
                                <h6>Join Newsletter</h6>
                                <p>
                                    Subscribe our newsletter to get latest <Logo color="#fff" />
                                    updates
                                </p>
                                <div className="fr-subscribe-input-box">
                                    <input type="text" placeholder="Enter your Email " />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2022. All rights reserved</p>
                </div>
                <div className="more-btn">
                    More <RefreshIcon color="#fff" />
                </div>
            </footer>
        </div >
    )
}

export default Vault