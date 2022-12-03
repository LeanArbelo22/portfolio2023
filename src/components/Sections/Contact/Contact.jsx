import React from 'react';
import AnimatedScrollArrow from '../AnimatedScrollArrow/AnimatedScrollArrow';
import ProfilePic from '../../../assets/yo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './contact.scss';

const MediaIcons = () => {
  return (
    <div className='media-icons'>
      <a href='/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
      <a href='/' target='_blank' rel='noreferrer'><GitHubIcon /></a>
      <a href='/' target='_blank' rel='noreferrer'><WhatsAppIcon /></a>
      <a href='/' target='_blank' rel='noreferrer'><MailOutlineIcon /></a>
      <a href='/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
    </div>
  )
}

function Contact({ menuState, handleMenu }) {
  const isOpen = menuState ? 'open' : '';

  return (
    <section id='contact' className='contact'>
      <div className='about-me-container'>
        <div className='content'>
          <div className='card'>
            <div className='card-container'>
              <div className='profile-img'>
                <img src={ProfilePic} alt='profile' />
              </div>

              <div className="headers">
                <p>A little bit about me...</p>
              </div>

              <div className="my-description">
                <p>I'm a full stack developer who loves the frontend and animations, I'm also studying Software Development at the Santo Domingo Institute. I'm currently working as a full stack developer at <a href='https://esdev-arg.com/'>ESDev</a>, and looking for new job opportunities!</p>
              </div>

              <MediaIcons />
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form'>

      </div>

      <AnimatedScrollArrow closeMenu={handleMenu} isOpen={isOpen} link={'presentation'} color={'#000'} rotate={true} />
    </section>
  )
}

export default Contact;