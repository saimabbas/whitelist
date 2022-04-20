import React from 'react'
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from '../assets/Temp/comingsoon.mp4'

const ComingSoonDark = () => {
    return (
        <div className="app light-theme">
            <div className="coomsoondark">
                <div className="comsoondmain">
                    <video autoPlay muted playsInline className='backvideo'>
                        <source src={ComingVideo} type='video/mp4' />
                    </video>
                    <header>
                        <div className="box">
                            <div className="header-content">
                                <div className="header-left">
                                    <img src={Passengers} alt="" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="comsoondcontent">
                        <h1>Coming Soon</h1>
                        <div className="comdarktimer">
                            <div className="comdarkday">
                                <h6>25 <span>DAYS</span></h6>
                            </div>
                            <p>:</p>
                            <div className="comdarkday">
                                <h6>25 <span>DAYS</span></h6>
                            </div>
                            <p>:</p>
                            <div className="comdarkday">
                                <h6>25 <span>DAYS</span></h6>
                            </div>
                        </div>
                        <h5>Get notified when we are close to blast off:</h5>
                        <div className="comdarkinput">
                            <input type="text" name="" id="" placeholder='Enter your email...' />
                            <button>Subscribe</button>
                        </div>
                        <h6>If you have any qustions, please contact us at:</h6>
                        <h4>Info@thewhitelist.com</h4>
                        <div className="coomsoonicons">
                            <Instagram color="rgba(255, 255, 255, 0.6)" />
                            <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
                            <Discord color="rgba(255, 255, 255, 0.6)" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ComingSoonDark