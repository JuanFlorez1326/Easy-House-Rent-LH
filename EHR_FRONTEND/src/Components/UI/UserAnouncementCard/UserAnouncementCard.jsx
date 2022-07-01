import './UserAnouncementCard.css'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { UserContext } from '../../../UserProvider/UserProvider';
import axios from 'axios';
import swal from 'sweetalert';
import { UpdateAnouncement } from '../../Modal/UpdateAnouncement/UpdateAnouncement';
import CurrencyFormat from 'react-currency-format';

export const UserAnouncementCard = ({ data , allData }) => {
    const { idusuario, idanuncio, titulo, direccion, zona, ciudad, precio, url1 } = data
    const { user } = useContext(UserContext)

    const deleteUserAnouncement = () => {
        axios.delete('https://localhost:5001/api/Advertisement/DeleteAd',
            { params: { idanuncio: idanuncio } })
            .then(res => {
                console.log(res);
            })
            .then(err => {
                console.log(err);
            })
    }

    const confirmDelete = () => {
        swal({
            title: `¿Esta seguro de eliminar el anuncio?`,
            text: `Una vez que lo elimine no lo podra recuperar`,
            icon: `warning`,
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUserAnouncement()
                    swal("El anuncio se ha eliminado correctamente", {
                        icon: "success",
                    });
                }
            });
    }


    const [displayOptions, setDisplayOptions] = useState(false)

    const validateUser = () => {
        if (user === null) {
            setDisplayOptions(false)
        } else if (user[0].idusuario === idusuario) {
            setDisplayOptions(true)
        } else {
            setDisplayOptions(false)
        }
    }

    useEffect(() => {
        validateUser()
    })

    const navigate = useNavigate()

    const SendAnouncement = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }
    return (
        <div className='mycard-container'>
            <div className='mycard-header'>
                <div className='mycard-header-options'>
                    {displayOptions &&
                        <div className="card-options">
                            <FontAwesomeIcon className='icon-action-mycard' icon={faTrash} onClick={confirmDelete} />
                            <UpdateAnouncement data={allData} />
                        </div>
                    }
                </div>
                <div className="mycard-image-container">
                    <img src={url1} alt="anuncio" className='mycard-image' />
                </div>
            </div>
            <div className="mycard-info">
                <h3 className=''>{titulo}</h3>
                <p>{direccion} {zona} {ciudad}</p>
                <CurrencyFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p>{value} <b>COP</b></p>} />
            </div>
            <div className="mycard-footer">
                <button onClick={SendAnouncement} className='action-visualizer'>Ver anuncio</button>
            </div>
        </div>
    )
}

