import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './card-modal.scss';

function CardModal({ data, handleClose }) {
  const { stack, githubURL, deployURL, video, title, description } = data;

  return (
    <div className='modal'>
      <div className='modal-container'>
        <HighlightOffIcon 
            onClick={() => handleClose(false)} 
            className='close-btn' 
        />
        <h2 className='modal-title'>{title}</h2>
        <p className='description'>{description}</p>
        <ul className={`stack ${stack.length > 1 ? 'long' : ''}`}>
          <p>Stack:</p>
          {
            stack.map((tech, i) => {
              return (
                <li className={`stack-items`} key={tech + i}>
                {tech}
                </li>
              )
            })
          }
        </ul>
        <div className="buttons">
          <a 
            href={githubURL  !== 'No disponible' ? githubURL : undefined} 
            target='_blank' 
            rel='noreferrer'>
              <GitHubIcon />
              <span>{githubURL !== 'No disponible' ? 'Repositorio' : 'No disponible'}</span>
          </a>
          <a 
            href={deployURL  !== 'No disponible' ? deployURL : undefined} 
            target='_blank' 
            rel='noreferrer'>
              <LinkIcon />
              <span>{deployURL  !== 'No disponible' ? 'Deploy' : 'No disponible'}</span>
          </a>
          {
            video && (
              <a href="/" className='video-item'>
                <PlayCircleIcon />
                <span>Ver video</span>
              </a>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CardModal;