import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.scss'
import { Dashboard as DashboardData } from '../../Router/DashboardData';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { userContext } from '../../Context/userContext';
import axios from 'axios';

function Dashboard() {
    const [closeBtn, setcloseBtn] = useState(false)
    const { getTokenData, setgetTokenData } = useContext(userContext)
    const token = localStorage.getItem("token");

    async function getToken() {
        if (token) {
            const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Autentications/GetCurrentUser", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + token
                },
            })
            setgetTokenData(res.data)
        }
    }
    function openNavbar() {
        setcloseBtn(!closeBtn)
    }
    useEffect(() => {
        getToken()
    }, [])

    return (
        <nav className={`dashboard ${closeBtn ? "closedDashboard" : ""}`}>
            <div className={`closeBtn ${closeBtn ? "" : "closedCloseIcon"}`} onClick={openNavbar}>
                {
                    closeBtn ? <IoMdMenu /> : <IoMdClose />
                }
            </div>
            <div className="upBox">
                <div className="image">
                    <img src={getTokenData && getTokenData.profileImage} alt="" />
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