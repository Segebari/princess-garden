import React from 'react'
import chat from '../assets/whatsapp.svg'

const Whatsapp = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=+2347034842501&text=Hi,%20I%20would%20like%20to%make%20enquiries." target='blank'> <img src={chat} alt="whatsapp" className='w-10 fixed bottom-10 left-5' /> </a>
    </div>
  )
}

export default Whatsapp
