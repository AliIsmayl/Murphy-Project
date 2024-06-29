import React, { useState } from 'react'
import './VideoSect.scss'
import { CiPlay1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function VideoSect() {
    const [openVideoBox, setopenVideoBox] = useState(false)
    function openVideo() {
        setopenVideoBox(!openVideoBox)
    }
    return (
        <section id='videoSect'>
            <div className="backPage">
                <p><span>Ensure Convenience</span>
                    and Streamlining in Logistics</p>
                <div className="btns" onClick={openVideo}>
                    <button><CiPlay1 /></button>
                    <i>Watch Video</i>
                </div>
            </div>
            <div className={`videoPlayerBox ${openVideoBox ? "openVideo" : ""}`}>
                <div className="closeBtn" onClick={openVideo}><IoMdClose /></div>
            </div>
        </section>
    )
}

export default VideoSect