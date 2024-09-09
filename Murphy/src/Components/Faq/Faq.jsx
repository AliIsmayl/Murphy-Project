import React, { useEffect, useState } from 'react';
import './Faq.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from 'axios'

function Faq() {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [getData, setGetData] = useState([]);

    async function GetFunctionData() {
        const res = await axios.get("http://thetest-001-site1.ftempurl.com/api/Faqs/Get?page=1&take=3");
        setGetData(res.data);
    }

    useEffect(() => {
        GetFunctionData();
    }, []);
  

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section id='faq'>
            <div className="leftBox">
                <h3>
                    <p>Popular Questions</p>About our Logistics Services
                </h3>
                <div className="faqBox">
                    {getData && getData.map((faq, index) => (
                        <div key={index} className="questionText" onClick={() => toggleFaq(index)}>
                            <div className="text">
                                <div className={`icon ${openFaqIndex === index ? "iconFaq" : ""}`}>
                                    <IoIosArrowRoundForward />
                                </div>
                                <p>{faq.question}</p>
                            </div>
                            <div className={`informText ${openFaqIndex === index ? "openFaq" : ""}`}>
                                <span>{faq.answer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rightBox">
                <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/faq.jpg" alt="FAQ" />
            </div>
        </section>
    );
}

export default Faq;
