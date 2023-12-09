import React from 'react'
import './Navbar.css'
import Create from '../create/Create'

export default function Navbar() {
  return (
    <nav id='navbar'>
        <div>
        <h2>Portfolio Maker</h2>
        <div className='links'>
            <button>Hire Employee</button>
            <Create/>
        </div>
        </div>
    </nav>
  )
}
