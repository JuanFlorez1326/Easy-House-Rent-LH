import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './AnouncementImages.css'

export const AnouncementImages = ({ url1, url2, url3, url4, habitaciones, garaje, modalidad }) => {
    
    const [fourImage, setFourImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')
    const [secondImage, setSecondImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')
    const [thirdImage, setThirdImage] = useState('https://cdn.pixabay.com/photo/2017/01/13/01/22/icon-1976100_960_720.png')

    const setNewImages = ()  => {
        if (url2.length !== 0) {
            setSecondImage(url2)
        } 
        
        if (url3.length !== 0) {
            setThirdImage(url3)
        }

        if (url4.length !== 0) {
            setFourImage(url4)
        }
    }

    useEffect(()=> {
        setNewImages()
    })

    return (


        <>
            <div className="relative-images-container">
                <div className="first-relative-image">
                    <img className='relative-img' src={url1} alt="image1" />
                </div>
                <div className="relatives-image">
                    <div className="relative-image-render">
                        <img className='relative-img' src={secondImage} alt="image2" />
                    </div>
                    <div className="relative-image-render">
                        <img className='relative-img' src={thirdImage} alt="image3" />
                    </div>
                    <div className="relative-image-render">
                        <img src={fourImage} className='relative-img' alt="image4" />
                    </div>
                </div>
            </div>
            <br className='separator-images' />
            <div className="add-image-info">
                <div className="images-add-info">
                    <p>modalidad</p>
                    <p>{modalidad}</p>
                </div>
                <div className="images-add-info">
                    <p>habitaciones</p>
                    <p>{habitaciones}</p>
                </div>
                <div className="images-add-info">
                    <p>garaje</p>
                    <p>{garaje} </p>
                </div>
            </div>
        </>
    )
}
