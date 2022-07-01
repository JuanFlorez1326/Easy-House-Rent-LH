import { faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import { UserImage } from '../../UI/UserImage/UserImage'
import './OtherUser.css'
import Carousel from 'react-elastic-carousel';
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard'
import { Alert } from '../../Alert'
import { UserContext } from '../../../UserProvider/UserProvider'
import swal from 'sweetalert'

export const OtherUser = () => {

  const { user } = useContext(UserContext)

  const [searchParams] = useSearchParams()

  let idUser = searchParams.get('idUser')

  const [userData, setUserData] = useState([])
  const [userPhone, setUserPhone] = useState('')

  const getUserInfo = () => {
    axios.get('https://localhost:5001/api/Users/getUser', { params: { idusuario: idUser } })
      .then(response => {
        setUserData(response.data)
        setUserPhone(response.data[0].telefono)
      })
  }

  const [userAnouncement, setUserAnouncement] = useState([])

  const getAdversitement = () => {
    axios.get('https://localhost:5001/api/Advertisement/AdUser', { params: { idusuario: idUser } })
      .then(response => {
        setUserAnouncement(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const breakproint = [

    {
      width: 100,
      itemsToShow: 1
    },
    {
      width: 415,
      itemsToShow: 2


    },
    {
      width: 880,
      itemsToShow: 3

    },
    {
      width: 1280,
      itemsToShow: 4,
    },
  ]

  const [viewAnouncement, setViewAnouncement] = useState(0)

  const displayMyAnouncement = () => {
    if (userAnouncement.length !== 0) {
      setViewAnouncement(1)

    } else {
      setViewAnouncement(0)
    }
  }

  useEffect(() => {
    getAdversitement()
    displayMyAnouncement()
  })

  useEffect(() => { getUserInfo() }, [])

  const navigate = useNavigate()

  const noticeInterest = (title, recomendation) => {
    swal({
      title: title,
      text: recomendation,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          navigate('/login')
        }
      });
  }

  const sendToWhatsapp = () => {
    if (userPhone.length === 0) {
      Alert('No tiene un numero de telefono registrado', '', 'warning', 'Ok')

    }
    else {
      if (user === null) {
        noticeInterest('Debe estar logueado para poder contactar con este usuario', '¿ Desea iniciar sesion ?')
      }
      else {
        window.location.href = `https://api.whatsapp.com/send?phone=+57${userPhone}&text=Hola%20,%20mi%20nombre%20es%20${user[0].nombre}%20y%20estoy%20interesado%20en%20la%20pulicacion%20con%20el%20titulo%20de%20:%20______%20`
      }

    }
  }

  return (
    <div className='profile-page'>
      <Header />
      <div className="user-info-tools">
        <div className="profile-data-received">
          <UserImage userData={userData} />
        </div>
        <div className="line-profile-separator" />
        <div className="add-settings-account">
          <ProfileCardButton onClick={sendToWhatsapp} >
            <FontAwesomeIcon icon={faWhatsapp} />
            whatsapp
          </ProfileCardButton>
          <ProfileCardButton>
            <FontAwesomeIcon icon={faMessage} />
            Chat
          </ProfileCardButton>
          <ProfileCardButton >Reportar</ProfileCardButton>
        </div>
      </div>
      <div className="most-recent-container">
        <h2>Publicaciones de este usuario</h2>
        {viewAnouncement === 0 &&
          <div className="not-anouncement">
            <div className="not-anouncement-profile">
              <FontAwesomeIcon className='not-icon' icon={faHouseCircleXmark} />
              <h2 className='not-anouncement-title'>Aun no tiene publicaciones...</h2>
            </div>
          </div>

        }
        {viewAnouncement === 1 &&
          <Carousel itemsToShow={4} pagination={false}
            breakPoints={breakproint}>
            {userAnouncement.map(
              userAnouncement => (
                <MyAnouncementCard key={userAnouncement.idanuncio} data={userAnouncement} />
              )
            )
            }
          </Carousel>
        }
      </div>
      <Footer />
    </div>
  )
}
