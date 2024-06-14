import React from 'react'
import { Routes, Route } from "react-router-dom";
import './Header.css'
import Logo  from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Register from '../Register';
//import Home from '../../src/pages/Home.js'

const Header = () => {
  
  return (
    <div  className='header'>
        <img src={Logo} alt='' className='logo' />
        <ul className='header-menu' >
          
          
         <button> <li><Link to='/programs'>Programs</Link></li></button>
         <button><li><Link to={'/why'}>Why Us</Link></li></button> 
         <button><li><Link to='/plans'>Plans</Link></li></button>
         <button><li><Link to='/home/testimonials'>Testimonials</Link></li></button>
          
        </ul>


    </div>
  )
}

export default Header

//<li><Link to='/registeration'><button>register</button></Link></li>
//<li><Link to='/pack'><button>Pack</button></Link></li>