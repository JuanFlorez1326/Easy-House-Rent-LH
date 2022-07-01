import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { urlLogin } from '../../ApiRoutes';
import { useNavigate } from 'react-router-dom'
import validator from 'validator';
import { Alert } from '../../Alert';


export const FormLogin = () => {

    const navigate = useNavigate()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [emailError, setemailError] = useState("")

    const setEventToEmail = ((event) => {
        setemail(event.target.value)
        if(validator.isEmail(event.target.value)){
            setemailError("")
        }
        else{
            setemailError("El correo no es valido.")
        }
        if (event.target.value === "") {
            setemailError("")
        }
    })

    const SetEventToPassword = ((event) => {
        setpassword(event.target.value)
    })

    const login = ((e) => {
        e.preventDefault();
        axios.post(urlLogin, {
            "email" : email,
            "password" : password
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem("userInfo", JSON.stringify(response.data))
                navigate('/') 
                window.location.reload()
            })
            .catch(ex => {
                Alert("Fallo al iniciar sesión","El correo o la contraseña no son correctos.","error", "Ok")
            })
    })

    const validateDataInput = ((e ) => {
        e.preventDefault();
        if(email === "" || password === ""){
            Alert("Inicio de sesión", "Por favor ingrese todos los campos.", "error", "Ok")
        }
        else{
            login(e)
        }
    })
    const enterLogin=(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            login()
        }
    }


    
    return (
        <div className="login-form">
            <form className="login-valid-info">
                <div className="auth-services">
                    <GoogleAuth buttonText={"Iniciar sesión con Google"} /><br></br><br></br>
                </div>
                <div className="separator-container">
                        <div className="line-separator" />
                    <p className='separator-info'>O</p>
                    <div className="line-separator" />
                </div>
                <div className="info">
                    <input type="email" max="80" required className='info-input-register' placeholder="Correo electrónico" onChange={setEventToEmail}></input><br></br>
                    <span style={{
                        color: "red",
                    }}>{emailError}</span>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input-register' placeholder="Contraseña" onChange={SetEventToPassword} onKeyUp={e=>(enterLogin(e))} ></input>
                </div>
                <div className="forgot-password">
                    <button className="register-submit" onClick={(e) => validateDataInput(e)}>Entrar</button>
                    <NavLink to='/forgotPassword'><p className='login-forgot-password'>Olvidaste tu contraseña</p></NavLink>
                </div>
                <div className="create-account-login">
                    <p>No tienes cuenta..  </p>
                    <NavLink to="/register"><p className='create-account-link'> Crea una</p></NavLink>
                </div>
            </form>
        </div>
    )
}
