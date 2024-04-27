import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Layout/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer';
import BackToTop from './Components/BackToTop';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <BackToTop/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
