import React from 'react'
import Specilist from './specialist/Specialist'
import './hspecialist.css'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'

function Hspecialist() {
  return (
    <div className='hspecialist'>
      <div className='spec_header'>
      <h4>Meet Our Specialist Doctors</h4>
      <p>We have over 150 Specialist Doctors Available on Our Platform Ready to Answer your Queries and Concerns</p>
      </div>

      <div className='specialist_container'>
            <Specilist 
            spec={image1}
            name='Dr. Ajibola Oladiran'
            
            meaning="Surgeon of injuries and diseases of body's musculoskeletal system"
            speclization='Orthopaedics & Trauma Surgeon'/>
        
            <Specilist 
            spec={image2}
            name='Dr. Olufisayo Elugbadebo'
            speclization='Psychiatrist'
            meaning="Mental health and including substance use disorders specialist"/>

            <Specilist 
            spec={image3}
            name='Dr. Lawrence Adebusoye'
            speclization='Psychiatrist'
            meaning="Adult health care specialist."/>

            <Specilist 
            spec={image4}
            name='Dr. Olushola Ajamu'
            speclization='Urologist'
            meaning="Specialist of the diseases of the urinary tract in both men and women."/>
      </div>
    </div>
  )
}

export default Hspecialist
