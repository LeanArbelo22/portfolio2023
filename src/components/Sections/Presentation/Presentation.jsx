import React from 'react';
import AnimatedScrollArrow from '../AnimatedScrollArrow/AnimatedScrollArrow';
import Typewriter from 'typewriter-effect';
import './presentation.scss';


function Presentation({ menuState, handleMenu }) {
  const isOpen = menuState ? 'open' : '';

  return (
    <section id='presentation' className={`presentation ${isOpen}`}>
      <div className='container'>
        <div className='wrapper'>
        <div className='img'></div>
          <h1 data-shadow={'Leandro Arbelo'} className='name'>Leandro Arbelo</h1>
          <h3 className='title'>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Software Development Student'],
                autoStart: true,
                loop: true,
                cursor: '|',
                pauseFor: 3500,
                deleteSpeed: 100
              }}
            />
          </h3>
          <h3 className='tech'>
            <span>
              <Typewriter
                options={{
                  strings: ['MongoDB', 'JavaScript', 'React', 'CSS', 'Sass', 'Node.js', 'Python', 'MySQL'],
                  autoStart: true,
                  loop: true,
                  cursor: '|',
                  pauseFor: 1950,
                  deleteSpeed: 50
                }}
              />
            </span>
          </h3>
        </div>
      </div>
      <div className='circle'>
        <div className='circle-animation'></div>
      </div>

      <AnimatedScrollArrow closeMenu={handleMenu} isOpen={isOpen} link={`portfolio`} />
    </section>
  )
}

export default Presentation;