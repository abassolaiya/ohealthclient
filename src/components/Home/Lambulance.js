import React from 'react'
import amb from '../img/amb.png'
import './lambulance.css'

const Lambulance = () => {
  return (
      <div className='lambulance'>
        <div><img src={amb} alt='ambulance'/></div>
        <div className='lambulance__text'>
        <p>Introducing, <span className='big'><span className='red'>OHealth</span> Ambulance Service</span> Online instant ambulance service</p>
        </div>
      </div>
  ) 
}

export default Lambulance
