import React from 'react'
import './ProfilePage.scss'
import NotMean from '../../Components/NotMean/NotMean'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
function ProfilePage() {
    return (
        <>
            <NotMean />
            <section id='profilePage'>
                <div className="profileBox">
                    <div className="upBox">
                        <div className="contactBox"><MdOutlineEdit /><p>Edit</p> </div>
                        <div className="profileImage">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" alt="" />
                        </div>
                        <div className="messageBox"><MdOutlineSearch /><p>Search</p></div>
                    </div>
                    <div className="downBox">
                        <h1>Ali Ismayil</h1>
                        <span>Agdam, Azerbaijan</span>
                        <p>Web Design</p>
                        <p>Front End Developer</p>
                        <div className="numberBox">
                            <div className="number"><p>65</p><span>Friend</span></div>
                            <div className="number"><p>43</p><span>Photos</span></div>
                            <div className="number"><p>21</p><span>Comments</span></div>
                        </div>
                        <div className="showMore"><Link to={"/profile/order"}>My Orders</Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfilePage