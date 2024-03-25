import React from 'react'
import Menu from './Menu'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = () => {
  return (
    <div className="w-auto h-auto flex justify-between py-7 text-lg section bg-topbg">
      <Link to='/'>
      <div className="text font-bold">Logo</div>
      </Link>
      
      <Menu />
      <button className="border px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg">
        Book Now
      </button>
    </div>
  )
}

export default Nav
