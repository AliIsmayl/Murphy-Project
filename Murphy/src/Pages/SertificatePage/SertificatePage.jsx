import React, { useEffect, useState } from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './SertificatePage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SertificatePage() {
    const [sertificate, setSertificate] = useState([])
    const [take, setTake] = useState(4)

    function handleMoreText() {
        setTake((take) => take + 4)
    }
    async function getData() {
        const res = await axios.get(`https://thetest-001-site1.ftempurl.com/api/Licenses/Get?page=1&take=${take}`)
        setSertificate(res.data)
    }
    useEffect(() => {
        getData()
    }, [take])

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
                        <Link to={item.image} target='blank_' className="cardBox">
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </Link>
                    ))
                }

            </div>
            <div className="moreBtn">
                <button onClick={handleMoreText}>Daha Çox</button>
            </div>
        </div>
    )
}

export default SertificatePage