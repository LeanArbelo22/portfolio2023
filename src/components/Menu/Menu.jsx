import React from 'react';
import './menu.scss';

const Items = ({ menuState, handleMenu }) => {

    const itemsArray = [
        { title: 'Home', link: '#presentation', download: false },
        { title: 'Portfolio', link: '#portfolio', download: false },
        { title: 'Contact', link: '#contact', download: false },
        { title: 'Curriculum', link:'CV2023-LeandroArbelo-ESP.pdf', download: true}
    ];

    return (
        <ul className='items'>
            {
                itemsArray.map((item, i) => (
                    <li key={item + i}>
                        <a 
                          href={item.link}
                          download={item.download && 'CV-LeandroArbelo-Dic2022.pdf'} 
                          onClick={() => handleMenu(!menuState)}>
                            {item.title}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
};

function Menu({ menuState, handleMenu }) {
    const isOpen = menuState ? 'active' : '';

    return (
        <div className={`menu ${isOpen}`}>
            <Items 
                menuState={menuState} 
                handleMenu={handleMenu} />
            <span>lean.arbelo.dev@gmail.com</span>
        </div>
    )
}

export default Menu;