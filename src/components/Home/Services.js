import React from 'react'
// import doc from './doc.jpg';
import { Link } from 'react-router-dom'
import handshake from '../img/handshake.jfif'
import deliveryhand from '../img/deliveryhand.jfif'
import labtest from '../img/labtest.jfif';
import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <div className='serviced'>
        <img src={handshake} alt='something is missen'></img>
        <h5>Consult a Doctor</h5>
        <p>You can talk to a specialist Doctor at an Affordable Rate and Pocket Friendly Fee, Very Fast and Quality Treatment Guaranteed. <Link to='/aboutus'><span className='readmore'>Read more...</span></Link></p>
        <button>
          <a href='http://dashboard.ohealthng.com/' className='reassure__button'>
            See a Doctor
          </a>
        </button>
      </div>

      <div className='serviced'>
        <img src={deliveryhand} alt='something is missen'></img>
        <h5>Buy from a Pharmacy</h5>
        <p>You Can Schedule a Lab Test Appointment With Notable and Certified Laboratories, Get The Result Delivered to Your Ohealth App on Phone <Link to='/aboutus'><span className='readmore'>Read more...</span></Link></p>
        <button>
          <a href='http://dashboard.ohealthng.com/app/pharmacy' className='reassure__button'>
            Buy from a Phamacy
          </a>
        </button>
      </div>

      <div className='serviced'>
        <img src={labtest} alt='something is missen'></img>
        <h5>Book a Lab test</h5>
        <p>Pick up your prescription From Any of The Certified Pharmacies Closest To You, or Have it Delivered To Your Doorstep. Just One Click Away and <Link to='/aboutus'><span className='readmore'>Read more...</span></Link></p>
        <button>
          <a href='http://dashboard.ohealthng.com/' className='reassure__button'>
            Book a Lab test
          </a>
        </button>
      </div>

      <div className='reassured'>
        <span className='extrasmall'>Have Real Conversation</span>
        <p>Talk to a <span className='red'> Specialist </span> <p className='extrasmall'>of your choice</p> in <span className='red'>less than 5 minutes.</span></p>
        <p className='extrasmall'>Caring doctors - ready to help Experienced and board-certified Trained to perform visit online</p>
        <button className='reassure__button'> <a href='http://dashboard.ohealthng.com/' className='reassure__button'> See a Doctor Now </a></button>
      </div>
    </div>
  )
}

export default Services
