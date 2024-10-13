import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Header.scss';
import { Navigation } from 'swiper/modules';
import { IoIosArrowRoundUp } from "react-icons/io";
import { Autoplay } from 'swiper/modules';
import axios from 'axios'

function Header() {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [openText, setopenText] = useState(false)
    const [getData, setGetData] = useState([])

    const handleThumbClick = (index) => {
        if (mainSwiper !== null) {
            mainSwiper.slideTo(index);
        }
    };

    async function GetFunctionData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Sliders/Get?isdeleted=false&page=1&take=3")
        setGetData(res.data)
    }

    useEffect(() => {
        GetFunctionData()
    }, [])




    return (
        <header>
            <div className="wrapper">
                <Swiper
                    className="swiper-container gallery-top"
                    spaceBetween={10}
                    effect="coverflow"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    onSwiper={setMainSwiper}
                >
                    <div className="swiper-wrapper">
                        {
                            getData && getData.map((item) => (
                                <SwiperSlide style={{ backgroundImage: `url(${item.image})` }}>
                                    <div className="swiperBigBox" key={item.id}>
                                        <div className={`normalSwiperBox ${openText ? "openWindowAnimation" : ""}`}>
                                            <p>{item.tittle}</p>
                                            {/* <p><span>Secure</span> Freight Handling</p> */}
                                            <span>{item.description}</span>
                                            {/* <div className="headerSwiperBtnsBox">
                                                <button>
                                                    <p>Read More</p>
                                                    <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                                </button>
                                                <button>
                                                    <p>More Info</p>
                                                    <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        {/* <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_02.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className={`normalSwiperBox ${openText ? "openWindowAnimation" : ""}`}>
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_01.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className="normalSwiperBox">
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_03.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className="normalSwiperBox">
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}

                    </div>

                </Swiper>
                <Swiper
                    className="swiper-container gallery-thumbs"
                    spaceBetween={10}
                    slidesPerView={2}
                    freeMode
                    watchSlidesVisibility
                    watchSlidesProgress
                    modules={[Navigation]}

                >
                    <div className="swiper-wrapper">
                        {/* <SwiperSlide onClick={() => handleThumbClick(0)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_02.jpg" alt="" />
                            </div>
                        </SwiperSlide> */}
                        {/* {
                            getData && getData.map((item, index) => (
                                <SwiperSlide onClick={() => handleThumbClick(index)} >
                                <div className="headerSmallSwiperBox">
                                    <div className="frontBlurBox"></div>
                                    <img src={item.image} alt="" />
                                </div>
                            </SwiperSlide>
                            ))
                        } */}
                        {/* <SwiperSlide onClick={() => handleThumbClick(1)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_01.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => handleThumbClick(2)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_03.jpg" alt="" />
                            </div>
                        </SwiperSlide> */}
                    </div>
                </Swiper>
            </div>
        </header>
    );
}

export default Header;

/*
  <div className="wrapper">
                <Swiper
                    className="swiper-container gallery-top"
                    spaceBetween={10}
                    effect="coverflow"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    onSwiper={setMainSwiper}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_02.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className={`normalSwiperBox ${openText ? "openWindowAnimation" : ""}`}>
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_01.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className="normalSwiperBox">
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_03.jpg)" }}>
                            <div className="swiperBigBox">
                                <div className="normalSwiperBox">
                                    <p><span>Secure</span> Freight Handling</p>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis.</span>
                                    <div className="headerSwiperBtnsBox">
                                        <button>
                                            <p>Read More</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>
                                        </button>
                                        <button>
                                            <p>More Info</p>
                                            <p className='swiperArrow'><IoIosArrowRoundUp /></p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>

                </Swiper>
                <Swiper
                    className="swiper-container gallery-thumbs"
                    spaceBetween={10}
                    slidesPerView={2}
                    // breakpoints={{
                    //     640: {
                    //         slidesPerView: 2,
                    //     },
                    //     768: {
                    //         slidesPerView: 3,
                    //     },
                    //     1171: {
                    //         slidesPerView: 2,

                    //     },
                    // }}
                    freeMode
                    watchSlidesVisibility
                    watchSlidesProgress
                    modules={[Navigation]}

                >
                    <div className="swiper-wrapper">
                        <SwiperSlide onClick={() => handleThumbClick(0)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_02.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => handleThumbClick(1)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_01.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => handleThumbClick(2)} >
                            <div className="headerSmallSwiperBox">
                                <div className="frontBlurBox"></div>
                                <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/SLIDE_03.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
*/