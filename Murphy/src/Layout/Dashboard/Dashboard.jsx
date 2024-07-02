import React, { useState } from 'react'
import './Dashboard.scss'
import { Dashboard as DashboardData } from '../../Router/DashboardData';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Dashboard() {
    const [closeBtn, setcloseBtn] = useState(false)
    function openNavbar() {
        setcloseBtn(!closeBtn)
    }
    return (
        <nav className={`dashboard ${closeBtn ? "closedDashboard" : ""}`}>
            <div className={`closeBtn ${closeBtn ? "" : "closedCloseIcon"}`} onClick={openNavbar}>
                {
                    closeBtn ? <IoMdMenu /> : <IoMdClose />
                }

            </div>
            <div className="upBox">
                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" alt="" />
                </div>
                <div className="text">
                    <p>Welcome Admin</p>
                </div>
            </div>
            <div className="downBox">
                {
                    DashboardData && DashboardData.map((item) => (
                        <Link className='link' to={item.path}> <p key={item.id}>{item.name}</p></Link>
                    ))
                }
            </div>

        </nav>
    )
}

export default Dashboard