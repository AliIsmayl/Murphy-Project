import React from 'react'
import './AboutHead.scss'
import { Link } from 'react-router-dom'
function AboutHead() {
    return (
        <section id='aboutHead'>
            <div className="backPage">
                <h1>About Us</h1>
                <div className="path">
                    <Link className='link' to={"/"}>Home</Link>
                //
                    <p>About us</p>
                </div>
            </div>
        </section>
    )
}

export default AboutHead