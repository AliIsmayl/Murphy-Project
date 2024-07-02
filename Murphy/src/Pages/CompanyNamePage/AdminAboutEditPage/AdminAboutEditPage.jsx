import React, { useEffect, useState } from 'react'
import './AdminAboutEditPage.scss'
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard'
import { IoChevronBackOutline, IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminAboutEditPage() {
    const [getData, setGetData] = useState([])
    async function getAxiosData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Abouts/Get?page=1&take=5")
        setGetData(res.data)
    }
    useEffect(() => {
        getAxiosData()
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <NotMeanDashBoard />
            <div className='editPage'>
                <button className='home'><Link to={"/admin/about"}><IoChevronBackOutline /></Link></button>
                <div className="editTableBox">
                    <div className="closeBtn" ><IoCloseSharp /></div>
                    <form action="">
                        <input type="text" placeholder='Tittle...' />
                        <input type="text" placeholder='Description...' />
                        <input type="file" />
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAboutEditPage