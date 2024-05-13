import React, { useState } from 'react'
import Menu from './Menu'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../assets/logo.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="w-auto section-small-screens h-auto flex lg:flex-row justify-between py-7 text-lg section bg-topbg">
        <Link to="/">
        <img src={logo} alt="logo" className='w-12' />
        </Link>
        <div
          className={`hidden  lg:flex lg:gap-10 lg:items-center xs:absolute lg:relative bg-topbg xs:h-[100vh] lg:h-[auto] xs:w-[100vw] lg:w-[auto] xs:text-center lg:text-left xs:left-0 lg:left-[auto] z-40 ${
            isOpen ? 'xs:flex flex-col justify-center items-center' : ''
          }`}
        >
          <Menu closeMenu={closeMenu} /> {/* Pass closeMenu function as prop */}
          <button className="border px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg xs:mt-10 lg:mt-0 xs:w-[40%] lg:w-[auto]">
            <a href="tel:+2347034842501">Book Now</a>
          </button>
        </div>

        <div
          className={`lg:hidden flex flex-col gap-[0.2rem] h-auto relative z-50`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-white h-[0.1rem] w-6 ${isOpen ? 'bg-gray-500' : ''}`}
          ></div>
          <div
            className={`bg-white h-[0.1rem] w-6 ${isOpen ? 'bg-gray-500' : ''}`}
          ></div>
          <div
            className={`bg-white h-[0.1rem] w-6 ${isOpen ? 'bg-gray-500' : ''}`}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Nav
