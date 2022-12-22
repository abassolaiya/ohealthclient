import React from 'react'
import './partners.css'

import bhin from '../img/bhin.png'
import nugle from '../img/nugle.jpeg'
import oyshia from '../img/oyshia.jpeg'
import uch from '../img/uch.jpeg'
import ufitfly from '../img/ufitfly.png'
import babcock from '../img/babcock.jpeg'
import dactoz from '../img/dactoz.png'


function Partners() {
  return (
    <div className='container_partners'>
      <h4>Our Partners</h4>
      <p>We have since partnered with</p>
      <div className='imgcontainer'>
        <img src={bhin} alt='bhin logo' className='bhin'/>
        <img src={nugle} alt='nugle logo'/>
        <img src={oyshia} alt='oyshia logo'/>
        <img src={uch} alt='uch logo'/>
        <img src={ufitfly} alt='ufitfly logo'/>
        <img src={babcock} alt='babcock logo'/>
        <img src={dactoz} alt='dactoz logo'/>
      </div>
    </div>
  )
}

export default Partners
