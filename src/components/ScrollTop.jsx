import React, { useState, useEffect } from 'react'
import top from '../assets/top.svg'

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100) // Show button after 100px scroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    <button
      className={`fixed flex items-center justify-center bottom-10 right-10 z-50 h-10 w-10 rounded-[50%] bg-secondary bg-opacity-70 text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ${
        !isVisible && 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <img src={top} alt="top arrow icon" className="h-7" />
    </button>
    </>
  )
}

export default ScrollTopButton
