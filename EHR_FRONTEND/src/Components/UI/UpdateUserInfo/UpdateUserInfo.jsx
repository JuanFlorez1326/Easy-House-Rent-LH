import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider'
import { Modal, Overlay, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import './UpdateUserInfo.css'
import swal from 'sweetalert';

export const UpdateUserInfo = () => {

  const { user, updateInfo } = useContext(UserContext)
  const [visibility, setVisibility] = useState(false)

  const updateVisibility = () => {
    setVisibility(true)
  }



  const validateCloseModal = () => {
    swal({
      title: `¿Esta seguro de cerrar la actualizacion del usuario?`,
      text: `Una vez que lo cierre no lo podra recuperar la información`,
      icon: `warning`,
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          closeModal()
        }
      });
  }

  const closeModal = () => {
    setVisibility(false)
  }

  const [name, setName] = useState(user[0].nombre)
  const [lastName, setLastName] = useState(user[0].apellidos)
  const [email, setEmail] = useState(user[0].email)
  const [phone, setPhone] = useState(user[0].telefono)

  const setStatus = () => {
    setName(user[0].nombre)
    setEmail(user[0].email)
    setLastName(user[0].apellidos)
    setPhone(user[0].telefono)
  }

  useEffect(() => {
    setStatus()
  }, [])

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeLastName = (e) => {
    setLastName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePhone = (e) => {
    setPhone(e.target.value)
  }

  const sendDataUpdate = () => {
    axios.put('https://localhost:5001/api/Users', {
      idusuario: user[0].idusuario,
      nombre: name,
      apellidos: lastName,
      email: email,
      telefono: phone
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          updateInfo(name, lastName, email, phone)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <ProfileCardButton onClick={() => updateVisibility()}>Actualizar</ProfileCardButton>
      {visibility &&
        <Overlay>
          <Modal>
            <div className="header-modal">
              <FontAwesomeIcon className='header-modal-icon' onClick={validateCloseModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
            <div className="update-content">
              <h1 className='create-title'>Actualiza tu información</h1>
            </div>
            <div className="update-render-info">
              <p className='reduce-title'>Nombres</p>
              <input type="text" className='email-put' placeholder='Nombres' defaultValue={user[0].nombre} onChange={(e) => { changeName(e) }} ></input>
              <p className='reduce-title'>Apellidos</p>
              <input type="text" className='email-put' placeholder='Apellidos' defaultValue={user[0].apellidos} onChange={(e) => { changeLastName(e) }}></input>
              <p className='reduce-title'>Correo Electrónico</p>
              <input type="text" className='email-put' placeholder='Correo electronico' defaultValue={user[0].email} onChange={(e) => { changeEmail(e) }}></input>
              <p className='reduce-title'>Teléfono</p>
              <input type="text" className='email-put' placeholder='Telefono' defaultValue={user[0].telefono} onChange={(e) => { changePhone(e) }} ></input>
            </div>
            <div className="update-info-container">
              <button className='send-email' onClick={sendDataUpdate}>Actualizar</button>
            </div>
          </Modal>
        </Overlay>
      }
    </>
  )
}
