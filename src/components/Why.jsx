import React from 'react'
import luxury from '../assets/img3.svg'

const Why = () => {
  return (
    <>
      <div className="min-h-[100vh]" id="service">
        <h2 className="text-topbg text-4xl text-center font-bold">
          Why You Should <span className="text-primary">Stay Here</span>
        </h2>
        <p className="text-gray-400 text-center px-96 pt-5">
          Seek an unforgettable escape. Immerse yourself in refined comfort and
          rediscover relaxation at Princess Gardens.
        </p>

        <div className="flex pl-24 w-full h-[40rem] mt-10">
          <div className="w-1/2">
            <div className="text-black mb-5">
              <div className="border mb-4 rounded-[50%] w-10 h-10 bg-primary grid items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-bold mb-3">
                In-Room Dining at Your Doorstep
              </h4>
              <p className="text-sm text-gray-400 text-justify pr-[15rem]">
                Our extensive menu caters to all cravings, delivered fresh and
                delicious directly to your room. Perfect for late-night snacks,
                romantic breakfasts, or leisurely lunches.
              </p>
            </div>

            <div className="text-black mb-5">
              <div className="border mb-4 rounded-[50%] w-10 h-10 bg-primary grid items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-bold mb-3">Seamless Transactions</h4>
              <p className="text-sm text-gray-400 text-justify pr-[15rem]">
                Unwind in your room without a worry. Our convenient POS system
                lets you easily settle room service and other charges from your
                phone or in-room device. No lines, just pure convenience.
              </p>
            </div>

            <div className="text-black mb-5">
              <div className="border mb-4 rounded-[50%] w-10 h-10 bg-primary grid items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-bold mb-3">Your Apartment Oasis</h4>
              <p className="text-sm text-gray-400 text-justify pr-[15rem]">
                Unwind and recharge in your fully-equipped apartment. Luxurious
                furnishings and modern amenities provide the perfect haven for
                relaxation, work, or play.
              </p>
            </div>
          </div>
          <div className=" w-1/2 relative overflow-hidden">
            <img
              src={luxury}
              alt="luxury image"
              className="w-[80%] h-[100%] relative right-[-11rem]"
            />
            <div className="absolute w-full top-20 h-full ml-5 ">
              <div class=" absolute box-shadow ml-32 bg-white top-0 flex gap-3 items-center justify-between h-5rem w-10rem rounded-lg text-black p-4">
                <div class="w-16 h-16 rounded-[50%] border border-secondary"></div>
                <div class="text-left">
                  <h5 class="text-lg font-bold">Mr. Ray</h5>
                  <p class="text-sm">
                    Comfy beds and delicious breakfast. <br /> Perfect for
                    relaxation.
                  </p>
                </div>
              </div>

              <div class=" absolute box-shadow ml-5 bg-white top-52 flex gap-3 items-center justify-between h-5rem w-10rem rounded-lg text-black p-4">
                <div class="w-16 h-16 rounded-[50%] border border-secondary"></div>
                <div class="text-left">
                  <h5 class="text-lg font-bold">Mrs. Esther</h5>
                  <p class="text-sm">
                    Comfy beds and delicious breakfast. <br /> Perfect for
                    relaxation.
                  </p>
                </div>
              </div>

              <div class=" absolute box-shadow ml-32 bg-white top-96 flex gap-3 items-center justify-between h-5rem w-10rem rounded-lg text-black p-4">
                <div class="w-16 h-16 rounded-[50%] border border-secondary"></div>
                <div class="text-left">
                  <h5 class="text-lg font-bold">Mr. Chuks</h5>
                  <p class="text-sm">
                    Comfy beds and delicious breakfast. <br /> Perfect for
                    relaxation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Why
