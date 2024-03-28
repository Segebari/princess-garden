import React, { useState } from 'react'
import Menu from './Menu'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="w-auto section-small-screens h-auto flex md:flex-row justify-between py-7 text-lg section bg-topbg ">
        <Link to="/">
          <div className="text font-bold">Logo</div>
        </Link>
        <div
          className={`hidden  md:flex md:gap-10 md:items-center ${
            isOpen ? 'xs:block' : ''
          }`}
        >
          <Menu />
          <button className="border px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg">
            Book Now
          </button>
        </div>

        <div
          className={`md:hidden flex flex-col gap-[0.2rem] h-auto relative z-50`}
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
