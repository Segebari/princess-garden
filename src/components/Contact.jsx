import React from 'react'

const Contact = () => {
  return (
    <>
      <div
        className="w-full bg-topbg py-20 flex flex-col items-center"
        id="contact"
      >
        <h3 className="text-4xl text-secondary"> Get in Touch</h3>
        <p className="pt-3">Have questions? We're here to help.</p>
        <button className="border mt-5 px-6 py-2 hover:bg-secondary hover:border-secondary hover:text-topbg">
          Book Now
        </button>
      </div>
    </>
  )
}

export default Contact
