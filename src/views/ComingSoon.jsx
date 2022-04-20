import React from 'react'
import BlobPurple from "../assets/img/blob-purple.svg";
import HeroBgLight from "./../assets/img/hero-bg-light.png";
import Logo from "../assets/img/Logo";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";

const ComingSoon = () => {
    return (
        <div className="app light-theme">
            {/* Header */}
            <header>
                <div className="box">
                    <div className="header-content">
                        <div className="header-left">
                            <Logo color="#1F194D" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="landingpage">
                {/* Hero Section */}
                <section className="landing-main">
                    <img
                        className="landing-bg-light light-img"
                        src={HeroBgLight}
                        alt="HeroBgLight"
                    />
                    <div className="box">
                        <div className="landing-content comesoonsection">
                            <div className="section-heading">
                                <div className="sh-heading">
                                    <h2>Coming Soon</h2>
                                    <img src={BlobPurple} alt="BlobPurple" />
                                </div>
                                <p>
                                    We're working hard to bring you the best!
                                </p>
                            </div>
                            <div className="coomsoontimer">
                                <div className="hero-countdopwn-box">
                                    <div className="hero-countdown">
                                        <div className="hc-time-box">
                                            <div className="hc-time-box-top">
                                                <span>105</span>
                                                <h6>Days</h6>
                                            </div>
                                        </div>
                                        <div className="hc-time-box">
                                            <div className="hc-time-box-top">
                                                <span>02</span>
                                                <h6>Hours</h6>
                                            </div>
                                        </div>
                                        <div className="hc-time-box">
                                            <div className="hc-time-box-top">
                                                <span>23</span>
                                                <h6>Minutes</h6>
                                            </div>
                                        </div>
                                        <div className="hc-time-box">
                                            <div className="hc-time-box-top">
                                                <span>53</span>
                                                <h6>Seconds</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coomsoonlast">
                                <p>Get notifed when site goes live</p>
                                <div className="coomsooninput">
                                    <input type="text" name="" id="" placeholder='Enter your Email' />
                                    <button>Subscribe</button>
                                </div>
                                <div className="coomsoonicons">
                                    <Instagram color="#1F194D" />
                                    <TwitterIcon color="#1F194D" />
                                    <Discord color="#1F194D" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}

export default ComingSoon