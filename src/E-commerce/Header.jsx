import React from 'react'
import { FaBars } from "react-icons/fa";

import {Link} from "react-router-dom"

export const Header = ({cart}) => {
  return (
    <div className='navbar navbar-expand-lg bg-dark'>
<div className='container-fluid'>
    <a className='logo navbar-brand text-white ms-3'>Food Cart</a>
      
      <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#mynavbar">
          
          <span className='text-danger'><FaBars/></span>

      </button>
  

    <div className='collapse navbar-collapse justify-content-end mx-5' id="mynavbar">
   
   
    <ul className='navbar-nav gap-3'>
  
  <li className='nav-item'>
<Link className='nav-link text-white fs-5'  to={"/"}>Home</Link>
  </li>

  <li className='nav-item'>
<Link className='nav-link text-white  fs-5' to={"/Card"}>View Cart 
<span className='badge mx-2 bg-danger'>{cart.length}</span></Link>
  </li>

    </ul>
    </div>
    </div>
      
      </div>
  )
}

