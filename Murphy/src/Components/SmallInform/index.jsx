import React from 'react'
import './SmallInform.scss'
import { GrMapLocation } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function SmallInform() {
    return (
        <div id='smallInform'>
            <div className="smallBox" style={{border:"none"}}>
            <span><GrMapLocation /></span>
                <p>Real Time Cargo Tracking</p>
            </div>
            <div className="smallBox">
            <span><AiOutlineSafetyCertificate /></span>
                <p>Safety & Security Services</p>
            </div>
            <div className="smallBox">
            <span><AiOutlineFieldTime /></span>
                <p>On Time Delivery</p>
            </div>
            <div className="smallBox">
            <span><BsBoxSeam /></span>
                <p>Optimized Travel Cost</p>
            </div>
            <div className="smallBox">
            <span><TbMessages /></span>
                <p>24/7 Clients Support</p>
            </div>
        </div>
    )
}

export default SmallInform