import './ContactUs.css'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket, faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../Alert'
import { Overlay } from '../../StyledComponents/Overlay/StyledComponents';
import { useEffect } from 'react';
import { useSyncExternalStore } from 'react';

export const ContactUs = ({ value }) => {

  const [selectValue, setSelectValue] = useState('')

  const changeValue = () => {
    setSelectValue(value)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  let params = {
    user: name,
    email: email,
    message: message
  }

  useEffect(() => {
    changeValue()
  })

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeMessage = (e) => {
    setMessage(e.target.value)
  }

  const SendEmailContact = (e) => {
    e.preventDefault()
    if (name.length !== 0 || email.length !== 0 || message.length !== 0) {
      if (name.trim !== ' ' || email.trim !== ' ' || message.trim !== ' ') {
        emailjs.send('service_lkmzngd', 'template_8es2kip', params, 'djlvhn3a_9RYyEcPe')
          .then(response => {
            Alert('El correo fue enviado correctamente', '', 'success', 'Ok', '3000')
          })
          .catch(error => {
            Alert('No se pudo enviar el correo', '', 'error', 'Ok', '3000')
          })
      } else {
        Alert('Todos los campos son obligatorios', '', 'error', 'Ok', '3000')
      }
    } else {
      Alert('Todos los campos son obligatorios', '', 'error', 'Ok', '3000')
    }
  }

  const [visible, setVisible] = useState(false)

  const changeVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      {selectValue === 'button' &&
        <div>
          <button onClick={changeVisible} className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon' icon={faHeadset} /></button>
          <div className='viewTextIcon'><b><p>Contacto</p></b></div>
        </div>
      }
      {selectValue === 'text' &&
        <p onClick={changeVisible} className='footer-textInfo'>CONTÁCTENOS</p>
      }
      {selectValue === 'support' &&
        <button onClick={changeVisible} className='button-answer-content'>Enviar Pregunta</button>
      }
      {
        visible &&
        <Overlay>
          <div className='render-container-contact-us'>
            <div>
              <div className='div-container-contact-us'>

                <div className='div-contact-us'>
                  <h2 className='title-contact-us'>Contáctenos</h2>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faEnvelope} className='tools-render-action' />
                    <p className='text-contact'> easyhouserent02@gmail.com</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faInstagram} className='tools-render-action' />
                    <p className='text-contact'> @easyhouserent</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faPhone} className='tools-render-action' />
                    <p className='text-contact'> +57 317 458 3592</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faTwitter} className='tools-render-action' />
                    <p className='text-contact'> @EasyHouseRent02</p>
                  </div>
                </div>
                <div className='div-contact-touch'>
                  <form className='form-contact-us' onSubmit={SendEmailContact}>
                    <div className="header-contact">
                      <FontAwesomeIcon className='exit-contact' onClick={changeVisible} icon={faArrowRightFromBracket}></FontAwesomeIcon>
                    </div>
                    <h2 className='create-title'>Ponte en contacto</h2>
                    <h4 className='create-title title-contact'>¡No dude en enviarnos un mensaje!</h4>
                    <input className='info-input-register' onChange={(e) => { changeName(e) }} type="text" placeholder='Nombre completo' /><br />
                    <input className='info-input-register' onChange={(e) => { changeEmail(e) }} name='userEmail' type="email" placeholder='Email' /><br />
                    <textarea className='info-input-register contact-text' onChange={(e) => { changeMessage(e) }} cols="30" rows="10" placeholder='Mensaje'></textarea><br />
                    <button className='register-submit'>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      }
    </>
  )
}