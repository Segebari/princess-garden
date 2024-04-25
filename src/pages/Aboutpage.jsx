import React from 'react'
import Contact from '../components/Contact'
import ScrollTop from '../components/ScrollTop'

const Aboutpage = () => {
  return (
    <>
      <div className="min-h-screen w-full text-black p-16">
        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">Who we are</h2>
          <p className="text-xl">
            Primadas Investment Nigeria Limited was awarded a license from the
            Corporate Affairs Commission (CAC) in Abuja in 2006 with the aim of
            rendering services in Nigeria business environment. It later got its
            license from Nigeria Communication Commission (NCC) in 2012, to act
            as a data channel partner to Telecommunication Company and also with
            sales and installation of digital dishes. Other licenses obtained
            include Mobile Money (Certified) Super Agent from various financial
            institutions. Primadas Investment Nigeria Limited has also invested
            in supermarkets, stores and retails outlets. The Headquarters is
            situated in Lagos with Professional Managers for running the aims
            and objectives of the Organization.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">VISION</h2>
          <p className="text-xl">
            At Primadas Investment Nigeria Limited, Our Vision is to be one of
            the Nigeria most respected trustworthy and efficient in Contracts
            and Telecoms Services.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">MISSION</h2>
          <p className="text-xl">
            Our Mission is to be Nigeria's Premier Telecoms Dealer and
            Professional Contractor with reliability, trustworthy responsiveness
            and exemplary corporate customer excellence.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-5xl font-bold pb-5 text-primary">
            FROM CEO'S PEN
          </h2>
          <p className="text-xl leading-loose">
            Dear Value Customers, <br /> Business cannot grow and attain its
            full course of establishment when value, trust and friendship are
            not treasured. <br />
            We at Primadas Investment Nigeria Limited, we treasure those values
            and be in business in your own interest. <br />
            If there is anything we can use to serve you better please feel free
            to contact me at{' '}
            <a className='text-primary' href="mailto:ibruojas@yahoo.com">ibruojas@yahoo.com</a>. <br />
            The confidence you impose on us can never be overlooked, we
            therefore pledge to provide more and best possible service in the
            future.
            <br />{' '}
            <span>
              Sincerely, <br />
              O.A.Ibru CEO
            </span>
          </p>
        </div>
      </div>
      <Contact />
      <ScrollTop />
    </>
  )
}

export default Aboutpage
