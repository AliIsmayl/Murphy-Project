import React, { useEffect, useState } from 'react'
import './AdminAboutCreatePage.scss'
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard'
import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'
import axios from 'axios'

function AdminAboutCreatePage() {
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
            <div className='createPage'>
                <button className='home'><Link to={"/admin/about"}><IoChevronBackOutline /></Link></button>
                <div className='createTableBox' >
                    <form action="">
                        <input type="text" placeholder='Tittle...' />
                        <input type="text" placeholder='Description...' />
                        <input type="file" />
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAboutCreatePage