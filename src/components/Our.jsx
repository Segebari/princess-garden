import React from 'react'
import imgi from '../assets/img1.svg'
import imgii from '../assets/img2.svg'
import imgiii from '../assets/img3.svg'

const Our = () => {
  return (
    <>
      <div
        className="section-small-screens lg:min-h-[100vh] w-full text-black xs:mt-20 lg:mt-32 section"
        id="room"
      >
        <div className="text-center">
          <h4 className="text-gray-400">Our Room</h4>
          <h2 className="text-4xl font-bold pt-3">
            A World Of <span className="text-primary"> Choice </span>
          </h2>
          <p className="pt-3 xs:mb-10 md:0 xl:px-[20rem] text-gray-400">
            A world of choice awaits. Explore our gallery below to discover the
            perfect room for your relaxation.
          </p>
        </div>

        <div className="lg:min-h-[100vh] md:flex gap-5 justify-center items-center md:pb-10">
          <div className="">
            <div>
              <img src={imgi} alt="room image" />
              <p className="uppercase pt-3 text-gray-400 text-sm">3 Guests</p>
              <h4 className="font-bold text-xl">Room with View</h4>
            </div>
            <div className="mt-5">
              <img src={imgii} alt="room image" />
              <p className="uppercase pt-3 text-gray-400 text-sm">3 Guests</p>
              <h4 className="font-bold text-xl">Small Room</h4>
            </div>
          </div>
          <div>
            <img src={imgiii} alt="room image" />
            <p className="uppercase pt-3 text-gray-400 text-sm">3 Guests</p>
            <h4 className="font-bold text-xl">Luxury Room</h4>
          </div>

          <div>
            <div>
              <img src={imgii} alt="room image" />
              <p className="uppercase pt-3 text-gray-400 text-sm">3 Guests</p>
              <h4 className="font-bold text-xl">Apartment</h4>
            </div>
            <div className="mt-5">
              <img src={imgii} alt="room image" />
              <p className="uppercase pt-3 text-gray-400 text-sm">3 Guests</p>
              <h4 className="font-bold text-xl">Medium Room</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Our
