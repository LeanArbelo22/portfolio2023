import React, { useEffect, useState } from 'react';
import AnimatedScrollArrow from '../AnimatedScrollArrow/AnimatedScrollArrow';
import CardModal from './CardModal/CardModal';
import { data } from './portfolio-data';
import './portfolio.scss';

function Portfolio({ menuState, handleMenu }) {
  const [selected, setSelected] = useState();
  const [displayedData, setDisplayedData] = useState();
  const [selectedCard, setSelectedCard] = useState({});
  const [modal, setModal] = useState(false);

  const menuIsOpen = menuState ? 'open' : '';
  const modalIsOpen = modal ? 'modal-open' : '';

  useEffect(() => {
    switch (selected) {
      case 'Work projects':
        setDisplayedData(data[0]);
        break;
      case 'Challenges':
        setDisplayedData(data[1]);
        break;
      case 'Programming Bootcamp project':
        setDisplayedData(data[2]);
        break;
      case 'Full Stack course projects (2021)':
        setDisplayedData(data[3]);
        break;
      case 'Vanilla JS':
        setDisplayedData(data[4]);
        break;
      case 'Others':
        setDisplayedData(data[5]);
        break;
      case 'Curriculums online':
        setDisplayedData(data[6]);
        break;
      default:
        setDisplayedData(data[0]);
    }
  }, [selected])

  const handleModal = (project) => {
    setSelectedCard(project);
    setModal(true)
  }

  return (
    <section id='portfolio' className='portfolio'>
      <ul className={`${menuIsOpen}`}>
        {
          list.map((item) => (
            <PortfolioPages
              key={item.id}
              id={item.id}
              page={item.page}
              active={selected === item.id}
              handleActive={setSelected}
            />
          ))
        }
      </ul>
      <div className='card-container'>
        <h4 className={`${menuIsOpen}`}>{selected}</h4>
        {
          displayedData && displayedData.projects.map((project, i) => {
            return (
              <div 
                  onClick={() => handleModal(project)} 
                  className={`card-item ${modalIsOpen} ${menuIsOpen}`} 
                  key={project.title + i}>
                    <span>{project.title}</span>
                    <img src={project.img} alt='project' />
              </div>
            )
          })
        }
      </div>
      {
        selectedCard && modal && <CardModal data={selectedCard} handleClose={setModal} />
      }
      <AnimatedScrollArrow closeMenu={handleMenu} isOpen={menuIsOpen} link={'contact'} />
    </section>
  )
}

const PortfolioPages = ({ id, page, active, handleActive }) => {

  useEffect(() => {
    handleActive('Work projects')
  }, [handleActive])

  return (
    <li
      className={`portfolio-pages ${active ? 'active' : ''}`}
      onClick={() => handleActive(id)}>
        {page}
    </li>
  )
}

const list = [
  { id: 'Work projects', page: 1 },
  { id: 'Challenges', page: 2 },
  { id: 'Programming Bootcamp project', page: 3 },
  { id: 'Full Stack course projects (2021)', page: 4 },
  { id: 'Vanilla JS', page: 5 },
  { id: 'Others', page: 6 },
  { id: 'Curriculums online', page: 7 }
]

export default Portfolio;