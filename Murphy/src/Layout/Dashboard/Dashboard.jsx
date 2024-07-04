import React, { useContext, useState } from 'react'
import './Dashboard.scss'
import { Dashboard as DashboardData } from '../../Router/DashboardData';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { userContext } from '../../Context/userContext';

function Dashboard() {
    const [closeBtn, setcloseBtn] = useState(false)
    const { getTokenData } = useContext(userContext)

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
                    <img src={getTokenData.profileImage} alt="" />
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