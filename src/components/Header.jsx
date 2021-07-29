import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      
      <img class='logo header-logo' src={require("../images/small-logo.PNG")} alt="logo" />
        <Link  to='/' class='header-tab' >
        <p>
            Home
        </p>
        </Link>
     
    </header>
  )
}
