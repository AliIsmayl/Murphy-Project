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
                            {item.employees && item.employees.map((x) => (
                                <div className="nameBox">
                                    <h4>{x.name} {x.surname}</h4><p>{x.position}</p>
                                </div>
                            ))}
                        </div>
                        <div className="twoCard">
                            <span>Ünvan: {item.location}</span>
                            <span>Web: {item.web}</span>
                            <span>Phone: {item.phone}</span>
                            <span>Email: {item.email}</span>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default AllOfficePage