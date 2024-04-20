import React from 'react'
import './Delivering.scss'
import { IoIosArrowRoundUp } from "react-icons/io";

function Delivering() {
    return (
        <section id='delivering'>
            <div className="leftDeliveryBox">
                <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-flight.png" alt="" />
            </div>
            <div className="middleDeliveryBox">
                <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-yes.png" alt="" />
                <h3>Delivering Confidence through
                    <p>Secure Logistics Solutions</p>
                </h3>
            </div>
            <div className="rightDeliveryBox">
                <div className="insureBtnBox">
                    <p>Insure the Cargo</p>
                    <div className="arrowBox"><IoIosArrowRoundUp /></div>
                </div>
            </div>
        </section>
    )
}

export default Delivering