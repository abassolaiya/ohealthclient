// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';
import { Link } from 'react-router-dom'

import logo from '../img/ohealthlogo.png'
import { useLogout } from './../../hooks/useLogout';
import { useAuthContext } from './../../hooks/useAuthContext';
import './navbar.css';
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai';
import { useState } from 'react';

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
  })

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
    setopenMenu(false)
  }

  const [ openMenu, setopenMenu ] = useState(false)

  return (
    <nav>
      <div className='nav__container'>
      <Link to='/'>
          <img className='logo' src= {logo} alt="Logo" />
        </Link>

        <ul className='nav__menu'>
          <Link className='nav__menu_a' to='/individuals'>
            <li>Our Team</li>
          </Link>
          <Link className='nav__menu_a' to='/aboutus'>
            <li>About Us</li>
          </Link>
          <Link className='nav__menu_a' to='/contactus'>
            <li>Contact us</li>
          </Link>
          <Link className='nav__menu_a' to='/blogs'>
            <li>Blog</li>
          </Link>
          {user && (
            <div> 
              <span>{user.email}</span>
              <button className='navbar_lgbtn' onClick={handleClick}>Log out</button>
            </div>
          )}

            { !user && <li><Link className='navbar_lgbtn' to="/login">Login</Link></li> }
            { !user && <li><Link className='navbar_lgbtn' to="/signup">Signup</Link></li> }

        </ul>

        <AiOutlineMenu className='menu_icon' onClick={ () => setopenMenu(true) } />

      </div>

      <div style={{
        display: openMenu ? "flex" : "none"
      }} className='nav_fixed' >
          
          <AiFillCloseCircle onClick={ () => setopenMenu(false) } className='nav_fixed_Canel' />

          <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/individuals'>
            <li>Our Team</li>
          </Link>

          <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/aboutus'>
            <li>About Us</li>
          </Link>

          <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/contactus'>
            <li>Contact us</li>
          </Link>

          <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/blogs'>
            <li>Blog</li>
          </Link>

          {user && (
            <div> 
              <span>{user.email}</span>
              <button className='nav_fixed_a' style={{
                backgroundColor:"transparent"
              }} onClick={handleClick}>Log out</button>
            </div>
          )}

            { !user && <li><Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to="/login">Login</Link></li> }
            { !user && <li><Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to="/signup">Signup</Link></li> }

      </div>

      </nav>
  )
}

export default Navbar