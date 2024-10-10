import React from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './StructorPage.scss'
import { Link } from 'react-router-dom'
import  Structor1 from '../../Image/StructorImage1.png'
import  Structor2 from '../../Image/StructorImage2.png'

function StructorPage() {
    return (
        <div className='structorPage'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Struktr</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Struktr</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                <img src={Structor1} alt="" />
                <img src={Structor2} alt="" />

            </div>
        </div>
    )
}

export default StructorPage