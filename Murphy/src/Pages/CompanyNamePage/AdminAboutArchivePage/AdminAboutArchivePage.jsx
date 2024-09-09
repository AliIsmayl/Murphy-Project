import React, { useEffect, useState } from 'react';
import './AdminAboutArchivePage.scss';
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard';
import axios from 'axios';
import { IoReload } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
const token = localStorage.getItem("token");

function AdminAboutArchivePage() {
    const [getData, setGetData] = useState([]);

    async function handleDelete(id) {
        try {
            if (!token) {
                alert('Problem: Token is missing or invalid.');
                return;
            }

            const response = await axios.delete(
                `http://thetest-001-site1.ftempurl.com/api/Abouts/Delete/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                toast.error('Data Silindi...');
                getAxiosData(); // Assuming this function updates the UI or fetches data again.
            } else {
                toast.error('Silme işlemi başarısız oldu.');
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Bir hata oluştu, silme işlemi gerçekleştirilemedi.');
        }
    }


    async function handleRecovery(id) {
        try {
            if (!token) {
                alert('Problem: Token is missing or invalid.');
                return;
            }
    
            await axios.patch(
                `http://thetest-001-site1.ftempurl.com/api/Abouts/Recovery/recovery/${id}`,
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
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Abouts/Get?isdeleted=true&page=1&take=10");
        setGetData(res.data);
    }

    useEffect(() => {
        getAxiosData();
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <NotMeanDashBoard />
            <div className='archivePage'>
                <button className='home'><Link to={"/admin/about"}><IoChevronBackOutline /></Link></button>
                <div className="archiveTableBox">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "75px" }}>Count</th>
                                <th style={{ width: "100px" }}>Tittle</th>
                                <th style={{ width: "100px" }}>Image</th>
                                <th style={{ width: "100px" }}>Desc</th>
                                <th style={{ width: "75px" }}>Delete</th>
                                <th style={{ width: "85px" }}>Recovery</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getData && getData.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ width: "75px" }}>{index + 1}</td>
                                    <td style={{ width: "100px" }}>{item.tittle}</td>
                                    <td style={{ width: "100px" }}><Link to={item.image}><img src={item.image} alt="" /></Link></td>
                                    <td style={{ width: "100px" }}>{item.description}</td>
                                    <td style={{ width: "75px" }}><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><MdDelete /></button></td>
                                    <td style={{ width: "85px" }}><button style={{ background: "green" }} onClick={() => handleRecovery(item.id)}><IoReload /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminAboutArchivePage;
