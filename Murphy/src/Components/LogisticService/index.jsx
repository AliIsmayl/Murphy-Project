import React from 'react'
import './LogisticService.scss'
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function LogisticService() {
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
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_01-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="serviceSwiperBox">
                         <div className="imageSwiper">
                            
                               <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_06-500x250.jpg" alt="" />
                         </div>
                            <div className="swiperTextBox">
                                <span>Railway</span>
                                <p>Packing Services <div className="arrowBox"><IoIosArrowRoundUp /></div></p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default LogisticService