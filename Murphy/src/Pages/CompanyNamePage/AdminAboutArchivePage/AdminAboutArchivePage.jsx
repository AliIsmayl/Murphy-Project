import React, { useEffect, useState } from 'react'
import './AdminAboutArchivePage.scss'
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard'
import axios from 'axios'
import {     IoReload } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5";

function AdminAboutArchivePage() {
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
            <div className='archivePage'>
            <button className='home'><Link to={"/admin/about"}><IoChevronBackOutline /></Link></button>
                <div className="archiveTableBox">
                    <table >
                        <tr>
                            <th style={{ width: "75px" }}>Count</th>
                            <th style={{ width: "100px" }}>Tittle</th>
                            <th style={{ width: "100px" }}>Image</th>
                            <th style={{ width: "100px" }}>Desc</th>
                            <th style={{ width: "75px" }}>Delete</th>
                            <th style={{ width: "80px" }}>Reload</th>
                        </tr>
                        {
                            getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ width: "75px" }}>{index + 1}</td>
                                    <td style={{ width: "100px" }}>{item.tittle}</td>
                                    <td style={{ width: "100px" }}><Link to={item.image}><img src={item.image} alt="" /></Link></td>
                                    <td style={{ width: "100px" }}>{item.description}</td>
                                    <td style={{ width: "75px" }}><button style={{background:"red"}}><MdDelete /></button></td>
                                    <td style={{ width: "80px" }}><button style={{background:"green"}}><IoReload /></button></td>
                                </tr>
                            ))
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminAboutArchivePage