import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Sections/Contact/Contact';
import Portfolio from './components/Sections/Portfolio/Portfolio';
import Presentation from './components/Sections/Presentation/Presentation';

function App() {
  const [menuState, setMenuState] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && window.innerWidth > 768) {
      setTimeout(() => {
        setMenuState(true)
      }, 5000)
    }

    console.log(location.pathname)
  }, [location.pathname])

  return (
    <div className='app'>
      <Navbar 
          menuState={menuState} 
          handleMenu={setMenuState}
      />
      <Menu 
          menuState={menuState} 
          handleMenu={setMenuState} 
      />
      <div className='sections'>
        <Presentation menuState={menuState} handleMenu={setMenuState} />
        <Portfolio menuState={menuState} handleMenu={setMenuState} />
        <Contact menuState={menuState} handleMenu={setMenuState} />
      </div>
    </div>
  );
}

export default App;
