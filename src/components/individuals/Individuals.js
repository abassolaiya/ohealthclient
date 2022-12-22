import React from "react"
import "./individuals.css"

import spons1 from '../img/spons1.jpg'
import spons2 from '../img/spons2.png'
import oladokun from '../img/oladokun.png'
import omo from '../img/omo.png'
import mary from '../img/mary.jpg'
import hr from '../img/hr.jpeg'
import cto from '../img/cto.jpg'
import bus from '../img/bus.jpeg'
import ola from '../img/ola.jpg'
import farom from '../img/farom.jpg'
// import Individual from './individual/Individual';
import Footer from './../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import { TopInfo } from "../topInfo/topinfo"
import { Link } from "react-router-dom"

const Individuals = () => {


  return (
    <div>
      <Navbar/>

      <div style={{
        width:"90%",
        margin:"3rem auto"
      }} >
      <TopInfo
        title={"Advisory Board"}
      />
      </div>

      <Link to={'/members_details/babajide'} className="main_man" >

        <img src={ spons1 } alt='sonsor1' className="main_man-img" />

        <div className="main_man-name" >Chief Babajide Olatunde-Agbeja</div>
        <div className="main_man-img-role" >Chairman, Advisory Board</div>
        <div className="main_man-img-portfolio" >Chartered Insurance Broker (FCIB, ACII, ACIIN, BSC ECONS, IG)</div>

      </Link>

      <div className="other_advisory" >

        <Link to={'/members_details/oladokun'} className="individual_div" >

          
          <img src={oladokun} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Oladokun A. Oye</div>
          <div className="individual_div-role" >Member, Advisory Board</div>
          <div className="individual_div-port" >VP Airtel Nigeria</div>


        </Link>

        <Link to={'/members_details/bolanle'} className="individual_div" >

          
          <img src={omo} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Dr. Omobolanle Olowu</div>
          <div className="individual_div-role" >Member, Advisory Board</div>
          <div className="individual_div-port" >Director in charge of Public Private Partnership and Diaspora Unit of the Federal Ministry of Health, Abuja</div>


        </Link>

        <Link to={'/members_details/richard'} className="individual_div" >
          <img src={spons2} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Richard Ogunmodede</div>
          <div className="individual_div-role" >Member, Advisory Board</div>
          <div className="individual_div-port" >Ex-Banker</div>
        </Link>

        <Link to={'/members_details/Uduk'} className="individual_div" >
          <img src={mary} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Uduk, Mary Joseph</div>
          <div className="individual_div-role" >Member, Advisory Board</div>
          <div className="individual_div-port" >Former Director General of Securities and Exchange Commission (SEC), Nigeria</div>
        </Link>

      </div>

      <div style={{
        width:"90%",
        margin:"0 auto"
      }} >

        <TopInfo
          title={"Management"}
        />

      </div>

      <Link to={'/members_details/temitope'} className="main_man" >

        <img src={ farom } alt='sonsor1' className="main_man-img" />

        <div className="main_man-name" >Temitope Farombi MBBS, FMCP (Neurology)</div>
        <div className="main_man-img-role" >Founder and CEO</div>

      </Link>

      <div className="other_advisory" >

        <Link to={'/members_details'} className="individual_div" >
          
          <img src={hr} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Adelaja Damilola</div>
          <div className="individual_div-role" >Human Resource Manager</div>

        </Link>

        <Link to={'/members_details'} className="individual_div" >

          
          <img src={cto} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Femi Olayiwola</div>
          <div className="individual_div-role" >Chief Technology Officer</div>


        </Link>

        <Link to={'/members_details'} className="individual_div" >
          <img src={bus} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Olubusayo Oluyemi</div>
          <div className="individual_div-role" >Business Development Analys</div>
        </Link>

        <Link to={'/members_details'} className="individual_div" >
          <img src={ola} alt='sonsor1' className="individual_div-img" />
          <div className="individual_div-name" >Abass Olaiya</div>
          <div className="individual_div-role" >IT Officer</div>
        </Link>

      </div>

      <Footer/>
    </div>
  )
}

export default Individuals
