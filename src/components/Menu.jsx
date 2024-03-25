import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Menu = () => {
  return (
    <div className="flex gap-10">
      <Link to="/">
        <div className="hover:text-secondary">Home</div>
      </Link>

      <Link to="#service">
        <div className="hover:text-secondary">Services</div>
      </Link>

      <Link to="#room">
        <div className="hover:text-secondary">Room</div>
      </Link>

      <Link to="#about">
        <div className="hover:text-secondary">About Us</div>
      </Link>

      <Link to='#contact'>
        <div className="hover:text-secondary">Contact</div>
      </Link>
    </div>
  )
}

export default Menu
