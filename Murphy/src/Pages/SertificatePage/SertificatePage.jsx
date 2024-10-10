import React from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './SertificatePage.scss'
import { Link } from 'react-router-dom'

function SertificatePage() {
    return (
        <div className='sertificate'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Diplomlar</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Diplomlar</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                </div>

            </div>
        </div>
    )
}

export default SertificatePage