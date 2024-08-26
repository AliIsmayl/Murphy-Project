import React from 'react'
import './NewsHead.scss'
import { Link } from 'react-router-dom'
function NewsHead() {
    return (
        <section id='newsHead'>
            <div className="backPage">
                <h1>News</h1>
                <div className="path">
                    <Link className='link' to={"/"}>Home</Link>
                //
                    <p>News</p>
                </div>
            </div>
        </section>
    )
}

export default NewsHead