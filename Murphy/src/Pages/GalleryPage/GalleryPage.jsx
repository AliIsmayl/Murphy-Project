import React, { useEffect, useState } from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './GalleryPage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function GalleryPage() {
    const [gallery, setGallery] = useState([])
    const [take, setTake] = useState(4)

    function handleMoreText() {
        setTake((take) => take + 4)
    }
    async function getData() {
        const res = await axios.get(`https://thetest-001-site1.ftempurl.com/api/GalleryItems/Get?page=1&take=${take}`)
        setGallery(res.data)
    }
    useEffect(() => {
        getData()
    }, [take])

    return (
        <div className='galleryPage'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Qalereya</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Qalereya</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                {
                    gallery.map((item) => (
                        <Link to={item.image} className="cardBox">
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </Link>
                    ))
                }

            </div>
            <div className="moreBtn">
                <button onClick={handleMoreText}>Daha Çox</button>
            </div>
        </div>
    )
}

export default GalleryPage