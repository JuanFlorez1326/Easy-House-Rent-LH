import { Header } from "../../Layout/Header/Header";
import { Footer } from "../../Layout/Footer/Footer";
import React from 'react'
import './Support.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDochub, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDollarSign, faEarthAmericas, faExclamation, faHouse, faLightbulb, faLock, faMapLocationDot, faPerson } from "@fortawesome/free-solid-svg-icons";
import { ContactUs } from "../../UI/ContactUs/ContactUs";

export const Support = () => {

  const sendManual = () => {
    window.location.href = 'https://docs.google.com/document/d/1DrMiacSmUaDV-KP539nJ3Ih5Rh1ChZUK/edit?usp=sharing&ouid=105302495081606426840&rtpof=true&sd=true'
  }

  return (
    <>
      <Header />
      <div className="background-container">
        <div className="support-banner-container">
          <div className="banner-title">
            <h1>¿Como podemos ayudarte el día de hoy?</h1>
          </div>
          <div className="banner-input">
            <input className='input-support' type="text" placeholder='¿Cúal es tu Pregunta?' />
            <button className='input-button-support'>Buscar</button>
          </div>
        </div>
        <div className="most-answers-container">
          <div className="most-answer-content">
            <FontAwesomeIcon icon={faDochub} className='asnwer-fa-icon blue' />
            <h2 className="support-info-title">Manual de Usuario</h2>
            <p className="support-info-text">A continuación, te dejaremos un manual de usuario en el que puedes consultar tus dudas sobre el aplicativo, con respecto a su uso y finalidad.</p>
            <div className="button-answer-container">
              <button onClick={sendManual} className='button-answer-content'>Ver Manual</button>
            </div>
          </div>
          <div className="most-answer-content">
            <FontAwesomeIcon icon={faPerson} className='asnwer-fa-icon red' />
            <h2 className="support-info-title">Envíanos tu pregunta</h2>
            <p className="support-info-text"> No dudes en enviarnos tu pregunta, el equipo de soporte te enviara respuesta al momento de ser leída.</p>
            <div className="button-answer-container">
              <ContactUs value={'support'} />
            </div>
          </div>
          <div className="most-answer-content">
            <FontAwesomeIcon icon={faLightbulb} className='asnwer-fa-icon yellow' />
            <h2 className="support-info-title">Preguntas Frecuentes</h2>
            <p className="support-info-text">Hemos recopilado las preguntas más frecuentes, referentes a nuestro aplicativo listadas en la siguiente sección.</p>
            <div className="button-answer-container">
              <button className='button-answer-content'>Ver Preguntas</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="support-ask-title">Preguntas más frecuentes</h1>
      <div className="most-popular-answer-container">
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faDollarSign} className='circle-ask' />
          <p className="content-ask-title">¿Puedo pagar por medio de la aplicación?</p>
          <p className="content-ask-text">Actualmente no se han implementado medios de pago mediante la aplicación, funcionando solo como intermediario.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faHouse} className='circle-ask' />
          <p className="content-ask-title">¿Las publicaciones son reales?</p>
          <p className="content-ask-text">No se tiene un medio donde se verifique la autenticidad de las publicaciones alojadas en nuestro sitio. </p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faExclamation} className='circle-ask' />
          <p className="content-ask-title">¿Puedo usar la aplicación web desde dispositivos móviles?</p>
          <p className="content-ask-text">Si, hemos realizado un diseño adaptable a la pantalla de cualquier dispositivo.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faMapLocationDot} className='circle-ask' />
          <p className="content-ask-title">¿Las ubicaciones están verificadas?</p>
          <p className="content-ask-text">No, estas son datos ingresados por el propietario de la publicación.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faEarthAmericas} className='circle-ask' />
          <p className="content-ask-title">¿Cuál es el alcance geografico de la aplicación?</p>
          <p className="content-ask-text">Por el momento la aplicación cuenta con un alcance únicamente regional.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faDatabase} className='circle-ask' />
          <p className="content-ask-title">¿Los datos ingresados están seguros?</p>
          <p className="content-ask-text">Si, estos son almacenados de manera segura dando acceso a los datos no sensibles únicamente al usuario registrado.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faFacebookF} className='circle-ask' />
          <p className="content-ask-title">¿Puedo autenticarme por Facebook? </p>
          <p className="content-ask-text">No, la autenticación por Facebook fue removida totalmente de la aplicación dejando únicamente autenticación por Google.</p>
        </div>
        <div className="most-popular-awnswer-content">
          <FontAwesomeIcon icon={faLock} className='circle-ask' />
          <p className="content-ask-title">¿Es un sitio confiable?</p>
          <p className="content-ask-text">Nuestro sitio se considera confiable, contamos con certificado SSL para la transferencia de datos a través de internet.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

