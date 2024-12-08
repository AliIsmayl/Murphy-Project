import React, { useContext, useEffect } from 'react'
import './Navbar.scss'
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { SlCallOut } from "react-icons/sl";
import Logo from "../../Image/Logo-1.png"
import ModeBox from '../../Components/ModeBox';
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
import { userContext } from '../../Context/userContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const { getTokenData, setgetTokenData } = useContext(userContext)
    const [getData, setGetData] = useState([])
    const [openRespNavbarText, setopenRespNavbarText] = useState(false)
    const token = localStorage.getItem("token");

    // console.log("yeni update:", token)

    async function getToken() {
        if (token) {
            const res = await axios.get("https://thetest-001-site1.ftempurl.com/api/Autentications/GetCurrentUser", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + token
                },
            })
            setgetTokenData(res.data)
        }
    }

    async function GetFunctionData() {
        const res = await axios.get("https://thetest-001-site1.ftempurl.com/api/Services/Get?page=1&take=5")
        setGetData(res.data)
    }
    useEffect(() => {
        GetFunctionData()
        getToken()

    }, [])
    function handleOPenRespNavbarText() {
        setopenRespNavbarText(!openRespNavbarText)
    }
    const navigate = useNavigate()
    function handleOpenNavbar() {
        setNavbarOpen(!navbarOpen)
    }

    console.log("role", getTokenData)

    function handleDeleteLocal() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/")
        window.location.reload()

    }

    return (
        <nav>
            <div className="menuBox" onClick={handleOpenNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logoBox">
                <img src={Logo} alt="logo" />
            </div>
            <ul id='normalUl'>
                <li>
                    <Link className="link" to={"/"}>
                        <p>Ana Səhifə</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link" >
                        <p>Şirkət profili</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                    <div className="openSubmenu">
                        <ul>
                            <Link className="link" to={"/about"}>
                                <p>Haqqımızda</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                            <Link className="link" to={"/summary"}>
                                <p>Xülasə</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                            <Link className="link" to={"/allOffice"}>
                                <p>Ofislərimiz</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                            <Link className="link" to={"/sertificate"}>
                                <p>Lisenziyalar və Sertifikatlar</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                            <Link className="link" to={"/gallery"}>
                                <p>Qalereya</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                            <Link className="link" to={"/structor"}>
                                <p>Struktur</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </ul>
                    </div>

                </li>
                <li>
                    <Link className="link" >
                        <p>Xidmətlərimiz</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                    <div className="openSubmenu">
                        <ul>
                            {
                                getData && getData.map((item) => (
                                    <Link className="xidmətLink" to={`services/detail/${item.id}`} key={item.id}>
                                        <p>{item.tittle}</p>
                                        <div className="array">
                                            <IoIosArrowRoundUp />
                                        </div>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>

                </li>
                <li>
                    <Link className="link" to={"/news"}>
                        <p>Xəbərlər</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                {getTokenData.role === "Admin" ?
                    <li>
                        <Link className="link" to={'/admin'}>
                            <p> Admin </p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>

                    : ""}

                <li>
                    <Link className="link" to={"/myDelivery"}>
                        <p>Yüküm haradadır</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
            </ul>
            <div className='loginAndModeBox'>
                <div className='normalBox'>
                    <div className="lang1Box">Az</div>
                    <div className="lang1Box">En</div>
                    <div className="lang1Box">Ru</div>
                    {/* <div className="modeBox">
                        <ModeBox />
                    </div> */}
                    <div className="phone">
                        <a href="tel:0998982004" > <SlCallOut /></a>
                    </div>
                </div>
                {/* Eger user login olmayıbsa bu cür olacaq */}
                {
                    getTokenData.role ?
                        <div className="loginBox" onClick={handleDeleteLocal}><p><Link >Log Out</Link></p><div className="line"></div></div>
                        :
                        <Link to={"/login"} className="loginBox"><p><Link to={"/login"}>Log In</Link></p><div className="line"></div></Link>
                }

                {/* Eger user artıq login olubsa bu cür olacaq */}

                {
                    getTokenData && getTokenData ?
                        <Link to={'/profile'}>
                            <div className="imageBox">
                                <div className="image">
                                    <img src={getTokenData && getTokenData.profileImage} alt="" />
                                </div>
                            </div>
                        </Link> : ""
                }
            </div>
            <div className={`respNavbar ${navbarOpen ? "openNavbar" : ""}`}>
                <div className="respNotUserLoginBox">
                    <div className="loginBox"><p>Log In</p><div className="line"></div></div>
                </div>
                <div className="respHaveUserLoginBox">
                    <div className="imageBox">
                        <div className="image">
                            <img src="https://b.fssta.com/uploads/application/soccer/headshots/713.png" alt="" />
                        </div>
                    </div>
                    <div className="userInformBox">
                        <p>Ali</p>
                        <span>ali.ismayil.681@gmail.com</span>
                    </div>
                </div>
                <div className="closeBtn" onClick={handleOpenNavbar}>
                    <TfiClose />
                </div>
                <ul>
                    <li>
                        <Link className="link">
                            <p>Home</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                    <li onClick={handleOPenRespNavbarText}>
                        <Link className="link">
                            <p>Şirkət</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>

                    </li>
                    <ul className={`openMenu ${openRespNavbarText ? "opened" : ""}`}>
                        <li>
                            <Link className="link" to={"/about"}>
                                <p>Haqqımızda</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/about"}>
                                <p>Xülasə</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/about"}>
                                <p>Ofislərimiz</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/about"}>
                                <p>Lisenziyalar və Sertifikatlar</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/about"}>
                                <p>Struktur</p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <li>
                        <Link className="link">
                            <p>Products</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                    {getTokenData.role === "Admin" ?
                        <li>
                            <Link className="link" to={'/admin'}>
                                <p> Admin </p>
                                <div className="array">
                                    <IoIosArrowRoundUp />
                                </div>
                            </Link>
                        </li>

                        : ""}
                    <li>
                        <Link className="link">
                            <p>Kargom haradadır</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className='respNormalBox'>
                    <div className="lang1Box">Az</div>
                    <div className="lang1Box">En</div>
                    <div className="lang1Box">Ru</div>
                    {/* <div className="modeBox">
                        <ModeBox />
                    </div> */}
                    <div className="phone">
                        <a href="tel:0998982004" > <SlCallOut /></a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar