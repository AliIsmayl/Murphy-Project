import React from 'react'
import './BoostYour.scss'
import { IoIosArrowRoundUp } from "react-icons/io";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";

function BoostYour() {
    return (
        <section id='boostYour'>
            <div className="boostLeftBox">
                <h5>ABOUT COMPANY</h5>
                <h2>Boost Your Business Efficiency</h2>
                <p>Digitalization has enabled logistics providers to harness the power of data analytics. By collecting and analyzing vast amounts of data, companies can gain valuable insights into their supply chain operations.</p>
                <div className="normalBox">
                    <p>Automation is reshaping warehouse operations and order fulfillment processes. Robotics, autonomous vehicles, and automated guided vehicles.</p>
                </div>
                <div className="btnBox">
                    <div className="btn">
                        <span>Read More</span>
                        <div className="arrow">
                            <IoIosArrowRoundUp />

                        </div>
                    </div>
                    <div className="phoneBox">
                        <div className="phone">
                            <HiOutlinePhoneOutgoing />
                        </div>
                        <span>9 500 212 09 88</span>
                    </div>
                </div>
            </div>
            <div className="boostRightBox">
                <div className="imgBox">
                    <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/about-bg.jpg" alt="" />
                </div>
                <div className="numbersBox">
                    <div className="boxIsCount">
                        <h1>45</h1>
                        <p>International Airports</p>
                    </div>
                    <div className="boxIsCount">
                        <h1>760+</h1>
                        <p>Branches Around the World</p>
                    </div>
                    <div className="boxIsCount">
                        <h1>8.5k</h1>
                        <p>Deliveries Per Day</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BoostYour