import React, { useEffect, useState } from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './AllOfficePage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AllOfficePage() {
    const [office, setOffice] = useState([])

    async function getData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Offices/Get?page=1&take=3")
        setOffice(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='alloffice'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Ofislərimiz</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Ofislərimiz</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                {
                    office && office.map((item) => (<div className="cardBox">
                        <img src={item.image} alt="" />
                        <div className="oneCard">
                            <h3>{item.name}</h3>
                            {item.employers}

                            <div className="nameBox">
                                <h4>Ramin Safarov</h4><p>Baş Direktor</p>
                            </div>
                            <div className="nameBox">
                                <h4>Günay İmaməliyeva </h4><p>Maliyyə Dirrektoru</p>
                            </div>
                            <div className="nameBox">
                                <h4>Gülgün Səfərova</h4><p>İR Departamentinin Rəhbəri</p>
                            </div>
                            <div className="nameBox">
                                <h4>Yalcin Tagiyev </h4><p>Əməliyyat şöbəsinin müdiri</p>
                            </div>
                        </div>
                        <div className="twoCard">
                            <span>Ünvan: {item.location}</span>
                            <span>Web: {item.web}</span>
                            <span>Phone: {item.phone}</span>
                            <span>Email: {item.email}</span>
                        </div>
                    </div>))
                }
                <div className="cardBox">
                    <img src="https://murphy.az/wp-content/uploads/2023/07/HUS_5148.jpg" alt="" />
                    <div className="oneCard">
                        <h3>Baş ofis</h3>
                        <div className="nameBox">
                            <h4>Ramin Safarov</h4><p>Baş Direktor</p>
                        </div>
                        <div className="nameBox">
                            <h4>Günay İmaməliyeva </h4><p>Maliyyə Dirrektoru</p>
                        </div>
                        <div className="nameBox">
                            <h4>Gülgün Səfərova</h4><p>İR Departamentinin Rəhbəri</p>
                        </div>
                        <div className="nameBox">
                            <h4>Yalcin Tagiyev </h4><p>Əməliyyat şöbəsinin müdiri</p>
                        </div>
                    </div>
                    <div className="twoCard">
                        <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                        <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                        <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                        <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                        <span>Ünvan: Azərbaycan, Bakı AZ1014,</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllOfficePage