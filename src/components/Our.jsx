import React from 'react'
import imgi from '../assets/img1.png'
import imgii from '../assets/img2.png'
import imgiii from '../assets/img3.png'
import imgiv from '../assets/img4.png'
import imgv from '../assets/img5.png'

const Our = () => {
  return (
    <>
      <div
        className="section-small-screens lg:min-h-[auto] w-full text-black xs:mt-20 lg:mt-32 section"
        id="room"
      >
        <div className="text-center">
          <h4 className="text-gray-400">Our Gallery</h4>
          <h2 className="text-4xl font-bold pt-3">
            A World Of <span className="text-primary"> Choice </span>
          </h2>
          <p className="pt-3 xs:mb-10 md:0 xl:px-[20rem] text-gray-400">
            A world of choice awaits. Explore our gallery below to discover the
            perfect room for your relaxation.
          </p>
        </div>

        <div className="lg:min-h-[auto] md:flex gap-5 justify-center items-center md:pb-10">
          <div className="flex flex-col items-center mb-5 md:block w-full">
            <div>
              <img src={imgi} alt="room image" />
              <h4 className="font-bold text-xl pt-3">Room</h4>
            </div>
            <div className="mt-5">
              <img src={imgii} alt="room image" />
              <h4 className="font-bold text-xl pt-3">Room</h4>
            </div>
          </div>
          <div className="mb-5">
            <img src={imgiii} alt="room image" />
            <h4 className="font-bold text-xl pt-3">Oasis Lawn</h4>
          </div>

          <div className="flex flex-col items-center mb-5 md:block w-full">
            <div>
              <img src={imgiv} alt="room image" />
              <h4 className="font-bold text-xl pt-3">Gym</h4>
            </div>
            <div className="mt-5">
              <img src={imgv} alt="room image" />
              <h4 className="font-bold text-xl pt-3">Room</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Our
