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
<<<<<<< HEAD
                    <p>Logistika xidmətləri, malların hərəkətini və saxlanmasını səmərəli idarə etməyə yönəlmiş geniş fəaliyyət sahələrini əhatə edir.</p>
=======
                    <p>Lojistika xidmətləri malların hərəkətini və saxlanmasını səmərəli idarə etməyə yönəlmiş geniş fəaliyyət sahələrini əhatə edir.</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
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
<<<<<<< HEAD
                    <h3>Əlaqə məlumatları</h3>
=======
                    <h3>Əlaqə məlumatı</h3>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
                    {
                        footer.map((item) => (
                            <div className='normalBox'>
                                {item.key === "location" && (
                                    <div className="informBox">
                                        <ImLocation2 />
                                        <div className="textBox">
<<<<<<< HEAD
                                            <p>Bizim ünvan:</p>
=======
                                            <p>Ünvanımız:</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
                                            <span>{item.value}</span>
                                        </div>
                                    </div>
                                )}
                                {item.key === "Phone" && (
                                    <div className="informBox">
                                        <FaPhoneVolume />
                                        <div className="textBox">
<<<<<<< HEAD
                                            <p>Telefon:</p>
=======
                                            <p>Telefonlar:</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
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