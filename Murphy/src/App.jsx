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
import ProfileOrder from './Pages/ProfileOrder/ProfileOrder';
import ProfileDeliveredOrder from './Pages/ProfileOrder/ProfileDeliveredOrder/ProfileDeliveredOrder';
import OrderDetailPage from './Pages/ProfileOrder/OrderDetailPage/OrderDetailPage';
import DeliverinDetail from './Components/Delivering/DeliverinDetail/DeliverinDetail';
import MainLayOut from './Layout/MainLayOut/MainLayOut';
import AdminLayOut from './Layout/AdminLayOut/AdminLayOut';

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<MainLayOut />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services/detail/:id" element={<DetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/order" element={<ProfileOrder />} />
            <Route path="/profile/orderDelivered" element={<ProfileDeliveredOrder />} />
            <Route path="/profile/order/detail/:id" element={<OrderDetailPage />} />
            <Route path="/delivery/detail/:id" element={<DeliverinDetail />} />
            <Route path="/cargoReguest" element={<CargoRequestPage />} />
          </Route>
        </Routes>
        <BackToTop />
        <Routes>
          <Route path='/admin' element={<AdminLayOut />}>
            <Route path="/admin/about" element={<AdminAbout />} />
            <Route path="/admin/about/create" element={<AdminAboutCreatePage />} />
            <Route path="/admin/about/update" element={<AdminAboutEditPage />} />
            <Route path="/admin/about/archive" element={<AdminAboutArchivePage />} />
            <Route path="/admin/orders" element={<OrderPage />} />
            <Route path="/admin/order/change/:id" element={<OrderChangePage />} />
            <Route path="/admin/order/archive" element={<OrderArchivePage />} />
            <Route path="/admin/order/unsubmited" element={<OrderUnsubmitedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
