import './PasswordReset.css'
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import validator from 'validator';
import { Footer } from '../Footer/Footer';
import { Alert } from '../../Alert';

export const PasswordResetForm = () => {

    const [tokenState, setTokenState] = useState(false)
    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const [passwordError, setpasswordError] = useState("")
    const [verifyPasswordError, setverifyPasswordError] = useState("")
    const [passwordmatch, setpasswordmatch] = useState("")

    let emailToken = searchParams.get('token');
    const getToken = () => {
        if (emailToken != null) {
            setTokenState(true)
        }
    }

    useEffect(() => {
        getToken()
    })

    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('')
    const [email, setemail] = useState('');
    const getemail = () => {
        if (email != null) {
            setemail(localStorage.getItem('email'))
        }
    }

    useEffect(() => {
        getemail()
    })

    const getPassword = ((e) => {
        setPassword(e.target.value)
        if (validator.isLength(e.target.value, { min: 8, max: undefined })) {
            setpasswordError("")
        }
        else {
            setpasswordError("La contraseña debe tener al menos 8 caracteres.")
        }
        if (e.target.value === "") {
            setverifyPasswordError("")
        }
    })

    const getVerifyPassword = ((e) => {
        setVerifyPassword(e.target.value)
        if (validator.isLength(e.target.value, { min: 8, max: undefined })) {
            setverifyPasswordError("")
        }
        else {
            setverifyPasswordError("La contraseña debe tener al menos 8 caracteres.")
        }
        if (e.target.value === "") {
            setverifyPasswordError("")
        }
    })

    const passwordMatch = () => {
        if (validator.equals(password, verifyPassword)) {
            setpasswordmatch("")
        }
        else {
            setpasswordmatch("Las contraseñas no coinciden")
        }
    }

    useEffect(() => {
        passwordMatch()
    }, [password, verifyPassword])


    const bodyParameters = {
        password: password,
        email: email
    };

    const sendNewPassword = (e) => {
        e.preventDefault();
        axios.put(`https://localhost:5001/api/Password`, bodyParameters, { headers: { Authorization: `Bearer ${emailToken}` } })
            .then(response => {
                Alert('Su contraseña ha sido actualizado correctamente', '', 'success', 'Ok', '3000')
                navigate('/login')
            }).catch(ex => {
                Alert('No se pudo actualizar su contraseña', '', 'error', 'Ok', '3000')
            })
    }

    const enterLogin = (event) => {
        let charCode = event.keyCode;
        if (charCode === 13) {
            sendNewPassword()
        }
    }

    return (
        <>
            {tokenState &&
                <div className="body-container">
                    <div className="forgot-password-container">
                        <div className="logo-container">
                            <h3>EHR</h3>
                            <p>Easy House Rent</p>
                        </div>
                        <h2 className='forgot-title'>Cambio de contraseña</h2>
                        <form>
                            <input className='email-put' type="password" placeholder='Nueva contraseña' onChange={getPassword} name="user_name"></input><br></br>
                            <span style={{ color: 'red' }}>{passwordError}</span>
                            <div className="separator"></div>
                            <input className='email-put' type="password" placeholder='Confirmacion nueva contraseña' onChange={getVerifyPassword} name="user_name" onKeyUp={e => (enterLogin(e))}></input><br></br>
                            <span style={{ color: 'red' }}>{verifyPasswordError}</span>
                            <span style={{ color: 'red' }}>{passwordmatch}</span>
                            <div className="send-content">
                                <button className='send-email' onClick={(e) => sendNewPassword(e)}>Restaurar</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            }
            < Footer />
        </>
    )
}