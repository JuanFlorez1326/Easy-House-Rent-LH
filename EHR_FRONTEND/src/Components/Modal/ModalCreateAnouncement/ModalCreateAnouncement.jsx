import React, { useEffect, useContext, useState } from 'react'
import './ModalCreateAnouncement.css'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { UserContext } from '../../../UserProvider/UserProvider'
import { createAnouncement } from '../../../methodAdversitement';
import { Alert } from '../../Alert';
import swal from 'sweetalert';

export const ModalCreateAnouncement = () => {

  const { user } = useContext(UserContext)

  const [visibility, setVisibility] = useState(false)
  const [formSection, setFormSection] = useState(0)

  const [city, setCity] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [zone, setZone] = useState('')
  const [edification, setEdification] = useState('')
  const [rooms, setRooms] = useState('')
  const [garage, setGarage] = useState('')
  const [modality, setModality] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
  }, [formSection])

  let date = new Date();
  let newDate = (date.toISOString().split('T')[0]);

  const changeModal = () => {
    setVisibility(true)
  }


  const validateCloseModal = () => {
    swal({
      title: `¿Esta seguro de cerrar la creacion anuncio?`,
      text: `Una vez que lo cierre no lo podra recuperar la información`,
      icon: `warning`,
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setVisibility(false)
        }
      });
  }

  const closeModal = () => {
    setVisibility(false)
  }

  const validateForm = () => {
    if (title === '' || description === '' || address === '') {
      Alert("Error", "Por favor complete todos los campos", "error", "Ok")
    } else {
      changeMoreStatus()
    }
  }
  const validateFormDetail = () => {
    if (zone === '' || edification === '' || rooms === 0 || garage === 0 || modality === '' || price === 0) {
      Alert("Error", "Por favor complete todos los campos", "error", "Ok")
    } else {
      changeMoreStatus()
    }
  }
  const changeMoreStatus = () => {
    setFormSection(formSection + 1)
  }

  const decreaseStatus = () => {
    if (formSection >= 1) {
      setFormSection(formSection - 1)
    } else {
      setFormSection(0)
    }
  }

  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    let indexImg;
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });
      indexInicial++;
    });
    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    setimages(newImgs);
  }


  const sendPhotos = async () => {
    let imagesUrl = []
    images.forEach(element => {
      const formData = new FormData()
      formData.append("file", element.file)
      formData.append("upload_preset", "anouncement")
      axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload", formData)
        .then(response => {
          imagesUrl.push(response.data.url)
          if (imagesUrl.length === images.length) {
            awaitAnouncement(imagesUrl)
          }
        })
        .catch(err => {
          console.log(err);
        })
    });
  }


  const validateFormImage = () => {
    if (images.length === 0) {
      Alert("Error", "Por favor agregue al menos una imagen", "error", "Ok")
    } else {
      sendProfile()
    }
  }
  const awaitAnouncement = async (imagesUrl) => {
    createAnouncement(user[0].idusuario, title, address, city, description, modality, zone, edification, rooms, garage, price, newDate, imagesUrl)
  }

  const sendProfile = async () => {
    await sendPhotos()
    if (sendPhotos) {
      swal({
        title: `El anuncio se ha creado correactamente`,
        text: ``,
        icon: `success`,
        buttons: true,
      })
        .then((willcreate) => {
          console.log("willcreate", willcreate);
          awaitAnouncement()
        });
    }
    closeModal()
    setimages([])
    setFormSection(0)
  }

  return (
    <>
      <ProfileCardButton onClick={() => changeModal()}>Agregar Publicación</ProfileCardButton>
      {visibility &&
        <Overlay>
          <Modal>
            <div className="header-modal">
              <FontAwesomeIcon className='header-modal-icon' onClick={validateCloseModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
            <div className="modal-content-item">
              <h1 className='create-title'>Publica tu propiedad</h1>
              {
                formSection === 0 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage'>1</p>
                    <p className='form-stage-none'>2</p>
                    <p className='form-stage-none'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Información Básica</h2>
                    <div className="required-info">
                      <input type='text' placeholder='Titulo de la publicación' className='email-put' onChange={(e) => {
                        setTitle(e.target.value)
                      }} />
                      <div className="modality-medium">
                        <input className='email-put' type='text' placeholder='Dirección' onChange={(e) => {
                          setAddress(e.target.value)
                        }} />
                        <input className='email-put' type='text' placeholder='Ciudad' onChange={(e) => {
                          setCity(e.target.value)
                        }} />
                      </div>
                      <textarea className='email-put create-description' placeholder='Descripción de la vivienda (detalles de la vivienda, consideraciones, aportes importantes para tener en cuenta).'
                        onChange={(e) => {
                          setDescription(e.target.value)
                        }} />
                    </div>
                  </div>
                  <div className="first-action-container">
                    <button className='send-email create-action-button' onClick={validateForm}>Siguente</button>
                  </div>
                </div>
              }
              {
                formSection === 1 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage-none'>1</p>
                    <p className='form-stage'>2</p>
                    <p className='form-stage-none'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Información detallada</h2>
                    <div className="required-info">
                      <div className="modality-medium modality-complete">
                        <select className='email-put' onChange={(e) => {
                          setModality(e.target.value)
                        }}>
                          <option value="">Modalidad</option>
                          <option value="venta">Venta</option>
                          <option value="arrendo">Arrendo</option>
                        </select>
                        <select className='email-put' onChange={(e) => {
                          setZone(e.target.value)
                        }}>
                          <option value="">Zona</option>
                          <option value="rural">Rural</option>
                          <option value="norte">Norte</option>
                          <option value="sur">Sur</option>
                          <option value="centro">Centro</option>
                        </select>
                      </div>
                      <div className="modality-medium">
                        <select className='email-put' onChange={(e) => {
                          setEdification(e.target.value)
                        }}>
                          <option value="">Tipo de edificación</option>
                          <option value="finca">Finca</option>
                          <option value="apartamento">Apartamento</option>
                          <option value="terreno">Terreno</option>
                          <option value="local">Local</option>
                          <option value="hogar">Hogar</option>
                        </select>
                        <input type='number' placeholder='Habitaciones' className='email-put' onChange={(e) => {
                          setRooms(e.target.value)
                        }} />
                      </div>
                      <select className='email-put' onChange={(e) => {
                        setGarage(e.target.value)
                      }}>
                        <option value="">Garaje</option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                      </select>
                      <input type='number' placeholder='Precio' className='email-put' onChange={(e) => {
                        setPrice(e.target.value)
                      }} />
                    </div>
                  </div>
                  <div className="first-action-container create-action-container">
                    <button className='send-email create-action-button' onClick={decreaseStatus}>Anterior</button>
                    <button className='send-email create-action-button' onClick={validateFormDetail}>Siguente</button>
                  </div>
                </div>
              }
              {
                formSection === 2 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage-none'>1</p>
                    <p className='form-stage-none'>2</p>
                    <p className='form-stage'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Verificación de datos</h2>
                    <div className="required-info">

                      <label className="btn btn-warning select-files">
                        <span>Seleccionar archivos </span>
                        <input hidden type="file" multiple onChange={(e) => { changeInput(e) }}></input>
                      </label>
                      <div className="row">
                        {images.map((imagen) => (
                          <div className="square" key={imagen.index}>
                            <div className="content_img">
                              <button
                                onClick={deleteImg.bind(this, imagen.index)} className='image-delete'
                              >
                                x
                              </button>
                              <img
                                alt="previewAnouncement"
                                src={imagen.url}
                                data-toggle="modal"
                                data-target="#ModalPreViewImg"
                                className="img-responsive"
                              ></img>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="first-action-container create-action-container">
                    <button className='send-email create-action-button' onClick={decreaseStatus}>Anterior</button>
                    <button className='send-email create-action-button' onClick={validateFormImage}>Publicar</button>
                  </div>
                </div>
              }
            </div>
          </Modal>
        </Overlay>
      }
    </>
  )
}

