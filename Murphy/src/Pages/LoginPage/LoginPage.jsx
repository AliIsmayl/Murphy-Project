import './LoginPage.scss';
import Logo from '../../Image/Logo-1.png';
import { useContext, useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiUser6Line, RiUser6Fill } from "react-icons/ri";
import { PiLockKey, PiLockKeyFill } from "react-icons/pi";
import NotMean from '../../Components/NotMean/NotMean';
import { IoMdTransgender } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import CalendarPicker from './Calendar/Calendar';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userContext } from '../../Context/userContext';

function LoginPage() {
    const [changeBox, setChangeBox] = useState(false);
    const [openCalendarBox, setOpenCalendarBox] = useState(false);
    const [writeCalendarText, setWriteCalendarText] = useState(false);
    const [dateState, setDateState] = useState(null);
    const { setUser } = useContext(userContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const userData = {
            UsernameOrEmail: username,
            Password: password,
            isRemembered: remember
        };
        try {

            const res = await axios.post("http://alihuseyn-001-site1.btempurl.com/api/Autentications/Login", userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const token = res.data.token;
            const decoded = jwtDecode(token);
            localStorage.setItem('user', JSON.stringify(decoded))
            console.log("decoded", res.data);
            setUser(decoded)
            localStorage.setItem('token', token)
            const userRole = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if (userRole === "Admin") {
                navigate('/admin/about');
            }
            else {
                navigate('/');

            }

        } catch (error) {
            console.log("Error during login:", error.message);
            if (error.response && error.response.data) {
                console.log("Server response:", error.response.data);
            }
        }
    }

    function handleChangeBox() {
        setChangeBox(!changeBox);
    }

    function handleOpenCalendar() {
        setOpenCalendarBox(!openCalendarBox);
        setWriteCalendarText(true);
    }

    console.log("date", dateState);

    return (
        <>
            <NotMean />
            <section id='loginAndregisterBox'>
                <div className="loginPage">
                    <form action="" className={`${changeBox ? "changer" : ""}`} onSubmit={handleLogin}>
                        <img src={Logo} alt="" />
                        <label>Login</label>
                        <div className="inputBox">
                            <div className="inputIconBox"><RiUser6Line /></div>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
                        </div>
                        <div className="inputBox">
                            <div className="inputIconBox"><PiLockKey /></div>
                            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
                        </div>
                        <button className='rememberBtn'>
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <p>Remember me</p>
                        </button>
                        <button className='clickedBtn' type='submit'>Login</button>
                        <p>Forgot password</p>
                        <h4>Going to <span onClick={handleChangeBox}>Register</span></h4>
                    </form>
                </div>
                <div className="registerPage">
                    <form action="" className={`${changeBox ? "changer" : ""}`}>
                        <img src={Logo} alt="" />
                        <label>Register</label>
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
                                <select>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><LuImagePlus /></div>
                                <div className="input">
                                    <label htmlFor="pic">
                                        <p>Upload Image...</p>
                                        <input type="file" id="pic" />
                                    </label>
                                </div>
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><FaRegCalendarCheck /></div>
                                <div className="inputLittleBox" onClick={handleOpenCalendar}>
                                    <p>{writeCalendarText ? moment(dateState).format('MMMM Do YYYY') : "Select Birthday..."}</p>
                                </div>
                                <div className={`openCalender ${openCalendarBox ? "opened" : ""}`}>
                                    <CalendarPicker setDateState={setDateState} dateState={dateState} />
                                    <p onClick={handleOpenCalendar}>Ok</p>
                                </div>
                            </div>
                        </div>
                        <button className='clickedBtn'>Register</button>
                        <h4>Going to <span onClick={handleChangeBox}>Login</span></h4>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
