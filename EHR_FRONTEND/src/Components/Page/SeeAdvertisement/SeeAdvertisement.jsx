import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { ResultCards } from '../../UI/ResultCards/ResultCards';
import { CategoriesNav } from '../../UI/CategoriesNav/CategoriesNav';
import { Header } from '../../Layout/Header/Header';
import { Footer } from '../../Layout/Footer/Footer'

export const SeeAds = () => {

    const [seeCard, setSeeCard] = useState([])
    const URLSEEAD = `https://localhost:5001/api/Advertisement`

    const GetDataAd = () => {
        axios.get(URLSEEAD)
        .then(response => {
            setSeeCard(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetDataAd()
    },)
    
    return(
        <>
            <Header/>
            <CategoriesNav/>  
            <div className="cards-content">
                {
                    seeCard.map(
                        seeCard => (
                            <ResultCards key={seeCard.idanuncio} data={seeCard}/>
                        )
                    )
                }
            </div>
            <Footer/>
        </>
    )
}