import React, { useEffect, useState } from 'react'
import './RandomBanner.css'
import { urlSearch } from '../../ApiRoutes'
import axios from 'axios'
import { RandomCard } from '../../UI/RandomCard/RandomCard'
import Carousel from 'react-elastic-carousel';

export const RandomBanner = () => {

    const [randomData, setRandomData] = useState([])

    const getRandom = () => {
        axios.get(`${urlSearch}/Random`)
            .then(response => {
                setRandomData(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getRandom()
    }, [])


    return (
        <div className="random-banner">
            <h1 className='most-recent-title'>Publicaciones que te pueden interesar</h1>
            <Carousel enableMouseSwipe={true} enableAutoPlay={true} autoPlaySpeed={4000} itemsToShow={1 } pagination={true} showArrows={false}>
                {
                    randomData.map(randomData => (
                        <RandomCard data={randomData} key={randomData.idanuncio} />
                    ))
                }
            </Carousel>
        </div>
    )
}
