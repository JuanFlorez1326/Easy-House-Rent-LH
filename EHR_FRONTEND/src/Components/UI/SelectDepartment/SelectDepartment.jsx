import React from 'react'
import './SelectDepartment.css'

export const SelectDepartment = ({ data , event }) => {
  return (
    <select className='select-department' onChange={event}>
        <option value='departments'>Departamento</option>
        {
            data.map(element =>(
                <>
                    <option value={element.iddepartamento}>{element.nombre}</option>
                </>
            ))
        }
    </select>
  )
}
