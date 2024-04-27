import React, { useState, useEffect } from 'react';
import './BackToTop.scss';
import { BiSolidChevronsDown } from "react-icons/bi";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
  
      if (scrollTop > 100) { // 100 viewport yüksekliği
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div id='backToTop' onClick={scrollToTop} style={{ display: isVisible ? 'flex' : 'none' }}>
            <p><BiSolidChevronsDown /></p>
            <span>Go Top</span>
        </div>
    );
}

export default BackToTop;
