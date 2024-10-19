import React, { useEffect, useState } from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './GalleryPage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function GalleryPage() {
    const [gallery, setGallery] = useState([])

    async function getData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/GalleryItems/Get?page=1&take=3")
        setGallery(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='galleryPage'>
            <NotMean />
            <section id='allOfficeHead'>
                <div className="backPage">
                    <h1>Lisenziyalar və Sertifikatlar</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Lisenziyalar və Sertifikatlar</p>
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
        </div>
    )
}

export default GalleryPage