import React from 'react'
import { Link } from 'react-router-dom'
import food from '../assets/food.svg'
import lounge from '../assets/lounge.svg'
import gym from '../assets/gym.svg'
import bed from '../assets/bed.svg'
import dish from '../assets/dish.svg'
import bills from '../assets/bills.svg'

const About = () => {
  return (
    <>
      <div
        className=" md:h-[30rem] w-full flex mb-10 xs:mt-10 md:mt-0"
        id="about"
      >
        <div className="md:w-[70%] bg-topbg h-full xs:p-10 lg:px-44 flex flex-col justify-center">
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

          <Link to="/about">
            <button className="bg-secondary px-1 py-2 mt-3 w-32 text-topbg hover:bg-topbg hover:border hover:border-secondary hover:text-secondary">
              Read more
            </button>
          </Link>
        </div>
        <div className="w-[30%] xs:hidden md:block overflow-hidden bg-about">
          {/* <img src={Aboutimg} alt="Lounge image" className="w-full" /> */}
        </div>
      </div>
      <div className="section-small-screens w-full min-h-[50vh] flex flex-col items-center py-20">
        <div className="flex items-center xs:flex-col md:flex-row gap-5">
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 md:pt-8 box-shadow">
            <img src={food} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Restaurant</h4>
            <p className="text-gray-400 pr-10">
              Indulge in vibrant flavors at our tasty restaurant.
            </p>
          </div>
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={bed} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Apartment</h4>
            <p className="text-gray-400 pr-10">
              Family-friendly haven in a serene setting.
            </p>
          </div>
        </div>
        <div className="flex  items-center xs:flex-col md:flex-row gap-5 pt-10">
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={gym} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Gym</h4>
            <p className="text-gray-400 pr-10">
              Our tranquil gym offers a serene escape to energize your body and
              mind.
            </p>
          </div>
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={lounge} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Lounge</h4>
            <p className="text-gray-400 pr-10">
              Relax and socialize in our inviting lounge.
            </p>
          </div>
        </div>

        <div className="flex  items-center xs:flex-col md:flex-row gap-5 pt-10">
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={dish} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">
              Buy/Install Dishes
            </h4>
            <p className="text-gray-400 pr-10">
              Dish setup for DStv, StarTimes, GOtv & CCTV. Easy install, full
              support. Enjoy entertainment & security!
            </p>
          </div>
          <div className="xs:w-full md:w-[20rem] h-[15rem] p-3 pt-8 box-shadow">
            <img src={bills} alt="food" className="h-[2rem]" />
            <h4 className="text-black font-bold text-xl py-3">Utilities</h4>
            <p className="text-gray-400 pr-10">
              POS transactions, internet devices & business center all under one
              roof! Manage payments, connect & work.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
