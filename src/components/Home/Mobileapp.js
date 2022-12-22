import React from 'react'
import appstore from '../img/appstore.png'
import playstore from '../img/playstore.png';
import './mobileapp.css'

const Mobileapp = () => {
  return (
    <div>
        <div className='mobileapp'>
            <div className='column1'>
                <span>A better way to get well</span>
                <p className='bold'>From anywhere.</p>
            </div>
            <div className='column1'>
                <p>Download OHealth App here</p>
                <a href='https://apps.apple.com/us/app/ohealth-app/id1570474561'>
                    <img src={appstore} alt= 'app store logo'/>
                </a>
                
                <a href='https://play.google.com/store/apps/details?id=com.ohealth.ohealth&pli=1'>
                    <img src={playstore} alt='play store logo'/>
                </a>
                
            </div>
            <div className='column1'>
                <div className=''>
                    <p>less than </p> 
                    <p className='bold'>$1</p>
                    <p>per visit</p> 
                    <p className='bold' style={{fontSize:"1.4rem"}} >+ customize your own pricing</p>
                </div>
            </div>
        </div>
        <div className='mobilebase'>
            <p>Free to sign up  .  No monthly fees  .  $1 or less per Consultation</p>
        </div>
    </div>
    
  )
}

export default Mobileapp
