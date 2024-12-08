import React, { useContext } from 'react'
import './ProfilePage.scss'
import NotMean from '../../Components/NotMean/NotMean'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/userContext';
function ProfilePage() {
    const { getTokenData } = useContext(userContext)

    return (
        <>
            <NotMean />
            <section id='profilePage'>
                <div className="profileBox">
                    <div className="upBox">
                        <div className="contactBox"><MdOutlineEdit /><p>Edit</p> </div>
                        <div className="profileImage">
                            <img src={getTokenData.profileImage} alt="" />
                        </div>
                        <div className="messageBox"><MdOutlineSearch /><p>Search</p></div>
                    </div>
                    <div className="downBox">
                        <h1>{getTokenData.surname} {getTokenData.name}</h1>
                        <span>{getTokenData.userName}</span>
                        <p>{getTokenData.email}</p>

                        {/* <div className="numberBox">
                            <div className="number"><p>65</p><span>Friend</span></div>
                            <div className="number"><p>43</p><span>Photos</span></div>
                            <div className="number"><p>21</p><span>Comments</span></div>
                        </div> */}
                        <div className="showMore"><Link className='link' to={"/profile/order"}>My Orders</Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfilePage