import React, { useEffect, useState } from 'react'
import './OrderChangePage.scss'
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard'
import { IoChevronBackOutline, IoCloseSharp } from 'react-icons/io5'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function OrderChangePage() {
    const { id } = useParams();
    const [getData, setGetData] = useState({
        status: 0,
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        address: '',
        loadName: '',
        loadWeight: 0,
        loadCapasity: 0
    });
    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    async function getAxiosData() {
        const res = await axios.get(`http://alihuseyn-001-site1.btempurl.com/api/Orders/Get/${id}?isdeleted=false`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setGetData(res.data);
    }

    async function handleUpdate(e) {
        e.preventDefault();
        try {
            await axios.patch(`http://alihuseyn-001-site1.btempurl.com/api/Orders/ChangeOrderStatus/${id}`, { status: getData.status }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Dəyişiklik edildi...')
            navigate('/admin/orders')

        } catch (error) {
            alert("An error occurred while updating.");
        }
    }

    useEffect(() => {
        getAxiosData();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setGetData(prevData => ({
            ...prevData,
            [name]: parseInt(value)
        }));
    }

    return (
        <div style={{ display: "flex" }}>
            <NotMeanDashBoard />
            <div className='editPage'>
                <button className='home'><Link to={"/admin/orders"}><IoChevronBackOutline /></Link></button>
                <div className="editTableBox">
                    <div className="closeBtn"><IoCloseSharp /></div>
                    <form onSubmit={handleUpdate}>
                        <label>
                            <select name="status" value={getData.status} onChange={handleChange}>
                                <option hidden>Choose one...</option>
                                <option value={1}>Hazırlanır</option>
                                <option value={2}>Gömrükləmə başa çatdı</option>
                                <option value={3}>Yoldadır</option>
                                <option value={4}>Təyin olunmuş yere çatdı</option>
                            </select>
                        </label>
                        <div className='input'>Company Name: {getData.companyName}</div>
                        <div className='input' style={{ fontSize: "15px" }}>Company Email: {getData.companyEmail}</div>
                        <div className='input'>Company Phone: {getData.companyPhone}</div>
                        <div className='input'>Address: {getData.address}</div>
                        <div className='input'>Load Name: {getData.loadName}</div>
                        <div className='input'>Load Weight: {getData.loadWeight}</div>
                        <div className='input'>Load Capacity: {getData.loadCapasity}</div>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrderChangePage;
