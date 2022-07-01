import axios from 'axios'

export const createAnouncement = (iduser, title, adress, city, description,
    modality, zone, edification, rooms, garage, price, date, images) => {

    axios.post('https://localhost:5001/api/Advertisement', {
        idusuario: iduser,
        titulo: title,
        direccion: adress,
        ciudad: city,
        descripcion: description,
        modalidad: modality,
        zona: zone,
        edificacion: edification,
        habitaciones: rooms,
        garaje: garage,
        precio: price,
        fecha: date,
        url1: images[0],
        url2: images[1],
        url3: images[2],
        url4: images[3]
    })
        .then(response => {
            console.log(response.status);
        })
        .catch(err => {
            console.log(err);
        })
}

export const updateAnouncement = (idanounce, title, adress, city , description, modality, zone, edification, rooms, garage, price, date, images) => {
    axios.put(`https://localhost:5001/api/Advertisement/${idanounce}`, {
        idanuncio: idanounce,
        titulo: title,
        direccion: adress,
        ciudad: city,
        descripcion: description,
        modalidad: modality,
        zona: zone,
        edificacion: edification,
        habitaciones: rooms,
        garaje: garage,
        precio: price,
        fecha: date,
        url1: images[0],
        url2: images[1],
        url3: images[2],
        url4: images[3]
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}