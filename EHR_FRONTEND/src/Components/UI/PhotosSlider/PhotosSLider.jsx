import React, { useEffect, useState } from 'react'
import axios from "axios"
import SimpleImageSlider from "react-simple-image-slider";
import './PhotosSlider.css'

export const PhotosSLider = () => {

    const [images, setImages] = useState([])

    const getImagesRecent = () => {
        axios.get('https://localhost:5001/api/Structure/AboutUs')
            .then(response => {
                setImages(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addImages = () => {
        let renderImages = []
        images.forEach(element => {
            renderImages.push(element.url1)
        });
        return(renderImages)
    }

    let render = addImages()

    useEffect(() => {
        getImagesRecent()
    }, [])

    useEffect(() => {
        addImages()
    }, [images])

    return (
        <>
        <div className='flex-carousel' >
            <SimpleImageSlider
                autoPlay={true}
                autoPlayDelay={2}
                loop={true}
                width={1530}
                height={700}
                images={render}
                useGPURender={true}
                showBullets={true}
            ></SimpleImageSlider>
        </div>
            <h1 className='carousel-title'>Nosotros</h1>
            <div className='first-description'>
                <p className='text'>La plataforma que te brinda soluciones óptimas en búsqueda de inmuebles,
                cada vez más cerca a ti. Quédate y descubre lo que tenemos para ofrecerte.
            </p>
            </div>
        
        </>

        
    )
}
