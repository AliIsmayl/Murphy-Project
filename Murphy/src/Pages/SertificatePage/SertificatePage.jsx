import React, { useEffect, useState } from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './SertificatePage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SertificatePage() {
    const [sertificate, setSertificate] = useState([])

    async function getData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Licenses/Get?page=1&take=3")
        setSertificate(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='sertificate'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Lisenziyalar və Sertifikatlar</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Lisenziyalar və Sertifikatlar</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                {
                    sertificate.map((item) => (
                        <div className="cardBox">
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default SertificatePage