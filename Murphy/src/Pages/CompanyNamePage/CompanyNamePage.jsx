import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSolidArchiveOut } from "react-icons/bi";
import { FaPlusSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import NotMeanDashBoard from '../../Components/NotMeanDashBoard/NotMeanDashBoard';
import './CompanyNamePage.scss';
import toast from 'react-hot-toast';
const token = localStorage.getItem("token");

function AdminAbout() {
    const [getData, setGetData] = useState([])

    async function handleDelete(id) {
        try {
            if (token) {
                await axios.patch(`http://alihuseyn-001-site1.btempurl.com/api/Abouts/SoftDelete/${id}`, null, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                })
                toast.error('Silindi...')
                getAxiosData()

            } else {
                alert('proplem')
            }
        } catch (error) {

        }
    }

    async function getAxiosData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Abouts/Get?page=1&take=1000")
        setGetData(res.data)
    }
    useEffect(() => {
        getAxiosData()
    }, [])

    return (
        <div className='normalDashboardBox'>
            <NotMeanDashBoard />
            <section id='companyNamePage'>
                <div className="borderBox">
                    <div className="createBox">
                        <Link to={"/admin/about/create"}>
                            <button style={{ background: "#25224B", margin: "0 0 0 50px" }}><FaPlusSquare /></button>
                        </Link>
                        <Link to={"/admin/about/archive"}>
                            <button style={{ background: "green" }} ><BiSolidArchiveOut /></button>
                        </Link>
                    </div>
                    <table>
                        <tr>
                            <th style={{ width: "70px" }}>Count</th>
                            <th style={{ width: "100px" }}>Tittle</th>
                            <th style={{ width: "100px" }}>Image</th>
                            <th style={{ width: "70px" }}>Soft Delete</th>
                            <th style={{ width: "70px" }}>Edit</th>
                        </tr>
                        {
                            getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ width: "70px" }}>{index + 1}</td>
                                    <td style={{ width: "100px" }}>{item.tittle}</td>
                                    <td style={{ width: "100px" }}><Link to={item.image}><img src={item.image} alt="" /></Link></td>
                                    <td style={{ width: "70px" }}><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><FaDeleteLeft /></button></td>
                                    <td style={{ width: "70px" }} >
                                        <Link to={"/admin/about/update"}>
                                            <button style={{ background: "#F06728" }} ><RiEdit2Line /></button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </table>
                </div>
            </section>
        </div>
    )
}

export default AdminAbout