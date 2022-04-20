import React from 'react'
import Passengers from "./../assets/img/Passengers.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import ComingVideo from '../assets/Temp/comingsoon.mp4'

const MintConnect = () => {
    return (
        <div className="app light-theme">
            <div className="coomsoondark mintmainpage">
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
                                <div className="coomsoonicons">
                                    <Instagram color="rgba(255, 255, 255, 0.6)" />
                                    <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
                                    <Discord color="rgba(255, 255, 255, 0.6)" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="comsoondcontent">
                        <h1>PASSENGERS</h1>
                        <div className="passengerbtn">
                            <button>Mint</button>
                            <div className="minttimer">
                                <h6>MINTING BEGINS: <span> 00:54:15:07</span></h6>
                                <h6>PRICE: <span> 0.0 ETH</span></h6>
                            </div>
                        </div>
                        <div className="mintconnect">
                            <h6>CONNECT</h6>
                            <button>CONNECT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MintConnect