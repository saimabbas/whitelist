import React from 'react'
import BlobYellow from "../assets/img/blob-yellow.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Tick from "../assets/icons/Tick";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MessagesIcon from "../assets/icons/MessagesIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import WalletIcon from "../assets/icons/WalletIcon";

const Subscribe = () => {
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
            <div className="subscribepage">
                {/* Subscribe Section */}
                <section className="subimgbox">
                    <img
                        className="subscribe-bg-light light-img"
                        src={HeroBgLight}
                        alt="HeroBgLight"
                    />
                    <div className="box">
                        <div className="subscribe-content subsmainpage">
                            <div className="section-heading">
                                <div className="sh-heading">
                                    <h2>Subscribe</h2>
                                    <img src={BlobYellow} alt="BlobYellow" />
                                </div>
                                <p>Join the Whitelist by choose your perfect option below</p>
                            </div>
                            <div className="subscribe-grid">
                                <div className="subscribe-grid-card">
                                    <div className="top-notch top-notch-pink"></div>
                                    <h3>Tier 1</h3>
                                    <h4>0.3 ETH </h4>
                                    <div className="subscribe-options-grid">
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>3 Drops from The Whitelist (Season 1)</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Access to Community Prize Pools</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>
                                                Voting Rights for Future Pools, Drops and artist
                                                Collaborations
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">
                                                Early Mint access (Higher Change of a legendary item)
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">Launchpad Access </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">“Elixir” air drop</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">
                                                Access to “The inner Circle”
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">
                                                Yield Farming access and yield farming prize pool
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">
                                                Partnered projects Whitelist Spots{" "}
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p className="soge-not-available">
                                                Early Access to Season 2 with The Whitelist
                                            </p>
                                        </div>
                                    </div>
                                    <div className="subscribe-btn-box">
                                        <button className="light-blue-btn-filled">
                                            GET STARTED
                                        </button>
                                    </div>
                                </div>
                                <div className="subscribe-grid-card">
                                    <div className="top-notch top-notch-blue"></div>
                                    <h3>Tier 2</h3>
                                    <h4>0.4 ETH </h4>
                                    <div className="subscribe-options-grid">
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>3 Drops from The Whitelist (Season 1)</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Access to Community Prize Pools</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>
                                                Voting Rights for Future Pools, Drops and artist
                                                Collaborations
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>
                                                Early Mint access (Higher Change of a legendary item)
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Launchpad Access </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>“Elixir” air drop</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p>Access to “The inner Circle”</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p>Yield Farming access and yield farming prize pool</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p>Partnered projects Whitelist Spots </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#D9D9E4" />
                                            <p>Early Access to Season 2 with The Whitelist</p>
                                        </div>
                                    </div>
                                    <div className="subscribe-btn-box">
                                        <button className="dark-blue-btn-filled">
                                            GET STARTED
                                        </button>
                                    </div>
                                </div>
                                <div className="subscribe-grid-card">
                                    <div className="top-notch top-notch-yellow"></div>
                                    <h3>Tier 3 (The Inner Circle)</h3>
                                    <h4>0.6 ETH </h4>
                                    <div className="subscribe-options-grid">
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>3 Drops from The Whitelist (Season 1)</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Access to Community Prize Pools</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>
                                                Voting Rights for Future Pools, Drops and artist
                                                Collaborations
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>
                                                Early Mint access (Higher Change of a legendary item)
                                            </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Launchpad Access </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>“Elixir” air drop</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Access to “The inner Circle”</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Yield Farming access and yield farming prize pool</p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Partnered projects Whitelist Spots </p>
                                        </div>
                                        <div className="subscribe-options-grid-entry">
                                            <Tick color="#2BD182" />
                                            <p>Early Access to Season 2 with The Whitelist</p>
                                        </div>
                                    </div>
                                    <div className="subscribe-btn-box">
                                        <button className="light-blue-btn-filled">
                                            GET STARTED
                                        </button>
                                    </div>
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

export default Subscribe