import React from 'react'
// import Navbar from '../Navbar'
// import Footer from '../Footer'
import handshake from '../img/handshake.jfif'
import deliveryhand from '../img/deliveryhand.jfif'
import labtest from '../img/labtest.jfif'
import Navbar from '../Navbar/Navbar'
import { TopInfo } from '../topInfo/topinfo';
import './aboutus.css';
import Footer from '../Footer/Footer'

const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <TopInfo title={"About Us"} />

      <div className='abutus_div' >
        Online Health Company (Ohealth) is a telemedicine company 
        that provide easy access to health care services by 
        leveraging on telecommunication technology. Ohealth 
        was established to reduce the gap between those that 
        can afford quality healthcare and those that cannot 
        by a minimum of 20%, using technology to improve access 
        to healthcare with ease through our mobile application. 
        Ohealth has been accepted as a leading telemedicine 
        player ahead of similar ventures by Government and 
        Medical Associations at State level such as Oyo State 
        Health Insurance Agency (OYSHIA), and health institutions 
        such as University of Ibadan Teaching Hospital (UCH) and 
        Babcock University Teaching Hospital to offer total healthcare services. 
        The Vision Statement for Ohealth is to be the preferred 
        provider of platforms that promote rapid and reliable 
        quality health services. While our mission is to narrow 
        the gaps between patients and doctors and make quality health 
        care accessible for all through our Mobile Application.
      </div>

      <div className='abut_split' >

      <img className='abut_split-img' src={handshake} alt='Doctor'/>
          <h4 className='abut_split-img-h4' >Consult a Doctor</h4>
          <p className='abut_split-img-p' >
            You can talk to a specialist Doctor at a less-expensive fee. Connecting with a specialist on the Ohealth platform is very fast and quality treatment is guaranteed.
            At Ohealth, we take out the stress of having to wait long hours before seeing a specialist. With us, you do not have to worry about traveling long distances, taking time off work or missing important events just because you want to see a doctor. With Ohealth, your doctor is closer to you than ever before.
          </p>
          <button className='abut_split-btn' > Consult a Doctor</button>

      </div>

      <div className='abut_split abut_split2' >

      <img className='abut_split-img' src={deliveryhand} alt='Doctor'/>
          <h4 className='abut_split-img-h4' >Buy from a Pharmacy</h4>
          <p className='abut_split-img-p' >
          You can book an appointment for a Lab Test with notable and certified laboratories on the Ohealth App. These laboratories have been pre-qualified by the Ohealth team to ensure adequate and functioning equipment are available for all our users at every point in time. Your test result can be delivered to your Ohealth App on Phone, to your email or if you prefer to pick up. 
            When you book for a Lab Test, you get a unique code which you take to the diagnostic center. Upon arrival at the center, you present your unique code which gives you easy access to the facility.
          </p>
          <button className='abut_split-btn' >Buy from a Pharmacy</button>

      </div>

      <div className='abut_split' >

        <img className='abut_split-img' src={labtest} alt='Doctor'/>
          <h4 className='abut_split-img-h4' >Book a Lab Test</h4>
          <p className='abut_split-img-p' >
          Pick up your prescription from any of the certified pharmacies closest to you, or have it delivered to your doorstep. 
            Just like the laboratories listed on our platform, all our pharmacies have been pre-qualified to ensure they meet the required standard. You can be rest assured of purchasing quality and original medications from all our pharmacies.
            Once you have your prescription, you can either upload a picture of it or type it in the textbox and send to your desired pharmaceutical store. You then get a bill, which will further prompt you to make payment. Ensure you have enough fund in your e-wallet so the payment can be deducted. 
          </p>
          <button className='abut_split-btn' > Book a Lab Test</button>

      </div>

      <Footer/>
    </div>
  )
}

export default Aboutus
