import React from 'react'
// import Aboutimg from '../assets/aboutimg.svg'
import food from '../assets/food.svg'
import lounge from '../assets/lounge.svg'
import gym from '../assets/gym.svg'
import bed from '../assets/bed.svg'

const About = () => {
  return (
    <>
      <div className="h-[30rem] w-full flex mb-10" id="about">
        <div className="w-[70%] bg-topbg h-full px-44 flex flex-col justify-center">
          <h3 className="border-b text-4xl w-[fit-content] pb-2 mb-5 font-bold text-secondary">
            About Us
          </h3>
          <p className="text-white text-justify">
            Looking for that special serene environment for you and your loved
            ones? Come over to Princess Gardens, a retreat for sophisticated and
            extraordinary leaders, top executives, managers, and families. Relax
            and unwind in luxurious comfort, perfect for meetings, seminars,
            church services, parties, and more at Sparklight Estate. We give you
            the royal experience.
          </p>
        </div>
        <div className="w-[30%] overflow-hidden bg-about">
          {/* <img src={Aboutimg} alt="Lounge image" className="w-full" /> */}
        </div>
      </div>
      <div className="w-full min-h-[50vh] flex flex-col items-center py-20">
        <div className="flex gap-5">
          <div className="w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={food} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Restaurant</h4>
            <p className="text-gray-400 pr-10">
              Indulge in vibrant flavors at our tasty restaurant.
            </p>
          </div>
          <div className="w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={bed} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Apartment</h4>
            <p className="text-gray-400 pr-10">
              Family-friendly haven in a serene setting.
            </p>
          </div>
        </div>
        <div className="flex gap-5 pt-10">
          <div className="w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={gym} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Gym</h4>
            <p className="text-gray-400 pr-10">
              Our tranquil gym offers a serene escape to energize your body and
              mind.
            </p>
          </div>
          <div className="w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={lounge} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Lounge</h4>
            <p className="text-gray-400 pr-10">
              Relax and socialize in our inviting lounge.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
