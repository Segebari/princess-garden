import React from 'react'
import Add from '../assets/address.svg'

const Contact = () => {
  return (
    <>
      <div
        className="w-full bg-topbg py-20 flex flex-col items-center
        "
        id="contact"
      >
        <h3 className="text-4xl text-secondary"> Get in Touch</h3>
        <p className="pt-3">Have questions? We're here to help.</p>
        <div className="flex gap-5">
          <button className="border mt-5 px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg">
            <a href="tel:+2347034842501">Book Now</a>
          </button>
          <button className="border mt-5 px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg">
            <a href="mailto:segebarifred@gmail.com">Email Us</a>
          </button>
        </div>
        <div className="flex gap-2 pt-7 items-center px-10 md:px-0">
          <img src={Add} alt="Mouse" className="w-5"></img>
          <p className='text-sm'>Block J, Plot 1d, Sparkinglight Estate, Ibafo, Ogun State.</p>
        </div>
      </div>
    </>
  )
}

export default Contact
