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
        const res = await axios.get("https://thetest-001-site1.ftempurl.com/api/Services/Get?page=1&take=5")
        setGetData(res.data)
    }
    useEffect(() => {
        GetFunctionData()
    }, [])
    return (
        <section id='logisticService'>
            <div className="upLogisticServiceBox">
                <div className="headText">LOJİSTİKA XİDMƏTLƏRİ</div>
                <div className="normalBox">
<<<<<<< HEAD
                    <p>Sizin Xidmətinizdə Qlobal Logistika Təcrübəsi</p>
                    <span>Logistika xidmətləri, malların hərəkətini və saxlanmasını səmərəli idarə etməyə yönəlmiş geniş fəaliyyət sahələrini əhatə edir. Bu, nəqliyyat, anbarlaşdırma, inventar idarəetməsi, sifarişlərin yerinə yetirilməsi və paylanmanı əhatə edir.</span>
                    <Link className='link'to={'cargoReguest'}>
                        <p>Müraciət et</p>
=======
                    <p>Qlobal Logistika Ekspertizası Xidmətinizdə</p>
                    <span>Lojistika xidmətləri malların hərəkəti və saxlanmasını səmərəli idarə etməyə yönəlmiş geniş fəaliyyət spektrini əhatə edir. Buraya nəqliyyat, anbarlaşdırma, inventarın idarə edilməsi, sifarişin yerinə yetirilməsi və paylama daxildir.</span>
                    <Link className='link'to={'cargoReguest'}>
                        <p>İndi müraciət</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
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
                                    <Link to={`services/detail/${item.id}`}>
                                    <div className="swiperTextBox">
                                        <span>{item.tittle}</span>
                                        <p>{item.name}<div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                                    </div>
                                    </Link>
                                   
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