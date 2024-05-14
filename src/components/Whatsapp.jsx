import React, { useState, useEffect } from 'react';
import chat from '../assets/whatsapp.svg';

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Show icon after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="whatsapp-container">
      <a
        href="https://api.whatsapp.com/send?phone=+2347034842501&text=Hi,%20I%20would%20like%20to%make%20enquiries."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={chat}
          alt="whatsapp"
          className={`w-10 fixed bottom-10 left-5 ${isVisible ? '' : 'hidden'}`} // Toggle visibility based on scroll position
        />
      </a>
    </div>
  );
};

export default Whatsapp;
