export const localStorage = ( data ) =>{
    if (data.length>0) {
        let datos = data[0];
        localStorage.setItem('id', datos.id)
        localStorage.setItem('Nombre', datos.nombre)
        localStorage.setItem('Apellidos', datos.apellidos)
        localStorage.setItem('email', datos.email)
        localStorage.setItem('telefono', datos.telefono)
        alert(`Bienvenido ${datos.nombre} ${datos.apellidos}`)
    }else{
    }
}

