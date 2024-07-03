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
import Dashboard from './Layout/Dashboard/Dashboard';
import AdminAbout from './Pages/CompanyNamePage/CompanyNamePage';
import AdminAboutCreatePage from './Pages/CompanyNamePage/AdminAboutCreatePage/AdminAboutCreatePage';
import AdminAboutEditPage from './Pages/CompanyNamePage/AdminAboutEditPage/AdminAboutEditPage';
import AdminAboutArchivePage from './Pages/CompanyNamePage/AdminAboutArchivePage/AdminAboutArchivePage';
import { Toaster } from 'react-hot-toast';
import OrderPage from './Pages/OrderPage/OrderPage';
import OrderArchivePage from './Pages/OrderPage/OrderArchivePage/OrderArchivePage';
import OrderChangePage from './Pages/OrderPage/OrderChangePage/OrderChangePage';
import OrderUnsubmitedPage from './Pages/OrderPage/OrderUnsubmitedPage/OrderUnsubmitedPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cargoReguest" element={<CargoRequestPage />} />
        </Routes>
        <BackToTop />
        {/* <Footer /> */}
        <Dashboard />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/admin/about" element={<AdminAbout />} />
          <Route path="/admin/about/create" element={<AdminAboutCreatePage />} />
          <Route path="/admin/about/update" element={<AdminAboutEditPage />} />
          <Route path="/admin/about/archive" element={<AdminAboutArchivePage />} />
          <Route path="/admin/orders" element={<OrderPage />} />
          <Route path="/admin/order/change" element={<OrderChangePage />} />
          <Route path="/admin/order/archive" element={<OrderArchivePage />} />
          <Route path="/admin/order/unsubmited" element={<OrderUnsubmitedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
