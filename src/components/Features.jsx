import React from 'react'
import Food from '../assets/food.svg'
import Lounge from '../assets/lounge.svg'
import Car from '../assets/car.svg'
import Gym from '../assets/gym.svg'
import Bed from '../assets/bed.svg'

const Features = () => {
  return (
    <>
      <div className="text-black flex w-[100%] justify-center gap-10 pt-10 py-20">
        <div className="flex items-center gap-3">
          <img src={Food} alt="Utensil" className="w-[2rem]" />
          <p> Restaurant </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Lounge} alt="Utensil" className="w-[2rem]" />
          <p> Lounge </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Car} alt="Utensil" className="w-[2rem]" />
          <p className="leading-tight">
            Vehicle <br /> Registration
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Gym} alt="Utensil" className="w-[2rem]" />
          <p> Gym </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Bed} alt="Utensil" className="w-[2rem]" />
          <p> Apartment</p>
        </div>
      </div>
    </>
  )
}

export default Features
