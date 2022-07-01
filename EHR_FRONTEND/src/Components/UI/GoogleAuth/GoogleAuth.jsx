import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { urlLogin, urlUsers} from '../../ApiRoutes';
import { useNavigate } from 'react-router';


export const GoogleAuth = ({ buttonText }) => {

    const[ name , setName ] = useState("")
    const[ lastName , setLastName ] = useState("")
    const[ email , setEmail ] = useState("")
    const[ password , setPassword ] = useState("")
    const[imageUrl, setimageUrl] = useState("")

    const responseGoogle = (response => {
        console.log(response)
        setName(response.profileObj.givenName)
        setLastName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setPassword(response.profileObj.googleId)
        setimageUrl(response.profileObj.imageUrl)
    })

    const validState = () => {
        if (name === "" || lastName === "" ||  email === "" || password === "" || imageUrl === ""){
        }
        else{
            registerGoogleUser()
        }
    }

    useEffect(() =>{
        validState()
    })

    const navigate = useNavigate()

    const registerGoogleUser  = () =>{
        axios.post(`https://localhost:5001/api/verifyEmail?email=${email}`)
            .then(response => {
                if (response.data === true) {
                    axios.post(urlLogin, {
                        "email" : email,
                        "password" : password
                    })
                    .then(res => {
                        localStorage.setItem("userInfo", JSON.stringify(res.data))
                        navigate('/')
                        window.location.reload()
                    })
                }
                else{
                    axios.post(urlUsers, {
                        "nombre" : name,
                        "email" : email,
                        "contrasenna" : password,
                        "apellido" : lastName,
                        "edad": 0,
                        "telefono": "",
                        "esatdo" : "A",
                        "departamento": 100,
                        "municipio": 1121,
                        "foto": imageUrl
                    })
                    .then(resposenDataRegister =>{
                        axios.post(urlLogin, {
                            "email" : email,
                            "password" : password
                        })
                        .then(respo => {
                            localStorage.setItem("userInfo", JSON.stringify(respo.data))
                            navigate('/')
                            window.location.reload()
                        })
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        < GoogleLogin
            clientId="502993702484-vkdcg537aa1ip1r14mab9s11dt7lf2i2.apps.googleusercontent.com"
            buttonText={ buttonText }
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'} 
        />
    )
}
