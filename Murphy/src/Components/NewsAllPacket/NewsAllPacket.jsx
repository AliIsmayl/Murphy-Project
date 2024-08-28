import React, { useEffect, useState } from 'react'
import './NewsAllPacket.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function NewsAllPacket() {
    const [info, setinfo] = useState('')

    async function getData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/News/Get?isdeleted=false&page=1&take=3")
        setinfo(res.data)
    }

    useEffect(() => {
        getData()

    }, [])
    return (
        <section id='newsAllPacket'>

            {
                info && info.map((item, index) => (
                    <Link to={`detail/${item.id}`} className="newCard">
                        <div className="imageBox">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="textBox">
                            <p>{item.tittle}</p>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}

export default NewsAllPacket