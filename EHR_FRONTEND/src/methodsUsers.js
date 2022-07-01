import axios from "axios";
import { urlUsers, urlLogin } from "./Components/ApiRoutes";

export const postUsers = (nombre, apellidos ,edad, telefono ,email ,contraseña , departamento , municipio , foto ) => {
    axios.post(urlUsers,{
        "nombre":nombre,
        "email": email,
        "contrasenna":contraseña,
        "apellidos":apellidos,
        "edad": edad,
        "telefono" : telefono, 
        "estado": "A",
        "departamento":departamento,
        "municipio":municipio,
        "foto" : foto
    })
    .then(res =>{
        console.log(res);
    })
}



export const getUser = (email , password )=>{
    axios.get(urlUsers, {params:{email:email, contraseña:password}})
    .then(response=>{
        return response.data;
    })
}

export const getlogin = (Goemail, Gopassword) => {
    axios.post(urlLogin, {
            "email" : Goemail,
            "password" : Gopassword
        })
        .then(response => {
            console.log(response);
            localStorage.setItem("userInfo", JSON.stringify(response.data))
        })
        .catch(error => {
            console.log();
        })
    }
