import React, { useEffect, useState } from 'react';
import './OrderUnsubmitedPage.scss';
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard';
import axios from 'axios';
import { IoReload } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { LuRepeat2 } from 'react-icons/lu';
import { FaDeleteLeft } from 'react-icons/fa6';
const token = localStorage.getItem("token");

function OrderUnsubmitedPage() {
    const [getData, setGetData] = useState([]);

    async function handleDelete(id) {
        try {
            // if (token) {
            //     await axios.delete(`http://alihuseyn-001-site1.btempurl.com/api/Abouts/Delete/${id}`, {
            //         headers: {
            //             "Content-Type": "application/json",
            //             Authorization: `Bearer ${token}`
            //         },
            //     });
            //     toast.error('Data Silindi...')
            //     getAxiosData();
            // } else {
            //     alert('proplem');
            // }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Error deleting item');
        }
    }

    async function handleRecovery(id) {
        try {
            // if (token) {
            //     await axios.patch(`http://alihuseyn-001-site1.btempurl.com/api/Abouts/Recovery/recovery/${id}`,null, {
            //         headers: {
            //             "Content-Type": "application/json",
            //             Authorization: `Bearer ${token}`
            //         },
            //     });
            //     toast.success('Geri qaytarıldı...')
            //     getAxiosData();
            // } else {
            //     alert('proplem');
            // }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Error deleting item');
        }
    }

    async function getAxiosData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Orders/Get?page=1&take=1000");
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
                            <th style={{ width: "90px" }}>Soft Delete</th>
                            <th style={{ width: "100px" }}>Change Order Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {getData && getData.map((item, index) => (
                                 <tr key={item.id}>
                                 <td style={{ width: "70px" }}>{index + 1}</td>
                                 <td style={{ width: "100px" }}>{item.companyName}</td>
                                 <td style={{ width: "220px"}}>{item.companyEmail}</td>
                                 <td style={{ width: "150px"}}>{item.address}</td>
                                 <td style={{ width: "150px" }}>{item.loadName}</td>
                                 <td style={{ width: "90px" }}><button style={{ background: "red" }} onClick={() => handleDelete(item.id)}><FaDeleteLeft /></button></td>
                                 <td style={{ width: "100px" }} >
                                     <Link to={"/admin/order/change"}>
                                         <button style={{ background: "#F06728" }} ><LuRepeat2 /></button>
                                     </Link>
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

export default OrderUnsubmitedPage;
