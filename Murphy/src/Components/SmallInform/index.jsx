import React, { useEffect, useState } from 'react'
import './SmallInform.scss'
import { GrMapLocation } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import axios from 'axios'
function SmallInform() {
    const [getData, setGetData] = useState([])

    async function GetFunctionData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Services/Get?page=1&take=5")
        setGetData(res.data)
    }

    useEffect(() => {
        GetFunctionData()
    }, [])

    return (
        <div id='smallInform'>
            {
                getData && getData.map((item) => (
                    <div className="smallBox" >
                        <span><i className={item.icon}></i></span>
                        <p>{item.tittle}</p>
                    </div>
                ))
            }


        </div>
    )
}

export default SmallInform