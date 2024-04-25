import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Menu = ({ closeMenu }) => {
  return (
    <div className="flex gap-10 xs:flex-col lg:flex-row">
      <Link to="/" onClick={closeMenu}>
        <div className="hover:text-secondary">Home</div>
      </Link>

      <Link to="#service" onClick={closeMenu}>
        <div className="hover:text-secondary">Services</div>
      </Link>

      <Link to="#room" onClick={closeMenu}>
        <div className="hover:text-secondary">Room</div>
      </Link>

      <Link to="#about" onClick={closeMenu}>
        <div className="hover:text-secondary">About Us</div>
      </Link>

      <Link to="#contact" onClick={closeMenu}>
        <div className="hover:text-secondary">Contact</div>
      </Link>
    </div>
  )
}

export default Menu
