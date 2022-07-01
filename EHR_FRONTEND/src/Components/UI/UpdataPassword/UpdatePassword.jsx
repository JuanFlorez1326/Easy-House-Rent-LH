import { useState, useEffect} from "react" 
import validator from "validator"; 
import axios from "axios";

export const StarRating = () => {


  const [ tokenState , setTokenState ] = useState(false)  
  const [actualPassword, setactualPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  const [verifyPassword, setverifyPassword] = useState();
    const [ email, setemail] = useState('');
    const getemail = () => {
        if (email != null) {
            setemail(localStorage.getItem('email'))
        }
    }

    useEffect(()=>{
        getemail()
    })

    let emailToken = searchParams.get('token');
    const getToken = () => {
        if(emailToken != null){
            setTokenState(true)
        }
    }

  const [passwordmatch, setpasswordmatch] = useState("")

  const veryPasswordMach = () => {
    if(validator.equals(newPassword, verifyPassword)){
      setpasswordmatch("")
    }
    else{
      setnewPassword("Las constraseñas no coinciden")
    }
  }
  
  const bodyParametersPassword = {
    password: actualPassword,
  }

    const bodyParameters = {
        password: newPassword,
        email: email
    };


  const updatePassword = (e) => { 
    e.preventDefault();
    axios.post(`https://localhost:5001/api/Password/getpassword`, bodyParametersPassword)
    .then(res => {
      if(response == true){
        axios.put(`https://localhost:5001/api/Password`, bodyParameters, {headers:{ Authorization: `Bearer ${emailToken}` }})
        .then(response => {
          console.log(response);
        }).catch(ex => {
            console.log(ex);
        })
      }
    })
    .catch(ex => {
      console.log(ex);
    })
  }

  
  return (
    <>
    {tokenState &&
      <div className="inputs">
        <input type="text" name="" id="" onChange={(e) => setactualPassword(e.target.value)} placeholder="Contraseña actual" />
        <input type="text" name="" id="" onChange={(e) => setnewPassword(e.target.value)} placeholder="Contrseña nueva"/>
        <input type="text" name="" id="" onChange={(e) => setverifyPassword(e.target.value)} onKeyUp={veryPasswordMach()} placeholder="Confirme su constraseña"/>
        <span style={{color:red}}>{passwordmatch}</span>
        <button onClick={(e) => updatePassword()}>Actualizar constraseña</button>
      </div>
    }
    </>
  )
}
