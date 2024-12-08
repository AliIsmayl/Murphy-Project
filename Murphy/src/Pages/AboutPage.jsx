import React from 'react'
import AboutHead from '../Components/AboutHead/AboutHead'
import NotMean from '../Components/NotMean/NotMean'
import VideoSect from '../Components/VideoSect/VideoSect'
import AboutSwiper from '../Components/AboutSwiper/AboutSwiper'
import Faq from '../Components/Faq/Faq'
import BoostYour from '../Components/BoostYour'

function AboutPage() {
  return (
    <>
    <NotMean/>
    <AboutHead/>
    <BoostYour/>
    {/* <VideoSect/> */}
    <Faq/>
    <AboutSwiper/>
    </>
  )
}

export default AboutPage