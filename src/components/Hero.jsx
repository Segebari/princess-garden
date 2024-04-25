import React, { useState, useRef, useEffect } from 'react'
import Heroimg from '../assets/hero-image.svg'
import Mouseimg from '../assets/mouse.svg'

const Hero = () => {
  const targetDivRef = useRef(null) // Ref to the target div
  const [isMouseVisible, setIsMouseVisible] = useState(true)
  const threshold = 100

  const handleClick = () => {
    const targetDiv = targetDivRef.current
    if (targetDiv) {
      // Smooth scroll with optional offset (adjust as needed)
      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    } else {
      console.error('Target div not found. Ensure ID matches the reference.')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold
      setIsMouseVisible(!scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return (
    <>
      <div className="absolute w-[100%] flex justify-center bottom-3">
        <img
          src={Mouseimg}
          alt="Mouse"
          className={`w-[2rem] animate ${isMouseVisible ? '' : 'hidden'}`}
          onClick={handleClick}
        ></img>
      </div>

      <div className="text-center section-small-screens py-10 section bg-topbg h-[100vh] md:h-[auto] pt-32 md:pt-[auto]">
        <div className="">
          <h1 className="xs:text-3xl md:text-5xl">
            Unforgettable stays. <br /> Unwind.
            <span className="txt text-secondary"> Reimagine.</span>
          </h1>
          <p className="pt-5 xs:px-[auto] xl:px-[20rem]">
            Princess Gardens offers a haven of luxury for you to unwind and
            reimagine your expectations of comfort.
          </p>
        </div>
      </div>

      <div className="w-[100%] left-0 mb-10">
        <img src={Heroimg} alt="Hero image" ref={targetDivRef} />
      </div>
    </>
  )
}

export default Hero
