import React, { useRef} from 'react';
import emailjs from "emailjs-com";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./conactus.css"

import cont from "../img/cont.png"
import { TopInfo } from '../topInfo/topinfo';

const Contactus = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mwkvp9f",
      "template_58z4xfd",
      form.current,
      "huUZ_l2nyRuir-ZEuPUO_"
    ).then(
      result=> console.log(result.text),
      error => console.log(error.text)
    );
    e.target.reset()
  };

  return (
    <div>
      <Navbar/>
      {/* <h1>Contact us Page</h1> */}

      <TopInfo
        title={"Contact us"}
      />

      <div className='form_co' >

        <img src={cont} alt="ff" />

        <div className='form_right' >

          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input type={"text"} name="name" placeholder="Full Name" />
            </div>

            <div>
              <label>Email</label>
              <input type={"text"} name='email' placeholder="Enter your Email" />
            </div>

            <div>
              <label>Phone</label>
              <input type={"text"} name='phone' placeholder="Enter Your Phone" />
            </div>

            <div>
              <label>Enquiry</label>
              <input type={"text"} name='enquiry' placeholder="Enter Your Message here" />
            </div>
            <input type="submit" value='Send' className='send_btn' />

            {/* <button className='send_btn' >
              Send
            </button> */}
          </form>

        </div>

      </div>

      <div className='Our_info' >
      Online Health Company (Ohealth) is a telemedicine company that provide easy access to health care services by leveraging on telecommunication technology. 
      Ohealth was established to reduce the gap between those that can afford quality healthcare and those that cannot by a minimum of 20%, using technology to 
      improve access to healthcare with ease through our mobile application. Ohealth has been accepted as a leading telemedicine player ahead of similar ventures 
      by Government and Medical Associations at State level such as Oyo State Health Insurance Agency (OYSHIA), and health institutions such as University of Ibadan 
      Teaching Hospital (UCH) and Babcock University Teaching Hospital to offer total healthcare services. The Vision Statement for Ohealth is to be the preferred 
      provider of platforms that promote rapid and reliable quality health services. While our mission is to narrow the gaps between patients and doctors 
      and make quality health care accessible for all through our Mobile Application.
      </div>

      <div className='details_contact' style={{padding:"3rem"}} > 

        <p>42, Kenneth Dike Way, Opp. SS Peter & Paul Catholic Major Seminary, Bodija Ibadan, Oyo State, Nigeria.</p>
        <p>+2348110175635, +2348110175793, +2348110175727</p>
        <p> contact@ohealthng.com</p>

      </div>
      
      <Footer/>
    </div>
  )
}

export default Contactus
