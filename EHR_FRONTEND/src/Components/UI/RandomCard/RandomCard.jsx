import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import './RandomCard.css'

export const RandomCard = ({ data }) => {

  const navigate = useNavigate()

  const sendAnouncement = () => {
    navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
  }

  const { idanuncio, titulo, direccion, zona, ciudad, url1, url2, url3 } = data

  const [firstImage, setFirstImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')
  const [secondImage, setSecondImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')
  const [thirdImage, setThirdImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')

  const setNewImages = () => {
    if (url1.length !== 0) {
      setFirstImage(url1)
    }

    if (url2.length !== 0) {
      setSecondImage(url2)
    }

    if (url3.length !== 0) {
      setThirdImage(url3)
    }
  }

  useEffect(()=>{
    setNewImages()
  })

  return (
    <div className="card-random-container">

      <div className="other-random-info-container">
        <div className="card-random-title-container">
          <h1 className='card-random-title'>{titulo}</h1>
        </div>
        <div className="card-images-random">
          <div className="secondary-image-random">
            <img className='secondary-render' src={secondImage} alt="secondaryrender" />
          </div>
          <div className="primary-images-random">
            <img className='secondary-render' src={firstImage} alt="primaryrender" />
          </div>
          <div className="secondary-image-random">
            <img className='secondary-render' src={thirdImage} alt="secondaryrender" />
          </div>
        </div>
        <div className="description-data-random">
          <h2>Características</h2>
        </div>
        <div className="description-other-random">
          <h3 className='city-random'>Ciudad : {ciudad}</h3>
          <h3 className='city-random' >Zona : {zona}</h3>
          <h3 className='city-random'>Dirección : {direccion}</h3>
        </div>
        <button onClick={sendAnouncement} className='button-random-redirect'>Ver publicación</button>
      </div>
    </div>
  )
}
