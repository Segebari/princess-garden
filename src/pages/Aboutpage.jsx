import React from 'react'
import Contact from '../components/Contact'
import ScrollTop from '../components/ScrollTop'
import Whatsapp from '../components/Whatsapp'

const Aboutpage = () => {
  return (
    <>
      <div className="min-h-screen w-full text-black p-5 md:p-16">
        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">Who we are</h2>
          <p className="md:text-xl">
          Princess Gardens isn't just a hotel; it's an experience. We are a haven of serenity nestled amidst Sparkinglight Estate, Ibafo, Ogun State.  Our commitment is to providing exceptional hospitality that caters to the discerning traveler, the high-powered professional, and families seeking a luxurious escape.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">VISION</h2>
          <p className="md:text-xl">
          Princess Gardens envisions itself as the pinnacle of Nigerian hospitality. We aim to set the benchmark for luxury, service, and guest satisfaction within the country. Through continuous innovation and unwavering dedication to excellence, we aspire to become a symbol of sophistication and tranquility, recognized not just nationally but internationally.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">MISSION</h2>
          <p className="md:text-xl">
          Our mission is to be the premier hospitality destination in Nigeria. We strive to exceed expectations by providing unparalleled service, luxurious accommodations, and unforgettable experiences. We are dedicated to creating a space that fosters relaxation, rejuvenation, and productivity for every guest.
          </p>
        </div>
        {/* <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">
            FROM CEO'S PEN
          </h2>
          <p className="md:text-xl leading-loose">
            <span className="text-primary">Dear Esteemed Customers</span>,{' '}
            <br /> Business cannot grow and attain its full course of
            establishment when value, trust and friendship are not treasured.{' '}
            <br />
            We at Primadas Investment Nigeria Limited, we treasure those values
            and be in business in your own interest. <br />
            If there is anything we can use to serve you better please feel free
            to contact me at{' '}
            <a className="text-primary" href="mailto:ibruojas@yahoo.com">
              ibruojas@yahoo.com
            </a>
            . <br />
            The confidence you impose on us can never be overlooked, we
            therefore pledge to provide more and best possible service in the
            future.
            <br />
            <span className="text-primary">
              Sincerely, <br />
              O.A.Ibru CEO
            </span>
          </p>
        </div> */}
      </div>
      <Contact />
      <ScrollTop />
      <Whatsapp/>
    </>
  )
}

export default Aboutpage
