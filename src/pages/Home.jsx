import React , { useContext, useEffect } from 'react'
import { AppContext } from '../components/AppContext';
import Navbar from '../components/Navbar'
import Banner from './Home/Banner'
import About from './Home/About'
import WhyChoose from './Home/WhyChoose'
import HomeparkLiving from './Home/HomeParkLiving'
import PropertyGallery from './Home/PropertyGallery'
import VideoSection from './Home/VideoSection'
import Faqs from './Home/Faqs'

import Popup from './Popup';

import Brand_logo from './Home/Brand_logo'

export default  function Home() {
  const { setWebName } = useContext(AppContext);


  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);


  return (
    <div className="w-full relative">
        <Popup/>
        <Banner/>
        <About/>
        <WhyChoose/>
        <Brand_logo/>
        {/* <HomeparkLiving/> */}
        <PropertyGallery/>
        <VideoSection/>
        <Faqs/>
    
    
    
    </div>
  )
}
