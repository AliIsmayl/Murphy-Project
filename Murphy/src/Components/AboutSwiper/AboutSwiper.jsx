import React, { useEffect, useState } from 'react'
import './AboutSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios'
import { Link } from 'react-router-dom';

function AboutSwiper() {
    const [getData, setGetData] = useState([]);

    async function GetFunctionData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/PartnerCompanies/Get?page=1&take=3");
        setGetData(res.data);
    }

    useEffect(() => {
        GetFunctionData();
    }, []);

    return (
        <section id='aboutSwiper'>
            <div className="upBox">
                <h1>TESTIMONIALS</h1>
                <p>What Our Customers Say</p>
            </div>
            <div className="downBox">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        645: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        953: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        getData && getData.map((item) => (
                            <SwiperSlide>
                                <span>"</span>
                                <p>{item.description}</p>
                                <img src={item.image} alt="" />
                                <Link to={`${item.websiteLink}`}><h1>{item.name}</h1></Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default AboutSwiper