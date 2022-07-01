import './CategoriesBar.css'
import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHouse, faHouseUser, faShop, faTractor } from '@fortawesome/free-solid-svg-icons'


export const CategoriesBar = () => {

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
    return (
        <div className='categories-bar'>
            <div onClick={categoriesResultHome} className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={faHouse}></FontAwesomeIcon>
                <p className='category-text-font'>Hogares</p>
            </div>
            <div onClick={categoriesResultPlain} className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={faHouseUser}></FontAwesomeIcon>
                <p className='category-text-font'>Terreno</p>
            </div>
            <div onClick={categoriesResultRural} className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={faTractor}></FontAwesomeIcon>
                <p className='category-text-font'>Rural</p>
            </div>
            <div onClick={categoriesResultApartment} className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={faBuilding}></FontAwesomeIcon>
                <p className='category-text-font'>Apartamento</p>
            </div>
            <div onClick={categoriesResultLocal} className="categories-bar-container  category-one">
                <FontAwesomeIcon className='category-icon' icon={faShop}></FontAwesomeIcon>
                <p className='category-text-font'>Locales</p>
            </div>
        </div>
    )
}
