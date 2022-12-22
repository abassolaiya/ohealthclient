import React from 'react'

import Header from './Header'
import Services from './Services'
import Mobileapp from './Mobileapp'
// import IntroVid from './IntroVid'
import Lambulance from './Lambulance'
import Downloadapp from './Downloadapp'
import Partners from '../partners/Partners'
import Counters from '../counters/counters'
import Hspecialist from '../hspecialist/Hspecialist'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <div className='container'> */}
        <Services/>
        <Mobileapp/>
        {/* <IntroVid/> */}
        <Counters/>
        <Lambulance/>
        <Partners/>
        <Downloadapp/>
        <Hspecialist/>
      {/* </div> */}
      <Footer/>
      
    </div>
  )
}

export default Home
