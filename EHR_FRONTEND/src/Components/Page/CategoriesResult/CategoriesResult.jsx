import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Header } from '../../Layout/Header/Header'
import { Footer } from '../../Layout/Footer/Footer'
import { ResultCards } from '../../UI/ResultCards/ResultCards'
import './CategoriesResult.css'
import { CategoriesNav } from '../../UI/CategoriesNav/CategoriesNav'

export const CategoriesResult = () => {

    const [searchParams] = useSearchParams()
    let filter = searchParams.get('type')

    const [data, setData] = useState([])

    const getCategories = async () => {
        axios.get('https://localhost:5001/api/home/edification', { params: { edification: filter } })
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCategories()
    })

    return (
        <>
            <Header />
            <CategoriesNav />  
            <div className="cards-content">
                {
                    data.map(
                        data => (
                            <ResultCards key={data.idanuncio} data={data} />
                        )
                    )
                }
            </div>
            <Footer />
        </>
    )
}


