import React, { useState, useEffect } from 'react';
import AnimateLetters from '../AnimateLetters/AnimateLetters';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import './navbar.scss';

const Burguer = ({ openMenu }) => {
    return (
        <div className='burguer' onClick={openMenu}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
        </div>
    )
}

const DataItems = () => {
    return (
        <>
            <div className='data-container'>
                <CallIcon className='icon' />
                <span>
                    <a 
                      href='https://api.whatsapp.com/send/?phone=5493515912166&text&app_absent=0' 
                      target='_blank' 
                      rel='noreferrer'>+549 3515912166</a>
                </span>
            </div>
            <div className='data-container'>
                <MailIcon className='icon' />
                <span>
                    <a 
                      href='mailto:lean.arbelo.dev@gmail.com'
                      rel='noreferrer'>lean.arbelo.dev@gmail.com</a>
                </span>
            </div>
            <div className='data-container cv'>
                <DownloadForOfflineIcon className='icon' />
                <span>
                    <a 
                      href='CV2023-LeandroArbelo-ESP.pdf' 
                      download={`CV-LeandroArbelo-Dic2022.pdf`}>Curriculum</a>
                </span>
            </div>
        </>
    )
}

function Navbar({ menuState, handleMenu }) {
    const [letterClass, setLetterClass] = useState('');
    const logoArray = ['l', 'e', 'a', '.', 'a', 'r', 'b', 'e', 'l', 'o'];
    
    const openMenu = () => handleMenu(!menuState);
    const isOpen = menuState ? 'active' : '';

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 100)
    }, [])

    return (
        <header className={`navbar ${isOpen}`}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#presentation' className='logo'>
                        <AnimateLetters
                            letterClass={`${letterClass} ${isOpen}`}
                            stringArray={logoArray}
                        />
                    </a>
                    <DataItems />
                </div>
                <div className='right'>
                    <Burguer openMenu={openMenu} />
                </div>
            </div>
        </header>
    )
}

export default Navbar;