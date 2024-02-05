import React from 'react'
import {  Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-css ">
  <div className="container">
    <Link className="navbar-brand text-white a-nav " to={""}>START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-lg-0">
        <li className="nav-item  ">
          <NavLink className=" nav-link text-white rounded-3  "  aria-current="page" to={"about"}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white rounded-3    "  to={"portfolio"}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white rounded-3   "    to={"contact"}>CONTACT</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    
    
    
    
    </>
  )
}
