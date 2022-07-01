import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import './StarRating.css';

export const StarRating = () => {

    const [ rating , setRating ] = useState(null)
    const [ hover , setHover ] = useState(null)

  return (
    <div className='stars-container'>
        <h3 className='star-title' >Calificacion</h3>
        <div className="rating-logic">
        {[...Array(5)].map((star, i) => {

            const ratingValue = i + 1;

            return (
                <label>
                    <input
                        className='radio-item'
                        type="radio"
                        name='rating'
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    />
                    <FaStar className='star' color={
                            ratingValue <= rating ? "#ffc107" : "e4e5e9"
                        }         
                    />    
                </label>
                );
            })}
        </div> 
    </div>
  )
}
