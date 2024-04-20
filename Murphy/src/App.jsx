import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Layout/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer';

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
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
