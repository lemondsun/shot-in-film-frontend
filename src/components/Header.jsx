import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul id='header-menu'>
        <Link  to='/' className='header-tab' >
        <li>
            Home
        </li>
        </Link>
      </ul>
    </header>
  )
}
