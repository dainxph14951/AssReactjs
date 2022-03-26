import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Nav = (props: Props) => {
  return (
    //     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    //     <li className="nav-item"> 
    //         <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
    //     </li>
    //     <li className="nav-item">
    //         <NavLink className="nav-link" to="/product">Product </NavLink>
    //     </li>
    //     <li className="nav-item">
    //         <NavLink className="nav-link" to="/about">About </NavLink>
    //     </li>
    // </ul>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
      <img src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt=""  width="50" height="30" />
      <li className="nav-item">
        <NavLink className="nav-link active text-secondary" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className="nav-link text-secondary" to='/products'>Product</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className="nav-link text-secondary" to='/news'>New</NavLink>
      </li>
      
    </ul>
  )
}

export default Nav