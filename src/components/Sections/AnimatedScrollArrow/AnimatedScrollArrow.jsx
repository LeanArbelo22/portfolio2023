import React from 'react';
import './arrow-scroll.scss';

const AnimatedScrollArrow = ({ isOpen, closeMenu: handleMenu, link, color = '#395B64', rotate}) => {
  return (
    <a 
      href={`#${link}`} 
      onClick={() => handleMenu(false)}
      className={`scroll-down ${isOpen}`}>
        <svg 
          className={`${rotate ? 'rotate' : ''}`} 
          xmlns='http://www.w3.org/2000/svg' 
          width='38' height='38' 
          viewBox='0 0 24 24' 
          style={{fill: color, opacity: '.6'}}>
            <path d='M16.939 10.939 12 15.879l-4.939-4.94-2.122 2.122L12 20.121l7.061-7.06z'></path>
            <path d='M16.939 3.939 12 8.879l-4.939-4.94-2.122 2.122L12 13.121l7.061-7.06z'></path>
        </svg>
    </a>
  )
}

export default AnimatedScrollArrow;