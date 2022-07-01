import { faAddressBook, faArrowPointer, faCheck, faCode, faShieldHalved, faTractor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="banner-about-container">
        <div className="banner-about-title">
          <h1>EASY HOUSE RENT</h1>
          <p className='banner-about-text'>Información sobre nosotros y el desarrollo del aplicativo</p>
        </div>
      </div>
      <div className="about-slogan">
        <div className="slogan-image-container">
          <img className='slogan-img' src="https://cdni.iconscout.com/illustration/premium/thumb/boy-making-decision-with-help-of-discussion-2527773-2114679.png" alt="group" />
        </div>
        <div className="text-slogan-container">
          <h2 className='slogan-title'>Nuestra idea</h2>
          <p className='slogan-text'>Esta nace de generar facilidad al usuario en la tarea de emprender la búsqueda de un inmueble, con Easy House Rent el esfuerzo se minimiza obteniendo diversas opciones en cuestión de segundos, eligiendo la de tu preferencia y contactando directamente con su propietario.</p>
        </div>
      </div>
      <div className="tags-container">
        <div className="tags-content">
          <FontAwesomeIcon icon={faCode} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Equipo</h2>
            <p className='tag-tile'>Somos un equipo de jóvenes desarrolladores donde logramos unir toda nuestra creatividad y logrando un fuerte trabajo coletivo hemos creado esta solución software.</p>
          </div>
        </div>
        <div className="tags-content">
          <FontAwesomeIcon icon={faAddressBook} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Roles</h2>
            <p className='tag-tile'>Para el desarrollo cada integrante fue ubicado según sus habilidades para lograr una mayor productividad y eficiencia en los roles desempeñados.</p>
          </div>
        </div>
        <div className="tags-content">
          <FontAwesomeIcon icon={faArrowPointer} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Integridad</h2>
            <p className='tag-tile'>Hemos desarrollado una interfaz adaptable, que permite al usuario mayor accesibilidad a nuestro sistema, ya que prioriza la adaptación de este en cualquier dispositivo.</p>
          </div>
        </div>
        <div className="tags-content">
          <FontAwesomeIcon icon={faTractor} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Sectores</h2>
            <p className='tag-tile'>En Easy House Rent optamos porque el usuario encuentre más opciones a su alcance.</p>
          </div>
        </div>
        <div className="tags-content">
          <FontAwesomeIcon icon={faCheck} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Responsabilidad</h2>
            <p className='tag-tile'>Nuestro equipo de trabajo ha logrado cumplir con cada tarea propuesta para lograr el objetivo.</p>
          </div>
        </div>
        <div className="tags-content">
          <FontAwesomeIcon icon={faShieldHalved} className='icon-about' />
          <div className="line-about" />
          <div className="tags-text-content">
            <h2 className='tag-title'>Seguridad</h2>
            <p className='tag-tile'>Hemos logrado implementar certificados de seguridad y transferencia de datos para un sitio más seguro.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
