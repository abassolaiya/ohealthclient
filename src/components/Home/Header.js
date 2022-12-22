import React from 'react'
import doc from '../img/doc.jpg';
import './header.css'

const Header = () => {
  return (
    <div className='header'>

        <div className='header-left' >
            <h3> "Speak to good</h3>
            <h2>Doctors and Specialists</h2>
            <h3>in less than 5 minutes."</h3>


            <button className='header-left-btn'>
                <a href='http://dashboard.ohealthng.com/' className='header-left-btn'>
                  Book a Doctor Now
                </a>
            </button>

        </div>
          
        <img className='header-right' src={doc} alt="wjwc" />

    </div>
  )
}

export default Header
