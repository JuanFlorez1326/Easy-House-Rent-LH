import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './NoUserMenu.css'
import { NavLink } from 'react-router-dom'

export const NoUserMenu = () => {

    const [noUserVisible, setNoUserVisible] = useState(false)

    const changeSettings = () => {
        if (noUserVisible === false) {
            setNoUserVisible(true)
        } else {
            setNoUserVisible(false)
        }
    }
    
    return (
        <>
            <FontAwesomeIcon onClick={changeSettings} className='icon-none header-action-button' icon={faAngleDown} />
            {noUserVisible &&
                <div className="status-menu" onClick={changeSettings}>
                    <div className="menu-singout-responsive">
                        <NavLink to='/login'><button className='singout-button'>Ingresar</button></NavLink>
                        <NavLink to='/register'><button className='singout-button'>Registrarme</button></NavLink>
                        <NavLink to='/support'><button className='singout-button'>Soporte</button></NavLink>
                    </div>
                </div>
            }
        </>

    )
}
