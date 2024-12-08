import React, { useContext, useState } from 'react';
import './Delivering.scss';
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/userContext';
import toast from "react-hot-toast";

function Delivering() {
    const [openSearch, setopenSearch] = useState(false);
    const [error, setError] = useState(null);
    const { searchText, setsearchText } = useContext(userContext);
    const navigate = useNavigate();

    function handleOpenSearchBox() {
        setopenSearch(!openSearch);
        setError(null); // Yeni bir arama başlatırken hata sıfırlanır
    }

    async function handleGetSearchId(e) {
        e.preventDefault();
        setError(null); // Hata mesajını sıfırla
        if (!searchText) {
            setError("Tracking ID boş bırakılamaz.");
            return;
        }
        
        try {
            // API isteği
            const response = await fetch(`https://thetest-001-site1.ftempurl.com/api/Orders/GetByTrackingId/${searchText}`);
            
            if (!response.ok) {
                throw toast.error("Səhv tracking İd");

            }
            
            // API yanıtını kontrol ettikten sonra yönlendir
            navigate(`/delivery/detail/${searchText}`);
        } catch (err) {
            setError(err.message); // Hata mesajını kaydet
        }
    }

    return (
        <section id='delivering'>
            <div className={`searchBox ${openSearch ? "openedSearchBox" : ""}`}>
                <div className="closeBtn" onClick={handleOpenSearchBox}><IoMdClose /></div>
                <div className="icon"><FaSearchPlus /></div>
                <form action="" onSubmit={(e) => handleGetSearchId(e)}>
                    <input 
                        type="text" 
                        onChange={(e) => setsearchText(e.target.value)} 
                        placeholder='Tracking Id ...' 
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="leftDeliveryBox">
                <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-flight.png" alt="" />
            </div>
            <div className="middleDeliveryBox">
                <img src="http://goodrise.like-themes.com/wp-content/uploads/2024/01/icon-yes.png" alt="" />
<<<<<<< HEAD
                <h3>İnam Yaratmaq üçün
                    <p>Təhlükəsiz Logistika Həlləri</p>
=======
                <h3>
                Təhlükəsiz Logistika Həlləri ilə
                    <p>Etibarlılıq Təmin Edirik</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
                </h3>
            </div>

            <div className="rightDeliveryBox">
                <div className="insureBtnBox" onClick={handleOpenSearchBox}>
<<<<<<< HEAD
                    <p>Yüküm haradadır?</p>
=======
                    <p>Yüküm Haradadır?</p>
>>>>>>> d81957e53f3ea8389c06944d85e2d6b4b1b3a2a2
                    <div className="arrowBox"><IoIosArrowRoundUp /></div>
                </div>
            </div>
        </section>
    );
}

export default Delivering;
