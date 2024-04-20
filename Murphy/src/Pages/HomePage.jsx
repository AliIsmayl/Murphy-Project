import React from 'react'
import Header from '../Components/Header'
import SmallInform from '../Components/SmallInform'
import Delivering from '../Components/Delivering'
import LogisticService from '../Components/LogisticService'
import BoostYour from '../Components/BoostYour'
import VideoInform from '../Components/VideoInform'
import ImageSwitcher from '../Components/ImageSwitcher'

function HomePage() {
  return (
    <>
    <Header/>
    <SmallInform/>
    <BoostYour/>
    <Delivering/>
    <LogisticService/>
    {/* <VideoInform/> */}
<ImageSwitcher/>
    </>
  )
}

export default HomePage