import React, { useState } from 'react';
import './ImageSwitcher.scss';
import { IoIosArrowRoundUp } from "react-icons/io";

function ImageSwitcher() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        { foto: 'http://goodrise.like-themes.com/wp-content/uploads/2023/12/promo_01.jpg', text: "Implementing Sustainable Methods", number: "01" },
        { foto: 'http://goodrise.like-themes.com/wp-content/uploads/2023/12/promo_02.jpg', text: "Logistics Strategy Development", number: "02" },
        { foto: 'http://goodrise.like-themes.com/wp-content/uploads/2023/12/promo_03.jpg', text: "International Shipping Logistics", number: "03" },
        { foto: 'http://goodrise.like-themes.com/wp-content/uploads/2023/12/promo_04.jpg', text: "E-commerce Delivery Optimization", number: "04" }
    ];

    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id='imageSwitcher' style={{ backgroundImage: `url(${images[activeIndex].foto})` }}>
            {images.map((item, index) => (
                <div className={`littleChangerBox ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                    onMouseOver={() => handleMouseOver(index)}
                >
                        <div className="upBox">
                            <p>{item.number}</p>
                        </div>
                        <div className="downBox">
                            <p>{item.text}</p>
                            <div className="arrow">
                                <IoIosArrowRoundUp />
                            </div>
                        </div>
                </div>
            ))}
        </section>
    );
}

export default ImageSwitcher;
