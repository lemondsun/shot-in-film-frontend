import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
<<<<<<< HEAD
      <ul id='header-menu'>
        <Link  to='/' className='header-tab' >
        <li>
            Home
        </li>
        </Link>
      </ul>
=======
      
      <img class='logo header-logo' src={require("../images/small-logo.PNG")} alt="logo" />
        <Link  to='/' class='header-tab' >
        <p>
            Home
        </p>
        </Link>
     
>>>>>>> main
    </header>
  )
}
