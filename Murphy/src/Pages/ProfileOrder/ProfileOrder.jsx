import React, { useEffect, useState } from 'react';
import './ProfileOrder.scss';
import axios from 'axios';
import { IoReload } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import NotMean from '../../Components/NotMean/NotMean';
const token = localStorage.getItem("token");

function ProfileOrder() {
    const [getData, setGetData] = useState([]);

    async function getAxiosData() {
        try {
            if (token) {
                const res = await axios.get(
                    "http://alihuseyn-001-site1.btempurl.com/api/Orders/GetAllByCurrentlyUser?page=1&take=100",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setGetData(res.data);
                getAxiosData()
            } else {
                // Handle case where token is not available or invalid
                console.log('Token is missing or invalid.');
                // Optionally, setGetData(null) or handle state accordingly
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally, setGetData(null) or handle state accordingly
        }
    }


    useEffect(() => {
        getAxiosData();
    }, []);

    return (
        <>
        <NotMean/>
            <div className='orderDetailpage'>
                <div className="orderPageImage"></div>
                <div className="myOrdersBox">
                    <Link className='link' to={'/profile/orderDelivered'}>My Delivered Orders</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "80px" }}>Count</th>
                            <th >Load Name</th>
                            <th >Status</th>
                            <th >Address</th>
                            <th style={{ width: "80px" }} >Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData && getData.map((item, index) => (
                            <tr key={item.id}>
                                <td style={{ width: "80px" }} >{index + 1}</td>
                                <td >{item.loadName}</td>
                                <td >{item.status === 1 ? "Hazırlanır" : item.status === 2 ? "Gömrükləmə başa çatdı" : item.status === 3 ? "Yoldadı" : item.status === 4 ? "Təyin olunmuş yere çatdı" : "..."}</td>
                                <td >{item.address}</td>
                                <td style={{ width: "80px" }} >
                                    <Link to={`/profile/order/detail/${item.id}`}>
                                        <button style={{ background: "gray" }} ><FaSearchPlus /></button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProfileOrder;
