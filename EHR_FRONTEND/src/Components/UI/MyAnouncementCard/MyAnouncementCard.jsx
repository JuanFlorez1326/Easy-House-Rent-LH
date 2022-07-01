import './MyAnouncementCard.css'
import React from 'react'
import { useNavigate } from 'react-router';
import CurrencyFormat from 'react-currency-format';

export const MyAnouncementCard = ({ data }) => {
    const {  idanuncio, titulo, direccion, zona ,ciudad, precio, url1 } = data
    
    const navigate = useNavigate()

    const SendAnouncement = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }


    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className='card-image' src={url1} alt="url1" />
                    </div>
                    <div className="aling-info">
                        <div className="name-atributes">
                            <p className='title-card'>{titulo}</p>
                            <p className='adress-city'>{direccion}-{ciudad}</p>
                            <p><CurrencyFormat value={precio}displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p>{value} <b>COP</b></p>} /></p>
                        </div>
                        <div className="button-visualizer">
                            <button onClick={SendAnouncement} className='action-visualizer'>Ver publicación</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

