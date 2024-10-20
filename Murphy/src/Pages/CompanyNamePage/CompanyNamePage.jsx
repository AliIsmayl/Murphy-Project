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
            if (!token) {
                alert('Problem: Token is missing or invalid.');
                return;
            }
    
            const response = await axios.patch(
                `http://thetest-001-site1.ftempurl.com/api/Abouts/SoftDelete/${id}`,
                null,
                {
                    headers: {
                         "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            if (response.status === 200) {
                toast.error('Silindi...');
                getAxiosData(); // Assuming this function updates the UI or fetches data again.
            } else {
                toast.error('Silme işlemi başarısız oldu.');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Bir hata oluştu, silme işlemi gerçekleştirilemedi.');
        }
    }
    
    

    async function getAxiosData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Abouts/Get?page=1&take=1000")
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
                            <th style={{width:"100px"}}>Count</th>
                            <th >Tittle</th>
                            <th >Image</th>
                            <th style={{width:"100px"}}>Soft Delete</th>
                            <th style={{width:"100px"}} >Edit</th>
                        </tr>
                        {
                            getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{width:"100px"}} >{index + 1}</td>
                                    <td >{item.tittle}</td>
                                    <td ><Link to={item.image}><img src={item.image} alt="" /></Link></td>
                                    <td style={{width:"100px"}} ><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><FaDeleteLeft /></button></td>
                                    <td style={{width:"100px"}}  >
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