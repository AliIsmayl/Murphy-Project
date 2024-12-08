import React, { useEffect, useState } from 'react'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import MurphyPhoto from "../../Image/Logo-1.png"
import axios from 'axios'
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';
function Footer() {
    const [footer, setFooter] = useState([])

    async function getData() {
        const res = await axios.get("https://thetest-001-site1.ftempurl.com/api/Settings/Get?page=1&take=6")
        setFooter(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <footer>
            <div className="footerUpBox">
                <div className="leftFooterBox">
                    <img src={MurphyPhoto} alt="" />
                    <p>Logistika xidmətləri, malların hərəkətini və saxlanmasını səmərəli idarə etməyə yönəlmiş geniş fəaliyyət sahələrini əhatə edir.</p>
                    <div className="socialIconBox">
                        {
                            footer.map((item) => (
                                <>

                                    {item.key === "fblink" && (
                                        <Link className='link' target='_blank' to={item.value}><FaFacebookF /></Link>
                                    )}
                                    {item.key === "instagramlink" && (
                                        <Link className='link' target='_blank' to={item.value}><FaInstagram /></Link>
                                    )}
                                    {item.key === "twlink" && (
                                        <Link className='link' target='_blank' to={item.value}><FaTwitter /></Link>
                                    )}
                                </>
                            ))
                        }

                    </div>
                </div>
                <div className="middleFooterBox">
                    <h3>Əlaqə məlumatı</h3>
                    {
                        footer.map((item) => (
                            <div className='normalBox'>
                                {item.key === "location" && (
                                    <div className="informBox">
                                        <ImLocation2 />
                                        <div className="textBox">
                                            <p>Ünvanımız:</p>
                                            <span>{item.value}</span>
                                        </div>
                                    </div>
                                )}
                                {item.key === "Phone" && (
                                    <div className="informBox">
                                        <FaPhoneVolume />
                                        <div className="textBox">
                                            <p>Telefon:</p>
                                            <span>{item.value}</span>
                                        </div>
                                    </div>
                                )}
                                {item.key === "Email" && (
                                    <div className="informBox">
                                        <HiOutlineMail />
                                        <div className="textBox">
                                            <p>E-poçt:</p>
                                            <span>{item.value}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="footerDownBox">
                <p>
                "Murphy" saytı © 2024-cü ildə <span>"FB" qrupu</span> tərəfindən hazırlanmışdır.
                </p>
            </div>
        </footer>
    )
}

export default Footer