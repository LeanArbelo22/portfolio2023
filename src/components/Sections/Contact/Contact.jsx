import React, { useState, useRef } from 'react';
import AnimatedScrollArrow from '../AnimatedScrollArrow/AnimatedScrollArrow';
import ProfilePic from '../../../assets/yo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
/* import MailOutlineIcon from '@mui/icons-material/MailOutline'; */
import emailjs from '@emailjs/browser';
import './contact.scss';

const MediaIcons = () => {
  return (
    <div className='media-icons'>
      <a href='https://www.linkedin.com/in/leandro-arbelo' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
      <a href='https://github.com/LeanArbelo22' target='_blank' rel='noreferrer'><GitHubIcon /></a>
      <a href='https://api.whatsapp.com/send/?phone=5493515912166&text&app_absent=0' target='_blank' rel='noreferrer'><WhatsAppIcon /></a>
      <a href='https://www.instagram.com/leaarbelo' target='_blank' rel='noreferrer'><InstagramIcon /></a>
      {/* <a href='/' target='_blank' rel='noreferrer'><MailOutlineIcon /></a> */}
    </div>
  )
}

function Contact({ menuState, handleMenu }) {
  const isOpen = menuState ? 'open' : '';

  const form = useRef();
  const [myMessage, setMyMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gmail', 'template_rac5vr4', form.current, 'egrw1HiuWJA3l-Wwv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setMyMessage(true);
  }

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
        <form ref={form} onSubmit={sendEmail}>
          <h3>Send me a message!</h3>
          <input type="text" placeholder='name' name="name" /><input type="text" placeholder='email' name="email" />
          <textarea name="message" id="" cols="30" rows="10" placeholder='message' />
          <input type="submit" value="Send" />
          {myMessage && <span>Received 😃</span>}
        </form>
      </div>

      <AnimatedScrollArrow closeMenu={handleMenu} isOpen={isOpen} link={'presentation'} color={'#000'} rotate={true} />
    </section>
  )
}

export default Contact;