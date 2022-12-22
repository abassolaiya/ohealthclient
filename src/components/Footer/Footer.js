import React from 'react'
import { Link } from 'react-router-dom';
import appstore from '../img/appstore.png';
import playstore from '../img/playstore.png';
import './footer.css'


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='links'>
            <ul className='links__menu'>
            <Link to='/'>
                <li>Home</li>
            </Link>
            {/* <Link to='/ourservices'>
                <li>Our Services</li>
            </Link> */}
            <Link to='/aboutus'>
                <li>About Us</li>
            </Link>
            <Link to='/contactus'>
                <li>Contact us</li>
            </Link>
            <Link to='/blog'>
                <li>Blog</li>
            </Link>
            <Link to='/signup'>
                <li>Register here</li>
            </Link>
            </ul>
        </div>
        <div className='appdownload'>
            <div className='downloadapp__content'>
                <p>Download OHealth App here</p>
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
        </div>
        <div className='contactus'>

            <div>
                <p>For more information contact</p>
                <p>contact@ohealthng.com</p>
                <p>42, Kenneth Dike Way, Opp. SS Peter & Paul Catholic Major Seminary, Bodija Ibadan, Oyo State, Nigeria.</p>
                <p>
                +2348110175635, +2348110175793, +2348110175727
                </p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
