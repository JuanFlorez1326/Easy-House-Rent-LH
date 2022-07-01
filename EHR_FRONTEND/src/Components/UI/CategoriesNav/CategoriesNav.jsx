import './CategoriesNav.css'

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const CategoriesNav = () => {

    const navigate = useNavigate()

    const categoriesResultHome = () => {
        navigate(`/categories/?type=hogar`)
    }
    const categoriesResultPlain = () => {
        navigate(`/categories/?type=terreno`)
    }
    const categoriesResultRural = () => {
        navigate(`/categories/?type=finca`)
    }
    const categoriesResultApartment = () => {
        navigate(`/categories/?type=apartamento`)
    }
    const categoriesResultLocal = () => {
        navigate(`/categories/?type=local`)
    }

    const url = window.location.href

    useEffect(()=>[url])

  return (
    <div className="categories-nav-container">
        <p onClick={categoriesResultHome} className='categories-type'>Hogar</p>
        <p onClick={categoriesResultPlain} className='categories-type' >Terreno</p>
        <p onClick={categoriesResultRural} className='categories-type'>Finca</p>
        <p onClick={categoriesResultApartment} className='categories-type'>Apartamento</p>
        <p onClick={categoriesResultLocal} className='categories-type'>Local</p>
    </div>
  )
}
