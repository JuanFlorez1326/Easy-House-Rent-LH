import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { Footer } from '../../Layout/Footer/Footer'
import './Page404.css'
import { useNavigate } from 'react-router-dom'

export const Page404 = () => {

    const navigate = useNavigate()

    const sendHome = () =>{
        navigate('/')
    }

  return (
    <div>
        < Header/>
        <div className="not-found-container">
            <div className="not-found">   
                <div className="info-error">
                    <h1 className='error-title'>Oooops!</h1>
                    <p className='error-subtitle'>lo sentimos, Pagina no encontrada...</p>
                    <p className='error-subtitle'>Intenta buscar otra cosa</p>
                    <button onClick={ sendHome } className='error-relink'>Regresar al inicio</button>

                </div>
                <div className="error-image-container">
                    <img className="error-image" src='https://i.ibb.co/ZX3qykz/404.jpg' alt='errorPage'></img>
                </div>  
            </div>
        </div>
        <Footer />
    </div>
  )
}
