import React from 'react';
import appstore from '../img/appstore.png';
import playstore from '../img/playstore.png';
import screens from '../img/screens.png';
import './downloadapp.css'

const Downloadapp = () => {
  return (
    <div className='downloadapp'>
      <div className='downloadapp__content'>
        <p className='top_text' >Download OHealth App here</p>
        <div className='stores'>
        <a href='https://apps.apple.com/us/app/ohealth-app/id1570474561'>
          <img src={appstore} alt= 'app store logo'/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.ohealth.ohealth&pli=1'>
          <img src={playstore} alt='play store logo'/>
        </a>
        </div>
        <p className='text'>OHealth App is available on all mobile platforms</p>
      </div>
      <div className='screens'>
        <img src= {screens} alt='Systems'/>
      </div>
    </div>
  )
}

export default Downloadapp
