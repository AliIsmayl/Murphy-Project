import "./LoginPage.scss";
import Logo from "../../Image/Logo-1.png";
import { useContext, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiUser6Line, RiUser6Fill } from "react-icons/ri";
import { PiLockKey, PiLockKeyFill } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Göz simgeleri
import NotMean from "../../Components/NotMean/NotMean";
import { IoMdTransgender } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import CalendarPicker from "./Calendar/Calendar";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../Context/userContext";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "../../Image/back.jpg";

function LoginPage() {
  const [changeBox, setChangeBox] = useState(false);
  const [openCalendarBox, setOpenCalendarBox] = useState(false);
  const [writeCalendarText, setWriteCalendarText] = useState(false);
  const [dateState, setDateState] = useState(null);
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const [regImage, setRegImage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Şifre görünürlük state'i
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Onay şifresi görünürlük state'i
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showImage, setShowImage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isSending, setIsSending] = useState(false);

  function handleImage(files) {
    if (files[0].type.startsWith("image")) {
      setRegImage(files[0]);
    } else {
      setShowImage("Please upload an image file");
    }
    console.log("files:", files[0]);
  }

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "isValidLength",
        "Name must be between 3 and 27 letters",
        (value) => value && value.length >= 3 && value.length <= 27
      )
      .matches(
        /^[A-Za-zşŞçÇöÖüÜğĞıİ]+$/,
        "Name cannot contain numbers or symbols"
      )
      .required(errors?.UsernameOrEmail[0]),
    password: Yup.string()
      .test(
        "isValidLength",
        "Name must be between 8 symbols",
        (value) => value && value.length >= 8
      )
      // .matches(
      //   /^[A-Za-zşŞçÇöÖüÜğĞıİ]+$/,
      //   "Name cannot contain numbers or symbols"
      // )
      .required(errors?.Password[0]),
  });

  const registerValidationSchema = Yup.object().shape({
    regName: Yup.string()
      .test(
        "isValidLength",
        "Name must be between 3 and 27 letters", // 3 ile 27 karakter arasında değilse bu hata çıkar
        (value) => value && value.length >= 3 && value.length <= 27
      )
      .matches(
        /^[A-Za-zşŞçÇöÖüÜğĞıİ]+$/,
        "Name cannot contain numbers or symbols"
      )
      .required(errors?.Name[0]),
    regUserName: Yup.string()
      .test(
        "isValidLength",
        "Name must be between 3 and 27 letters",
        (value) => value && value.length >= 3 && value.length <= 27
      )
      .matches(
        /^[A-Za-zşŞçÇöÖüÜğĞıİ]+$/,
        "Name cannot contain numbers or symbols"
      )
      .required(errors?.UserName[0]),
    regSurName: Yup.string()
      .test(
        "isValidLength",
        "Name must be between 3 and 27 letters",
        (value) => value && value.length >= 3 && value.length <= 27
      )
      .matches(
        /^[A-Za-zşŞçÇöÖüÜğĞıİ]+$/,
        "Name cannot contain numbers or symbols"
      )
      .required(errors?.Surname[0]),
    regEmail: Yup.string()
      .email("Invalid email address")
      .required(errors?.Email[0]),
    regPass: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required(errors?.Password[0]),
    regConfPass: Yup.string()
      .oneOf([Yup.ref("regPass"), null], "Passwords must match")
      .required(errors?.ConfirmPassword[0]),
    regMale: Yup.string().required(errors?.Gender[0]),
  });

  async function handleLogin(values, { setSubmitting }) {
    const userData = {
      UsernameOrEmail: values.username,
      Password: values.password,
      isRemembered: values.remember,
    };
    try {
      const res = await axios.post(
        "http://thetest-001-site1.ftempurl.com/api/Autentications/Login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = res.data.token;
      const decoded = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(decoded));
      localStorage.setItem("token", token);
      setUser(decoded);
      const userRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      if (userRole === "Admin") {
        navigate("/admin/about");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Error during login:", error.message);
      toast.error("Login failed!");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleRegisterForm(values, { setSubmitting }) {
    setIsSending(true); // Register işlemi başladığında loading başlasın
    const form = new FormData();
    form.append("Name", values.regName);
    form.append("Surname", values.regSurName);
    form.append("UserName", values.regUserName);
    form.append("Email", values.regEmail);
    form.append("Password", values.regPass);
    form.append("ConfirmPassword", values.regConfPass);
    form.append("Gender", values.regMale);
    form.append("BirthDate", moment(dateState).format("YYYY-MM-DDTHH:mm:ss"));

    if (regImage) {
      form.append("Image", regImage);
    }

    try {
      const res = await axios.post(
        "http://thetest-001-site1.ftempurl.com/api/Autentications/Register",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 400) {
        setErrors(res.errors);
      }
      toast.success("Successfully registered!");
      setChangeBox(!changeBox);
    } catch (error) {
      console.log("Error during registration:", error);
      toast.error("Registration failed!");
    } finally {
      setSubmitting(false);
      setIsSending(false); // İşlem tamamlandıktan sonra loading bitmeli
    }
  }

  function handleChangeBox() {
    setChangeBox(!changeBox);
  }

  function handleOpenCalendar() {
    setOpenCalendarBox(!openCalendarBox);
    setWriteCalendarText(true);
  }

  return (
    <>
      <NotMean />
      <section
        id="loginAndregisterBox"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="loginPage">
          <Formik
            initialValues={{ username: "", password: "", remember: false }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className={`${changeBox ? "changer" : ""}`}>
                <img src={Logo} alt="" />
                <label>Login</label>
                <div className="inputBox">
                  <div className="logoAndInputBox">
                    <div className="inputIconBox">
                      <RiUser6Line />
                    </div>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username..."
                    />
                  </div>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="inputBox">
                  <div className="logoAndInputBox">
                    <div className="inputIconBox">
                      <PiLockKey />
                    </div>
                    <Field
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password..."
                    />
                    <div
                      className="eyeIcon"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <button className="rememberBtn">
                  <Field type="checkbox" name="remember" />
                  <p>Remember me</p>
                </button>
                <button
                  className="clickedBtn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
                <p>Forgot password</p>
                <h4>
                  Going to <span onClick={handleChangeBox}>Register</span>
                </h4>
              </Form>
            )}
          </Formik>
        </div>
        <div className="registerPage">
          <Formik
            initialValues={{
              regName: "",
              regUserName: "",
              regSurName: "",
              regEmail: "",
              regPass: "",
              regConfPass: "",
              regMale: "",
            }}
            validationSchema={registerValidationSchema}
            onSubmit={handleRegisterForm}
          >
            {({ isSubmitting }) => (
              <Form className={`${changeBox ? "changer" : ""}`}>
                <img src={Logo} alt="" />
                <label>Register</label>
                <div className="allInputsBox">
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <RiUser6Line />
                      </div>
                      <Field type="text" name="regName" placeholder="Name..." />
                    </div>
                    <ErrorMessage
                      name="regName"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <RiUser6Fill />
                      </div>
                      <Field
                        type="text"
                        name="regUserName"
                        placeholder="Username..."
                      />
                    </div>
                    <ErrorMessage
                      name="regUserName"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <RiUser6Fill />
                      </div>
                      <Field
                        type="text"
                        name="regSurName"
                        placeholder="Surname..."
                      />
                    </div>
                    <ErrorMessage
                      name="regSurName"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <HiOutlineMail />
                      </div>
                      <Field
                        type="email"
                        name="regEmail"
                        placeholder="Email..."
                      />
                    </div>
                    <ErrorMessage
                      name="regEmail"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <PiLockKey />
                      </div>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="regPass"
                        placeholder="Password..."
                      />
                      <div
                        className="eyeIcon"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </div>
                    <ErrorMessage
                      name="regPass"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <PiLockKeyFill />
                      </div>
                      <Field
                        type={showConfirmPassword ? "text" : "password"}
                        name="regConfPass"
                        placeholder="Confirm Password..."
                      />
                      <div
                        className="eyeIcon"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </div>
                    <ErrorMessage
                      name="regConfPass"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <IoMdTransgender />
                      </div>
                      <Field as="select" name="regMale">
                        <option hidden>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="regMale"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <LuImagePlus />
                      </div>
                      <div className="flexBox">
                        <div className="input">
                          <label htmlFor="pic">
                            <p>Upload Image...</p>
                            <input
                              onChange={(e) => handleImage(e.target.files)}
                              type="file"
                              id="pic"
                            />
                          </label>
                        </div>
                        <p style={{ color: "white" }}>
                          {showImage && showImage}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inputBox">
                    <div className="logoAndInputBox">
                      <div className="inputIconBox">
                        <FaRegCalendarCheck />
                      </div>
                      <div
                        className="inputLittleBox"
                        onClick={handleOpenCalendar}
                      >
                        <p>
                          {writeCalendarText
                            ? moment(dateState).format("MMMM Do YYYY")
                            : "Select Birthday..."}
                        </p>
                      </div>
                      <div
                        className={`openCalender ${
                          openCalendarBox ? "opened" : ""
                        }`}
                      >
                        <CalendarPicker
                          setDateState={setDateState}
                          dateState={dateState}
                        />
                        <p onClick={handleOpenCalendar}>Ok</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="clickedBtn"
                  disabled={isSubmitting}
                >
                  {isSending ? (
                    <img
                      src="https://i.gifer.com/ZKZg.gif"
                      style={{ width: "20px", height: "20px" }}
                      alt="Loading"
                    />
                  ) : (
                    "Register"
                  )}
                </button>
                <h4>
                  Going to <span onClick={handleChangeBox}>Login</span>
                </h4>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
