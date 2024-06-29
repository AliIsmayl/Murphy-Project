import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { SlCallOut } from "react-icons/sl";
import Logo from "../../Image/Logo-1.png"
import ModeBox from '../../Components/ModeBox';
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    function handleOpenNavbar() {
        setNavbarOpen(!navbarOpen)
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
                        <p>Home</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link" to={"/about"}>
                        <p>About Us</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link">
                        <p>Products</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link">
                        <p>Blog</p>
                        <div className="array">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link">
                        <p>Contact</p>
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
                    <div className="modeBox">
                        <ModeBox />
                    </div>
                    <div className="phone">
                        <a href="tel:0998982004" > <SlCallOut /></a>
                    </div>
                </div>
                {/* Eger user login olmayıbsa bu cür olacaq */}
                <div className="loginBox"><p><Link to={"/login"}>Log In</Link></p><div className="line"></div></div>
                {/* Eger user artıq login olubsa bu cür olacaq */}
                <div className="imageBox">
                    <div className="image">
                        <img src="https://b.fssta.com/uploads/application/soccer/headshots/713.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={`respNavbar ${navbarOpen ? "openNavbar" : ""}`}>
                {/* Eger user login olmayıbsa bu cür olacaq */}
                <div className="respNotUserLoginBox">
                    <div className="loginBox"><p>Log In</p><div className="line"></div></div>
                </div>
                {/* Eger user artıq login olubsa bu cür olacaq */}
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
                    <li>
                        <Link className="link">
                            <p>About Us</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="link">
                            <p>Products</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="link">
                            <p>Blog</p>
                            <div className="array">
                                <IoIosArrowRoundUp />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="link">
                            <p>Contact</p>
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
                    <div className="modeBox">
                        <ModeBox />
                    </div>
                    <div className="phone">
                        <a href="tel:0998982004" > <SlCallOut /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar