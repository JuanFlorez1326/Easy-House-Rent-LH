import React from 'react'
import './SelectMunicipality.css'

export const SelectMunicipality = ({ data , event }) => {
  return (
    <select className='select-municipality' onChange={event} >
        <option value='municipality'>Municipio</option>
        {
            data.map(element =>(
                <>
                    <option value={element.idmunicipio}>{element.nombre} </option>
                </>
            ))
        }
    </select>
  )
}
