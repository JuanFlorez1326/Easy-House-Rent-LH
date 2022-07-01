import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faCircleInfo, faGears, faIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { ProfileAction, ProfileActionText, ProfileModal, SettingsSpace } from '../../StyledComponents/Overlay/StyledComponents'
import './ProfileSettings.css'


export const ProfileSettings = ({ userData }) => {

  const [settingsVisibility, setSettingsVisibility] = useState(false)

  const navigate = useNavigate()

  const changeSettings = () => {
    if (settingsVisibility === false) {
      setSettingsVisibility(true)
    } else {
      setSettingsVisibility(false)
    }
  }

  const sendChat = () => {
    navigate('/chat')
  }

  const sendProfile = () => {
    navigate('/profile')
  }

  const sendSupport = () => {
    navigate('/support')
  }

  const sendAbout = () => {
    navigate('/AboutUs')
  }

  const deleteSesion = () => {
    swal({
      title: `¿Esta seguro de cerrar sesion ?`,
      icon: `warning`,
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          localStorage.removeItem("userInfo")
          localStorage.setItem("userInfo", null)
          navigate('/')
          window.location.reload()
        }
      });
  }


  const [ miniaturePhoto , setMiniaturePhoto ] = useState('')


  const getMiniature = () => {
    if(userData !== null){
      if(userData[0].foto.length !== 1){
        setMiniaturePhoto(userData[0].foto)
      }
      else{
        setMiniaturePhoto('https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png')
      }
    }
  }

  useEffect(()=>{
    getMiniature()
  })


  return (
    <>
      <button className='profile-modal-activate' onClick={() => changeSettings()}><FontAwesomeIcon className='activate-profile-icon' icon={faCaretDown} /></button>
      {settingsVisibility &&
        <div className="status" onClick={changeSettings}>
          <ProfileModal>
            <NavLink to='/profile'>
              <div className="settings-basic-info">
                <div className="settings-image-container">
                  <img src={miniaturePhoto} alt="settingsImage" className='settings-image' />
                </div>
                <div className="settings-profile">
                  <p className='settings-profile-name'>{userData[0].nombre}</p>
                  <p className='send-profile-button'>Ver tu perfil</p>
                </div>
              </div>
            </NavLink>
            <SettingsSpace />
            <div className="settings-container">

              <ProfileAction onClick={sendChat} ><FontAwesomeIcon className='settings-action-icon' icon={faRocketchat} /><ProfileActionText>Mensajes</ProfileActionText></ProfileAction>
              <ProfileAction onClick={sendProfile} ><FontAwesomeIcon className='settings-action-icon' icon={faGears} /><ProfileActionText>Configuracion</ProfileActionText></ProfileAction>
              <ProfileAction onClick={sendSupport}><FontAwesomeIcon className='settings-action-icon' icon={faCircleInfo} /><ProfileActionText>soporte</ProfileActionText></ProfileAction>
              <ProfileAction onClick={sendAbout}><FontAwesomeIcon className='settings-action-icon' icon={faIdCardClip} /><ProfileActionText>Nosotros</ProfileActionText></ProfileAction>
            </div>
            <SettingsSpace />
            <div className="settings-action-container">
              <button className='settings-close' onClick={deleteSesion} >Cerrar sesión</button>
            </div>
          </ProfileModal>
        </div>
      }

    </>
  )
}
