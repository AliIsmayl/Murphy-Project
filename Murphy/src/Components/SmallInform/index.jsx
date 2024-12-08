import React, { useEffect, useState } from 'react'
import './SmallInform.scss'
import { GrMapLocation } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import axios from 'axios'
import { Link } from 'react-router-dom';
function SmallInform() {
    const [getData, setGetData] = useState([])

    async function GetFunctionData() {
        const res = await axios.get("https://thetest-001-site1.ftempurl.com/api/Services/Get?page=1&take=5")
        setGetData(res.data)
    }

    useEffect(() => {
        GetFunctionData()
    }, [])

    return (
        <div id='smallInform'>
            {
                getData && getData.map((item) => (
                    <Link to={`services/detail/${item.id}`}>
                        <div className="smallBox" >
                            <span><i className={item.icon}></i></span>
                            <p>{item.name}</p>
                        </div>
                    </Link>

                ))
            }


        </div>
    )
}

export default SmallInform