import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSolidArchiveOut } from "react-icons/bi";
import { FaPlusSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import NotMeanDashBoard from '../../Components/NotMeanDashBoard/NotMeanDashBoard';
import './OrderPage.scss';
import toast from 'react-hot-toast';
const token = localStorage.getItem("token");
import { LuArchiveRestore } from "react-icons/lu";
import { LuRepeat2 } from "react-icons/lu";

function OrderPage() {
    const [getData, setGetData] = useState([])

    async function handleDelete(id) {
        try {
            if (!token) {
                alert('Problem: Token is missing or invalid.');
                return;
            }

            await axios.patch(
                `http://alihuseyn-001-site1.btempurl.com/api/Orders/SoftDelete/${id}`,
                null,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.error('Silindi...');
            getAxiosData(); // Assuming this function updates the UI or fetches data again.
        } catch (error) {
            console.error('Error during deletion:', error);
            toast.error('Bir hata oluştu, silme işlemi gerçekleştirilemedi.');
        }
    }



    async function getAxiosData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Orders/Get?isdeleted=false&page=1&take=1000")
        setGetData(res.data)
    }
    useEffect(() => {
        getAxiosData()
    }, [])

    return (
        <div className='normalDashboardBox'>
            <NotMeanDashBoard />
            <section id='orderPage'>
                <div className="borderBox">
                    <div className="createBox">
                        <Link to={"/admin/order/unsubmited"}>
                            <button style={{ background: "#25224B", margin: "0 0 0 50px" }}><LuArchiveRestore /></button>
                        </Link>
                        <Link to={"/admin/order/archive"}>
                            <button style={{ background: "green" }} ><BiSolidArchiveOut /></button>
                        </Link>
                    </div>
                    <table>
                        <tr>
                            <th style={{ width: "70px" }}>Count</th>
                            <th style={{ width: "100px" }}>Compnay Name</th>
                            <th style={{ width: "220px" }}>Company Email</th>
                            <th style={{ width: "150px" }}>Address</th>
                            <th style={{ width: "150px" }}>Load Name</th>
                            <th style={{ width: "150px" }}>Load Name</th>
                            <th style={{ width: "90px" }}>Soft Delete</th>
                            <th style={{ width: "100px" }}>Change Order Status</th>
                        </tr>
                        {
                            getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ width: "70px" }}>{index + 1}</td>
                                    <td style={{ width: "100px" }}>{item.companyName}</td>
                                    <td style={{ width: "220px" }}>{item.companyEmail}</td>
                                    <td style={{ width: "150px" }}>{item.address}</td>
                                    <td style={{ width: "150px" }}>{item.loadName}</td>
                                    <td style={{ width: "150px" }}>{item.status === 1 ? "Hazırlanır" : item.status === 2 ? "Gömrükləmə başa çatdı" : item.status === 3 ? "Yoldadır" : item.status === 4 ? "Təyin olunmuş yere çatdı" : ""}</td>
                                    <td style={{ width: "90px" }}><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><FaDeleteLeft /></button></td>
                                    <td style={{ width: "100px" }} >
                                        <Link to={`/admin/order/change/${item.id}`}>
                                            <button style={{ background: "#F06728" }} ><LuRepeat2 /></button>
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

export default OrderPage