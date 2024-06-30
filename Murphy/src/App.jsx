import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Layout/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer';
import BackToTop from './Components/BackToTop';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import CargoRequestPage from './Pages/CargoRequestPage/CargoRequestPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cargoReguest" element={<CargoRequestPage />} />
        </Routes>
        <BackToTop/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
