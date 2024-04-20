import React from 'react'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import MurphyPhoto from "../../Image/Logo-1.png"
function Footer() {
    return (
        <footer>
            <div className="footerUpBox">
                <div className="leftFooterBox">
                    <img src={MurphyPhoto} alt="" />
                    <p>Logistics services encompass a broad range of activities aimed at efficiently managing the movement and storage of goods.</p>
                    <div className="socialIconBox">
                        <p><FaInstagram /></p>
                        <p><FaTwitter /></p>
                        <p><FaFacebookF /></p>
                    </div>
                </div>
                <div className="middleFooterBox">
                    <h3>Contact info</h3>
                    <div className="informBox">
                        <ImLocation2 />
                        <div className="textBox">
                            <p>Our location:</p>
                            <span>13 Division st, New York, 16004</span>
                        </div>
                    </div>
                    <div className="informBox">
                        <FaPhoneVolume />
                        <div className="textBox">
                            <p>Phones:</p>
                            <span>+490-800-856-05-39</span>
                            <span>+490-800-856-05-49</span>
                        </div>
                    </div>
                </div>
                <div className="rightFooterBox">
                    <h3>Subscribe</h3>
                    <div className="subscribeBox">
                        <input type="text" placeholder='Your Email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footerDownBox">
                <p>
                    "Murphy" website was prepared in © 2024 by <span>"FB" group</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer