import React, { useEffect, useState } from 'react'
import './CompanyNamePage.scss'
import NotMeanDashBoard from '../../Components/NotMeanDashBoard/NotMeanDashBoard'
import axios from 'axios'
import { FaDeleteLeft } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { FaPlusSquare } from "react-icons/fa";
import { BiSolidArchiveOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function AdminAbout() {
    const [getData, setGetData] = useState([])
    const [openArchive, setopenArchive] = useState(false)
    const [openCreate, setopenCreate] = useState(false)
    const [textUpdate, settextUpdate] = useState(false)

    function handleOpenArchiveBox() {
        setopenArchive(!openArchive)
        setopenCreate(false)
        settextUpdate(false)


    }
    function handleUpdateBox() {
        settextUpdate(!textUpdate)
        setopenCreate(false)
        setopenArchive(false)

    }
    function handleOpenCreateBox() {
        setopenCreate(!openCreate)
        setopenArchive(false)
        settextUpdate(false)

    }

    async function getAxiosData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Abouts/Get?page=1&take=5")
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
                    {/* <div className={`archiveTableBox ${openArchive ? "openArchive" : ""}`}>
                            <div className="closeBtn" onClick={handleOpenArchiveBox}><IoCloseSharp /></div>
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
                                            <td style={{ width: "75px" }}><button><MdDelete /></button></td>
                                            <td style={{ width: "80px" }}><button><IoReload /></button></td>
                                        </tr>
                                    ))
                                }

                            </table>
                        </div> */}
                    {/* <div className={`createTableBox ${openCreate ? "openArchive" : ""}`}>
                        <div className="closeBtn" onClick={handleOpenCreateBox}><IoCloseSharp /></div>
                        <form action="">
                            <input type="text" placeholder='Tittle...' />
                            <input type="text" placeholder='Description...' />
                            <input type="file" />
                            <button>Create</button>
                        </form>
                    </div> */}
                    {/* <div className={`editTableBox ${textUpdate ? "openArchive" : ""}`}>
                        <div className="closeBtn" onClick={handleUpdateBox}><IoCloseSharp /></div>
                        <form action="">
                            <input type="text" placeholder='Tittle...' />
                            <input type="text" placeholder='Description...' />
                            <input type="file" />
                            <button>Update</button>
                        </form>
                    </div> */}
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
                                    <td style={{ width: "70px" }}><button style={{ background: "red" }}><FaDeleteLeft /></button></td>
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