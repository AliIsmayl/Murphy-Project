import React from 'react'
import Header from '../Components/Header'
import SmallInform from '../Components/SmallInform'
import Delivering from '../Components/Delivering'
import LogisticService from '../Components/LogisticService'
import BoostYour from '../Components/BoostYour'
import VideoInform from '../Components/VideoInform'
import ImageSwitcher from '../Components/ImageSwitcher'
import Calendar from './LoginPage/Calendar/Calendar'
import Dashboard from '../Layout/Dashboard/Dashboard'
import NotMeanDashBoard from '../Components/NotMeanDashBoard/NotMeanDashBoard'

function HomePage() {
  return (
    <>
      <Header />
      <SmallInform />
      <BoostYour />
    <Delivering />
      <LogisticService />
      {/* <VideoInform/> */}
      <ImageSwitcher />
    </>
  )
}

export default HomePage