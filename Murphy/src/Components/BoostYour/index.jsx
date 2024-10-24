import React, { useEffect, useState } from 'react'
import './BoostYour.scss'
import { IoIosArrowRoundUp } from "react-icons/io";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import axios from 'axios'

function BoostYour() {

    const [about, setAbout] = useState([])
    async function GetDate() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Abouts/Get?page=1&take=3")
        setAbout(res.data)
    }
    useEffect(() => {
        GetDate()
    }, [])

    return (
        <>
            {
                about.map((item) => (
                    <section id='boostYour'>
                        <div className="boostLeftBox">
                            <h5>ŞİRKƏT HAQQINDA</h5>
                            <h2>{item.tittle}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="boostRightBox">
                            <div className="imgBox">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    </section>
                ))
            }
        </>

    )
}

export default BoostYour