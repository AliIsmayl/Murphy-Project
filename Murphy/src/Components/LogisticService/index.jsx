import React, { useEffect, useState } from 'react'
import './LogisticService.scss'
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios'
function LogisticService() {
    const [getData, setGetData] = useState([])

    async function GetFunctionData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Services/Get?page=1&take=5")
        setGetData(res.data)
    }
    useEffect(() => {
        GetFunctionData()
    }, [])
    return (
        <section id='logisticService'>
            <div className="upLogisticServiceBox">
                <div className="headText">LOGISTICS SERVICES</div>
                <div className="normalBox">
                    <p>Global Logistics Expertise at Your Service</p>
                    <span>Logistics services encompass a broad range of activities aimed at efficiently managing the movement and storage of goods. This includes transportation, warehousing, inventory management, order fulfillment, and distribution.</span>
                    <Link className='link'>
                        <p>Read More</p>
                        <div className="arrowBox">
                            <IoIosArrowRoundUp />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="downLogisticServiceBox">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        702: {
                            slidesPerView: 2,
                        },
                        1175: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        getData && getData.map((item) => (
                            <SwiperSlide>
                                <div className="serviceSwiperBox">
                                    <div className="imageSwiper">

                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="swiperTextBox">
                                        <span>{item.name}</span>
                                        <p>{item.tittle}<div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default LogisticService