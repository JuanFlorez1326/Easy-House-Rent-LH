import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../../../firebase'
import { UseChat } from '../../../UseChat'
import './Chat.css'
import { Header } from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider'
import { useNavigate } from 'react-router'

export const Chat = () => {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const { loading, messages, error } = UseChat()

    useEffect(() => {
        if (user === null) {
            navigate('/')
        }

    })

    let currentTime = new Date()
    let date = currentTime.toLocaleTimeString()

    const [message, setMessage] = useState('')

    const onPress = (e) => {
        if (message.trim() !== '') {
            let nombre = `${user[0].nombre} ${user[0].apellidos}`
            db.collection('messages').add({
                timestamp: Date.now(),
                date: date,
                message,
                name: nombre,
                user: user[0].idusuario,
                photo: user[0].foto
            })
            changeDefault()
        }
    }

    const sendEvent = (event) => {
        let charCode = event.keyCode;
        if (charCode === 13) {
            onPress()
        }
    }

    const changeDefault = () => {
        setMessage('')
    }

    return (
        <div className='chat-box'>
            <Header />
            <div className="chat-container">

                <div className="chat-form-content">
                    <div className="messages-container">
                        {
                            messages.map(m => {
                                if (m.user === user[0].idusuario) {
                                    return (
                                        <div className="message-content">
                                            <div className="photo-content-msj">
                                                <img src={m.photo} alt="profile" className='photo-msj' />
                                            </div>
                                            <div key={m.id} className="send-message">
                                                <p className='date-message'>~ {m.name}</p>
                                                <p className='text-message'>{m.message}</p>
                                                <p className='date-message'>{m.date}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="messages-content">

                                            <div className='send-message  send-message-two'>
                                                <p className='date-message date-two'>~ {m.name}</p>
                                                <p className='text-message'>{m.message}</p>
                                                <p className='date-message date-two'>{m.date}</p>
                                            </div>
                                            <div className="photo-content-msj">
                                                {
                                                    m.photo === ' ' ?
                                                        <img src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png' alt="" />
                                                        :
                                                        <img src={m.photo} alt="profile" className='photo-msj' />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            }

                            )}
                    </div>
                    <div className='send-message-content'>
                        <input autoFocus className='info-input-send' placeholder='Escribe un mensaje aquí' onKeyUp={sendEvent} value={message} type='text' onChange={(e) => setMessage(e.target.value)} />
                        <FontAwesomeIcon className='send-message-icon' icon={faPaperPlane} onClick={onPress} />
                    </div>
                </div>
            </div>

        </div>
    )
}
