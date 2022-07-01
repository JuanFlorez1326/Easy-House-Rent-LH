import React, { useEffect , useState } from 'react'
import { Overlay, Modal} from '../../StyledComponents/Overlay/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faPen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { updateAnouncement } from '../../../methodAdversitement';
import { Alert } from '../../Alert';
import swal from 'sweetalert';

export const UpdateAnouncement = ({ data }) => {

    const { idanuncio , titulo, direccion, ciudad, descripcion, modalidad, zona, edificacion, habitaciones, garaje, precio } = data

    const [visibility, setVisibility] = useState(false)
    const [formSection, setFormSection] = useState(0)

    const [city, setCity] = useState( ciudad )
    const [title, setTitle] = useState( titulo )
    const [description, setDescription] = useState( descripcion )
    const [address, setAddress] = useState( direccion )
    const [zone, setZone] = useState(zona)
    const [edification, setEdification] = useState(edificacion)
    const [rooms, setRooms] = useState( habitaciones)
    const [garage, setGarage] = useState(garaje)
    const [modality, setModality] = useState(modalidad)
    const [price, setPrice] = useState( precio )

    useEffect(() => {
    }, [formSection])

    let date = new Date();
    let newDate = (date.toISOString().split('T')[0]);

    const changeModal = () => {
        setVisibility(true)
    }


    const validateCloseModal = () => {
        swal({
            title: `¿Esta seguro de cerrar la actualizacion del anuncio?`,
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
        console.log(newImgs);
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
        updateAnouncement(idanuncio , title , address , city , description , modality , zone , edificacion , rooms , garage , price , newDate ,  imagesUrl )
    }

    const sendProfile = async () => {
        await sendPhotos()
        if (sendPhotos) {
            swal({
                title: `El anuncio se ha actulizado correactamente`,
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
            <FontAwesomeIcon onClick={() => changeModal()} icon={faPen} className='icon-action-mycard' />
            {visibility &&
                <Overlay>
                    <Modal>
                        <div className="header-modal">
                            <FontAwesomeIcon className='header-modal-icon' onClick={validateCloseModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
                        </div>
                        <div className="modal-content-item">
                            <h1 className='create-title'>Actualiza tu publicacion</h1>
                            {
                                formSection === 0 &&
                                <div className="secondary-create-form">
                                    <div className="create-progress">
                                        <p className='form-stage'>1</p>
                                        <p className='form-stage-none'>2</p>
                                        <p className='form-stage-none'>3</p>
                                    </div>
                                    <div className="create-info">
                                        <h2 className='create-subtitle'>Informacion Basica</h2>
                                        <div className="required-info">
                                            <input type='text' placeholder='Titulo de la publicacion' className='email-put' defaultValue={titulo} onChange={(e) => {
                                                setTitle(e.target.value)
                                            }} />
                                            <div className="modality-medium">
                                                <input className='email-put' type='text' placeholder='direccion' defaultValue={ direccion } onChange={(e) => {
                                                    setAddress(e.target.value)
                                                }} />
                                                <input className='email-put' type='text' placeholder='ciudad' defaultValue={ ciudad } onChange={(e) => {
                                                    setCity(e.target.value)
                                                }} />
                                            </div>
                                            <textarea className='email-put create-description' defaultValue={ descripcion } placeholder='descripcion de la vivienda ( detalles de la vivienda , consideraciones , aportes importantes a tener en cuenta )'
                                                onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}  />
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
                                        <h2 className='create-subtitle'>Informacion detallada</h2>
                                        <div className="required-info">
                                            <div className="modality-medium">
                                                <select className='email-put' onChange={(e) => {
                                                    setModality(e.target.value)
                                                }}>
                                                    <option value="">modalidad</option>
                                                    <option value="venta">venta</option>
                                                    <option value="arrendo">arrendo</option>
                                                </select>
                                                <select className='email-put' onChange={(e) => {
                                                    setZone(e.target.value)
                                                }}>
                                                    <option value="">zona</option>
                                                    <option value="rural">rural</option>
                                                    <option value="norte">norte</option>
                                                    <option value="sur">sur</option>
                                                    <option value="centro">centro</option>
                                                </select>
                                            </div>
                                            <div className="modality-medium">
                                                <select className='email-put' onChange={(e) => {
                                                    setEdification(e.target.value)
                                                }}>
                                                    <option value="">tipo de edificacion</option>
                                                    <option value="finca">finca</option>
                                                    <option value="apartamento">apartamento</option>
                                                    <option value="terreno">terreno</option>
                                                    <option value="local">local</option>
                                                    <option value="hogar">hogar</option>
                                                </select>
                                                <input type='number' placeholder='habitaciones' className='email-put' defaultValue={ habitaciones } onChange={(e) => {
                                                    setRooms(e.target.value)
                                                }} />
                                            </div>
                                            <select className='email-put' onChange={(e) => {
                                                setGarage(e.target.value)
                                            }}>
                                                <option value="">garaje</option>
                                                <option value="si">si</option>
                                                <option value="no">no</option>
                                            </select>
                                            <input type='number' placeholder='precio' className='email-put' defaultValue={ precio } onChange={(e) => {
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
                                        <h2 className='create-subtitle'>Verificacion de datos</h2>
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
                                        <button className='send-email create-action-button' onClick={validateFormImage}>Actualizar</button>
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

