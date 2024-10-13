import React, { useContext, useState } from 'react'
import './MyDelivery.scss'
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/userContext';
import NotMean from '../../Components/NotMean/NotMean';
import CargoHead from '../../Components/CargoHead/CargoHead';

function MyDelivery() {
    const [openSearch, setopenSearch] = useState(false)
    // const [searchText, setsearchText] = useState('')
    const { searchText, setsearchText } = useContext(userContext)
    const navigate = useNavigate()
    function handleOpenSearchBox() {
        setopenSearch(!openSearch)
    }

    function handleGetSearchId(e) {
        e.preventDefault()
        navigate(`/delivery/detail/${searchText}`)
    }

    return (
        <>
            <NotMean />
            <CargoHead/>
            <section id='myDelivery'>
                <div className={`searchBox ${openSearch ? "openedSearchBox" : ""}`}>
                    <div className="closeBtn" onClick={handleOpenSearchBox}><IoMdClose /></div>
                    <div className="icon"><FaSearchPlus /></div>
                    <form action="" onSubmit={(e) => handleGetSearchId(e)}>
                        <input type="text" onChange={(e) => setsearchText(e.target.value)} placeholder='Tracking Id ...' />
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <div className="leftDeliveryBox">
                    <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-flight.png" alt="" />
                </div>
                <div className="middleDeliveryBox">
                    <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-yes.png" alt="" />
                    <h3>Delivering Confidence through
                        <p>Secure Logistics Solutions</p>
                    </h3>
                </div>

                <div className="rightDeliveryBox">
                    <div className="insureBtnBox" onClick={handleOpenSearchBox}>
                        <p>Where My Cargo?</p>
                        <div className="arrowBox"><IoIosArrowRoundUp /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyDelivery