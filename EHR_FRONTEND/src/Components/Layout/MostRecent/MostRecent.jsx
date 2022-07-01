import React from 'react'
import axios from 'axios'
import './MostRecent.css'
import { useState, useEffect } from 'react'
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard'
import Carousel from 'react-elastic-carousel';

export const MostRecent = () => {

  const [cardMostRecent, setCardMostRecent] = useState([])
  const URLCMR = `https://localhost:5001/api/Home/MostRecent`

  const GetMostRecent = () => {
    axios.get(URLCMR)
      .then(response => {
        setCardMostRecent(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    GetMostRecent()
  })

  const breakproint = [ 
    
    {
      width: 100,
      itemsToShow : 1
    },
    {
      width: 415,
      itemsToShow : 2

      
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

  return (
    <div className='most-recent-container-home'>
      <h2 className='most-recent-title'>Mira las publicaciones más recientes</h2>
      <Carousel pagination={false} breakPoints={breakproint} >
        {cardMostRecent.map(
          cardMostRecent => (
            <MyAnouncementCard  key={cardMostRecent.idanuncio} data={cardMostRecent} />
          )
        )
        }
      </Carousel>
    </div>
  )
}
