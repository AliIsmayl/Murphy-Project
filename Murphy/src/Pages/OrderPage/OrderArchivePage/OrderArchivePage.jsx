import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoChevronBackOutline, IoReload } from 'react-icons/io5';
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard';
import './OrderArchivePage.scss';
import toast from 'react-hot-toast';
const token = localStorage.getItem("token");

function OrderArchivePage() {
    const [getData, setGetData] = useState([]);

    async function handleDelete(id) {
        try {
            if (token) {
                await axios.delete(`http://thetest-001-site1.ftempurl.com/api/Orders/Delete/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                });
                toast.error('Data Silindi...')
                getAxiosData();
            } else {
                alert('proplem');
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Error deleting item');
        }
    }

    async function handleRecovery(id) {
        try {
            if (!token) {
                alert('Problem: Token is missing or invalid.');
                return;
            }
    
            await axios.patch(
                `http://thetest-001-site1.ftempurl.com/api/Orders/Recovery/${id}`,
                null,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            toast.success('Geri qaytarıldı...');
            getAxiosData(); // Assuming this function updates the UI or fetches data again.
        } catch (error) {
            console.error('Error recovering item:', error);
            toast.error('Bir hata oluştu, geri alma işlemi gerçekleştirilemedi.');
        }
    }
    

    async function getAxiosData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Orders/Get?isdeleted=true&page=1&take=1000");
        setGetData(res.data);
    }

    useEffect(() => {
        getAxiosData();
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <NotMeanDashBoard />
            <div className='archivePage'>
                <button className='home'><Link to={"/admin/orders"}><IoChevronBackOutline /></Link></button>
                <div className="archiveTableBox">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "70px" }}>Count</th>
                                <th style={{ width: "100px" }}>Compnay Name</th>
                                <th style={{ width: "220px" }}>Company Email</th>
                                <th style={{ width: "150px" }}>Address</th>
                                <th style={{ width: "150px" }}>Load Name</th>
                                <th style={{ width: "90px" }}>Delete</th>
                                <th style={{ width: "100px" }}>Recovery</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ width: "70px" }}>{index + 1}</td>
                                    <td style={{ width: "100px" }}>{item.companyName}</td>
                                    <td style={{ width: "220px" }}>{item.companyEmail}</td>
                                    <td style={{ width: "150px" }}>{item.address}</td>
                                    <td style={{ width: "150px" }}>{item.loadName}</td>
                                    <td style={{ width: "90px" }}><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><MdDeleteOutline /></button></td>
                                    <td style={{ width: "100px" }} >
                                        <button style={{ background: "green" }} onClick={() => handleRecovery(item.id)}><IoReload /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderArchivePage;
