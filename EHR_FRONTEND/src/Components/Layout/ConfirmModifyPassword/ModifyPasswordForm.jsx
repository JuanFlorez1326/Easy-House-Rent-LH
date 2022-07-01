import React from 'react';
import { NavLink } from 'react-router-dom';

export const ModifyPasswordForm = () => {

    return (
        <div className='div-passwordReset'>
            <div className='div-infoReset'>

                <div className="reset-logoContainer">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>

                <div className='div-titleReset'>
                    <h2>Modificar Contraseña</h2>
                    <p>Escribe la informacion requerida para modificar la contraseña</p>
                </div>

                <div className='div-formReset'>
                    <form className='formResetPassword'>
                        <p>Contraseña Actual</p>
                        <input type="text" placeholder='********'/>

                        <p>Nueva Contraseña</p>
                        <input type="text" placeholder='********'/><br/>

                        <p>Confirmar Contraseña</p>
                        <input type="text" placeholder='********'/><br/>

                        <NavLink to='/'><b><button className='btnModifyPassword'>Aceptar</button></b></NavLink>
                        <NavLink to='/'><b><button className='btnModifyPassword'>Cancelar</button></b></NavLink>
                    </form>
                </div>

            </div>
        </div>
    )
}