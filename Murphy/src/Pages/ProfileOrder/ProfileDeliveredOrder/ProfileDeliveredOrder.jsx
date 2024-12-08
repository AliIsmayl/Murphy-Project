import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ProfileDeliveredOrder.scss';
import NotMean from '../../../Components/NotMean/NotMean';
const token = localStorage.getItem("token");

function ProfileDeliveredOrder() {
    const [getData, setGetData] = useState([]);

    async function getAxiosData() {
        try {
            if (token) {
                const res = await axios.get(
                    "https://thetest-001-site1.ftempurl.com/api/Orders/GetAllByCurrentlyUser?orderStatus=4&page=1&take=100",
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
                <Link className='link' to={'/profile/order'}>My Orders</Link>
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
                                <Link>
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

export default ProfileDeliveredOrder;
