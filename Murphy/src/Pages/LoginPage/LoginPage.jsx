import './LoginPage.scss'
import Logo from '../../Image/Logo-1.png'
import { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiUser6Line } from "react-icons/ri";
import { PiLockKey } from "react-icons/pi";
import NotMean from '../../Components/NotMean/NotMean';
import { RiUser6Fill } from "react-icons/ri";
import { PiLockKeyFill } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdTransgender } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import CalendarPicker from './Calendar/Calendar';
import moment from 'moment'

function LoginPage() {
    const [changeBox, setchangeBox] = useState(false)
    const [openCalendarBox, setOpenCalendarBox] = useState(false)
    const [writeCalendarText, setWriteCalendarText] = useState(false)
    const [dateState, setDateState] = useState(null)

    function handleChangeBox() {
        setchangeBox(!changeBox)
    }

    function handleOpenCalendar() {
        setOpenCalendarBox(!openCalendarBox)
        setWriteCalendarText(true)
    }
    console.log("date", dateState);

    return (
        <>
            <NotMean />
            <section id='loginAndregisterBox'>
                <div className="loginPage">
                    <form action="" className={`${changeBox ? "changer" : ""}`}>
                        <img src={Logo} alt="" />
                        <label htmlFor="">Login</label>
                        <div className="inputBox">
                            <div className="inputIconBox"><RiUser6Line /></div>
                            <input type="text" placeholder='Username...' />
                        </div>
                        <div className="inputBox">
                            <div className="inputIconBox"><PiLockKey /></div>
                            <input type="password" placeholder='Password...' />
                        </div>

                        <button className='clickedBtn'>Login</button>
                        <p>Forgot password</p>
                        <h4>Going to <span onClick={handleChangeBox}>Register</span></h4>
                    </form>
                </div>
                <div className="registerPage">
                    <form action="" className={`${changeBox ? "changer" : ""}`}>
                        <img src={Logo} alt="" />
                        <label htmlFor="">Register</label>
                        <div className="allInputsBox">
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Line /></div>
                                <input type="text" placeholder='Name...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Fill /></div>
                                <input type="text" placeholder='Username...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Fill /></div>
                                <input type="text" placeholder='Surname...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><HiOutlineMail /></div>
                                <input type="email" placeholder='Email...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><PiLockKey /></div>
                                <input type="password" placeholder='Password...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><PiLockKeyFill /></div>
                                <input type="password" placeholder='Confirm Password...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><IoMdTransgender /></div>
                                <select name="" id="">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><LuImagePlus /></div>
                                <div className="input">
                                    <label for="pic">
                                        <p>Upload Image...</p>
                                        <input type="file" id="pic" />
                                    </label>

                                </div>
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><FaRegCalendarCheck /></div>

                                <div className="inputLittleBox" onClick={handleOpenCalendar}>
                                    <p>{

                                        writeCalendarText ? moment(dateState).format('MMMM Do YYYY')  : "Select Birthday..."}</p></div>

                                <div className={`openCalender ${openCalendarBox ? "opened" : ""}`}>
                                    <CalendarPicker setDateState={setDateState} dateState={dateState} />
                                    <p
                                        onClick={handleOpenCalendar}
                                    >Ok</p>
                                </div>
                            </div>

                        </div>

                        <button className='clickedBtn'>Register</button>
                        <h4>Going to <span onClick={handleChangeBox}>Login</span></h4>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginPage