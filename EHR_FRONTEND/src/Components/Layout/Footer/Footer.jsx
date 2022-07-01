import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { ContactUs } from '../../UI/ContactUs/ContactUs';


export const Footer = () => {
  return (
    <div className='register-footer-container'>
        <NavLink to="/"><p className='footer-title'>Easy House Rent</p></NavLink>
        <div className="footer-icons">
          <a href='https://twitter.com/EasyHouseRent02' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faTwitter}/></a>
          <a href='https://www.facebook.com/-104807078925662' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faFacebook}/></a>
          <a href='https://wa.link/l1zwok' target='_blank' rel='noreferrer'><FontAwesomeIcon className="footer-icon" icon={faWhatsapp}/></a>
          <a href='https://github.com/sebasruiz09' target='_blank' rel='noreferrer'><FontAwesomeIcon  className='footer-icon' icon={faGithub}/></a>
          <a href='https://www.instagram.com/easyhouserent' target='_blank' rel='noreferrer'><FontAwesomeIcon className='footer-icon' icon={faInstagram}/></a>     
        </div>
        <div className="footer-relinks">
            <NavLink to="/privacy&polity" className="footer-textInfo"><p>POLÍTICA DE PRIVACIDAD</p></NavLink>
            <NavLink to="/aboutUs" className="footer-textInfo"><p>SOBRE NOSOTROS</p></NavLink>
            <ContactUs value={'text'} />
            <a href='https://docs.google.com/document/d/1DrMiacSmUaDV-KP539nJ3Ih5Rh1ChZUK/edit?usp=sharing&ouid=105302495081606426840&rtpof=true&sd=true' target='_blank' rel='noreferrer' className='footer-textInfo'><p>MANUAL DE USUARIO</p></a>
        </div>
    </div>
  )
}
