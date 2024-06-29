import React, { useEffect, useState } from 'react';
import './ImageSwitcher.scss';
import axios from 'axios';

function ImageSwitcher() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [getData, setGetData] = useState([]);

    async function GetFunctionData() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/CustomInfo/Get?page=1&take=4");
        setGetData(res.data);
    }

    useEffect(() => {
        GetFunctionData();
    }, []);

    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id='imageSwitcher' style={{ backgroundImage: `url(${getData[activeIndex]?.image})` }}>
            {getData && getData.map((item, index) => (
                <div className={`littleChangerBox ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                    onMouseOver={() => handleMouseOver(index)}
                >
                    <div className="upBox">
                        <p>0{item.id}</p>
                    </div>
                    <div className="downBox">
                        <p>{item.tittle}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ImageSwitcher;
