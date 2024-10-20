import React, { useEffect, useState } from 'react'
import './NewsAllPacket.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function NewsAllPacket() {
    const [info, setinfo] = useState('')
    const [take, setTake] = useState(1)

    function handleMoreText() {
        setTake((take) => take + 1)
    }
    async function getData() {
        const res = await axios.get(`http://thetest-001-site1.ftempurl.com/api/News/Get?isdeleted=false&page=1&take=${take}`)
        setinfo(res.data)
    }

    useEffect(() => {
        getData()

    }, [take])
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
            <div className="moreBtn">
                <button onClick={handleMoreText}>Daha Çox</button>
            </div>
        </section>
    )
}

export default NewsAllPacket