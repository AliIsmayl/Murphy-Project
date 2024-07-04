import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function MainLayOut() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayOut