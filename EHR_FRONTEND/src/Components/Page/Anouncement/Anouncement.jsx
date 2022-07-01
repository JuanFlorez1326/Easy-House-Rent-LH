import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnouncementInfo } from '../../Layout/AnoucementInfo/AnouncementInfo.jsx'
import { Header } from '../../Layout/Header/Header'
import { useSearchParams } from 'react-router-dom';
import { urlAdversitement } from '../../ApiRoutes.js';
import { Footer } from '../../Layout/Footer/Footer'
import './Anouncement.css'
import { urlUsers } from '../../ApiRoutes';
export const Anouncement = () => {

  const [searchParams] = useSearchParams();
  let idAnouncement = searchParams.get('idanounce');



  const [anouncementData, setAnoucementData] = useState([])

  const getDataAnouncement = () => {
    axios.get(`${urlAdversitement}${idAnouncement}`)
      .then(response => {
        setAnoucementData(response.data)
        userByAnouncement(response.data[0].idusuario)
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const [ userData , setUserData ] = useState([])

  const userByAnouncement = ( idusuario ) => {
    axios.get(`${urlUsers}/getUser`, { params: { idusuario: idusuario  } })
      .then(response => {
        setUserData(response.data)  
      })
      .catch(err => {
        console.log(err);
      })
  }

  

  let route = window.location.href

  useEffect(() => {
    getDataAnouncement()
  }, [])

  useEffect(() => {
    getDataAnouncement()
  }, [route])


  return (
    <>
      <div className='anouncement-page'>
        <Header />
        <AnouncementInfo data={anouncementData} userData={ userData} />
        <Footer />
      </div>
    </>
  )
}
