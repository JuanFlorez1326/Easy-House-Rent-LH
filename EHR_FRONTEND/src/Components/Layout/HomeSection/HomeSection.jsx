import React,{ useState} from 'react'
import './HomeSection.css'
import { useNavigate } from 'react-router-dom'

export const HomeSection = () => {

    const navigate = useNavigate()

    const [ param , setParam ] = useState('')


    const getParam = (e) =>{
        setParam(e.target.value)
    }

    const sendSearch = () =>{
        navigate(`/result/?value=${param}`)
    }

    const sendEvent =(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            sendSearch()
        }
    } 

    return (

        <div>
            <div className='home-section-container'>
                <div className="home-section-info">
                    <div className="section-container">
                        <p className='section-container-slogan'>Aliado en búsqueda de hogar</p>
                        <h3 className='section-container-title'>Easy House Rent</h3>
                    </div>
                    <div className="search-home-container">
                        <input className="search-box-home" onKeyUp={sendEvent} onChange={(e)=> getParam(e)} type="text" placeholder='Busca por zona , lugar o nombre'></input>
                        <button onClick={sendSearch} className='search-home-submit'>Buscar</button>
                    </div> 
                </div> 
            </div>
            <div className="content-page-info">
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/916/916771.png' alt='apartment-icon'></img>
                    <div className="rent-text">
                        <h3 className='rent-text-title'>Diversidad de inmuebles</h3>

                        <p className='rent-info-text'>Entre lo que podemos ofrecerte tenemos cosas como viviendas, locales, fincas, apartamentos<br></br> ¡y más!</p>

                    </div>
                </div>
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/1786/1786971.png' alt='apartment-icon'></img>
                    <div className="rent-text">
                        <h3 className='rent-text-title'>Facilidad de contacto</h3>

                        <p className='rent-info-text'>Contamos con medios que falicitan el contacto entre usuario y propietario.</p>

                    </div>
                </div>
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/2971/2971926.png' alt='apartment-icon'></img>
                    <div className="cabin-text">
                        <h3 className='rent-text-title'>Diversidad de sectores</h3>

                        <p className='rent-info-text'>Publicaciones ofertadas no sólo en sector urbano, también en sector rural.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}