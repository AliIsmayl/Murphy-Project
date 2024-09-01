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
import toast, { Toaster } from 'react-hot-toast';

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

    const [regName, setRegName] = useState('')
    const [regUserName, setRegUserName] = useState('')
    const [regSurName, setRegSurName] = useState('')
    const [regEmail, setRegEmail] = useState('')
    const [regPass, setRegPass] = useState('')
    const [regConfPass, setRegConfPass] = useState('')
    const [regMale, setRegMale] = useState('')
    const [regImage, setRegImage] = useState('')

    function handleImage(files) {
        setRegImage(files[0])
    }

    async function handleLogin(e) {
        e.preventDefault();
        const userData = {
            UsernameOrEmail: username,
            Password: password,
            isRemembered: remember
        };
        try {

            const res = await axios.post("http://thetest-001-site1.ftempurl.com/api/Autentications/Login", userData, {
                headers: {
                    "Content-Type": "multipart/form-data",

                },
            });

            const token = res.data.token;
            const decoded = jwtDecode(token);
            localStorage.setItem('user', JSON.stringify(decoded))
            localStorage.setItem('token', token)
            setUser(decoded)
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

    async function handleRegisterForm(e) {
        e.preventDefault();

        const form = new FormData();

        // Kullanıcı verilerini FormData'ya ekleyin
        form.append('Name', regName);
        form.append('Surname', regSurName);
        form.append('UserName', regUserName);
        form.append('Email', regEmail);
        form.append('Password', regPass);
        form.append('ConfirmPassword', regConfPass);
        form.append('Gender', regMale); // Eğer bu bir sayı ise, +regMale yapmanıza gerek yok

        // Tarihi doğru formatta ekleyin (YYYY-MM-DDT00:00:00)
        form.append('BirthDate', moment(dateState).format('YYYY-MM-DDTHH:mm:ss'));

        // Resmi FormData'ya ekleyin (Tek bir dosya varsayarsak)
        if (regImage) {
            form.append('Image', regImage);
        }

        try {
            const response = await axios.post("http://thetest-001-site1.ftempurl.com/api/Autentications/Register", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success('Successfully registered!');
            setChangeBox(!changeBox);
        } catch (error) {
            console.log("Error during registration:", error);
            if (error.response) {
                console.log("Server responded with:", error.response.data);
                toast.error(error.response.data.message || 'Registration failed!');
            } else {
                console.log("Error:", error.message);
                toast.error('Registration failed!');
            }
        }

    }



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
                    <form onSubmit={(e) => handleRegisterForm(e)} action="" className={`${changeBox ? "changer" : ""}`}>
                        <img src={Logo} alt="" />
                        <label>Register</label>
                        <div className="allInputsBox">
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Line /></div>
                                <input type="text" onChange={(e) => setRegName(e.target.value)} placeholder='Name...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Fill /></div>
                                <input type="text" onChange={(e) => setRegUserName(e.target.value)} placeholder='Username...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><RiUser6Fill /></div>
                                <input type="text" onChange={(e) => setRegSurName(e.target.value)} placeholder='Surname...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><HiOutlineMail /></div>
                                <input type="email" onChange={(e) => setRegEmail(e.target.value)} placeholder='Email...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><PiLockKey /></div>
                                <input type="password" onChange={(e) => setRegPass(e.target.value)} placeholder='Password...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><PiLockKeyFill /></div>
                                <input type="password" onChange={(e) => setRegConfPass(e.target.value)} placeholder='Confirm Password...' />
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><IoMdTransgender /></div>
                                <select onChange={(e) => setRegMale(e.target.value)}>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <div className="inputIconBox"><LuImagePlus /></div>
                                <div className="input">
                                    <label htmlFor="pic">
                                        <p>Upload Image...</p>
                                        <input onChange={(e) => handleImage(e.target.files)} type="file" id="pic" />
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
                        <button type='submit' className='clickedBtn'>Register</button>
                        <h4>Going to <span onClick={handleChangeBox}>Login</span></h4>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
