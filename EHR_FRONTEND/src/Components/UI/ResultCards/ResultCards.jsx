import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './ResultCards.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEye, faLocationDot, faMaximize } from '@fortawesome/free-solid-svg-icons';

export const ResultCards = ({ data }) => {
    const { idanuncio, titulo, ciudad,  zona, direccion, fecha, precio, url1 } = data

    const navigate = useNavigate()

    const sendToSelect = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }
    return (
        <div  key={idanuncio} className='card-render-container' >
            <div className="card-img-render">
                <img  onClick={sendToSelect} src={url1} alt="cardrender" className='card-img' />

            </div>
            <div onClick={sendToSelect} className="card-info-render">
                <div className="card-tools-render">
                    <p className='text-container-icon'><FontAwesomeIcon icon={faCalendarDays} className='tools-render-action' />{fecha}</p>
                    <h1 className='card-title-render'>{titulo}</h1>
                    <div className="text-container-icon-city">
                        < FontAwesomeIcon icon={faLocationDot} className='tools-render-action' />
                        <p className='text-container-icon-city'>{ciudad} - {zona} - {direccion}</p>
                    </div>
                </div>
                <div className="tools-actions">
                    <CurrencyFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p className='render-value'>{value} <b>COP</b></p>} />
                    <div className="icons-actions">
                        <FontAwesomeIcon className='tools-render-action' icon={faEye} />
                        <FontAwesomeIcon className='tools-render-action' icon={faMaximize} />
                    </div>
                </div>
            </div>
        </div>
    )
}