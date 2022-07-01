import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'
import { Footer } from '../../Layout/Footer/Footer';
import { ProfileImage } from '../../UI/ProfileImage/ProfileImage';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket, faArrowUpFromBracket, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { UpdateUserInfo } from '../../UI/UpdateUserInfo/UpdateUserInfo';
import { UserAnouncementCard } from '../../UI/UserAnouncementCard/UserAnouncementCard';
import { Modal, Overlay, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents';
import { Alert } from '../../Alert';
import validator from 'validator';


export const Profile = () => {
    const { user } = useContext(UserContext)

    const [userAnouncement, setUserAnouncement] = useState([])

    const getAdversitement = () => {
        axios.get('https://localhost:5001/api/Advertisement/AdUser', { params: { idusuario: user[0].idusuario } })
            .then(response => {
                setUserAnouncement(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }



    const breakproint = [

        {
            width: 100,
            itemsToShow: 1
        },
        {
            width: 415,
            itemsToShow: 2


        },
        {
            width: 880,
            itemsToShow: 3

        },
        {
            width: 1280,
            itemsToShow: 4,
        },
    ]

    useEffect(() => {
        getAdversitement()
        displayMyAnouncement()
    })

    const [viewAnouncement, setViewAnouncement] = useState(0)

    const displayMyAnouncement = () => {
        if (userAnouncement.length !== 0) {
            setViewAnouncement(1)

        } else {
            setViewAnouncement(0)
        }
    }

    const [passwordVisible, setPasswordVisible] = useState(false)

    const changePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }

    const [oldPassword , setOldPassword ] = useState('')
    const [newPassword , setNewPassword ] = useState('')
    const [newPasswordConfirm , setNewPasswordConfirm ] = useState('')

    const [passwordErrorMacht, setpasswordErrorMacht ] = useState('')

    const changeOldPassword = (e) => {
        setOldPassword(e.target.value)
    }

    const changeNewPassword = (e) => {
        setNewPassword(e.target.value)
        if(validator.isStrongPassword(e.target.value, { min: 8, max: undefined, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })){
            setpasswordErrorMacht("")
        }
        else{
            setpasswordErrorMacht("La contraseña debe contener al menos una mayuscula, una minuscula, un numero y un simbolo")
        }
        if (e.target.value === "") {
            setpasswordErrorMacht("")
        }
    }

    const changeNewPasswordConfirm = (e) => {
        setNewPasswordConfirm(e.target.value)
    }

    const changePassword = () => {
        axios.put('https://localhost:5001/api/Password/confirmpassword',  { 
            email: user[0].email, 
            password: newPassword,
            validatePassword:oldPassword
        } )
        .then(response => {
            console.log(response);
            Alert('Password changed successfully', '', 'success', 'Ok')
            changePasswordVisible()
        })
    }

    const comparePassword = () => {
        if (newPassword === newPasswordConfirm) {
            setpasswordErrorMacht('')
        } else {
            setpasswordErrorMacht('Las constraseñas no coinciden')
        }
    }

    useEffect(() => {comparePassword()}, [newPasswordConfirm])

    return (
        <>
            <div className="profile-page">
                <Header />
                <div className="user-info-tools">
                    <div className="profile-data-received">
                        <ProfileImage />
                    </div>
                    <div className="line-profile-separator" />
                    <div className="add-settings-account">
                        <UpdateUserInfo />
                        <ModalCreateAnouncement />
                        <ProfileCardButton onClick={changePasswordVisible}>Actualizar contraseña</ProfileCardButton>
                        {
                            passwordVisible &&
                            <Overlay>
                                <Modal>
                                    <div className="header-modal">
                                        <FontAwesomeIcon className='header-modal-icon' onClick={changePasswordVisible} icon={faArrowRightFromBracket}></FontAwesomeIcon>
                                    </div>
                                    <div className="update-content">
                                        <h1 className='create-title'>Actualiza tu Contraseña</h1>
                                    </div>
                                    <div className="update-render-info">
                                        <p className='reduce-title'>Contraseña anterior</p>
                                        <input type="password" className='email-put' placeholder='********' onChange={(e) => changeOldPassword(e) } />
                                        <p className='reduce-title'>Nueva contraseña</p>
                                        <input type="password" className='email-put' placeholder='********' onChange={(e) => changeNewPassword(e)}></input>
                                        <p className='reduce-title'>Confirmar Nueva Contraseña</p>
                                        <input type="password" className='email-put' placeholder='********' onChange={(e) => changeNewPasswordConfirm(e)}></input>
                                        <br />
                                        <span style={{color: "red"}}>{passwordErrorMacht}</span>
                                        <br />
                                    </div>
                                    <div className="update-info-container">
                                        <button className='send-email' onClick={comparePassword} >Actualizar</button>
                                    </div>
                                </Modal>
                            </Overlay>
                        }

                    </div>
                </div>
                <div className="most-recent-container">
                    <h2>Mis publicaciones</h2>
                    {viewAnouncement === 0 &&
                        <div className="not-anouncement">
                            <div className="not-anouncement-profile">
                                <FontAwesomeIcon className='not-icon' icon={faHouseCircleXmark} />
                                <h2 className='not-anouncement-title'>Aun no tienes publicaciones...</h2>
                            </div>
                        </div>
                    }
                    {viewAnouncement === 1 &&
                        <Carousel itemsToShow={4} pagination={false}
                            breakPoints={breakproint}>
                            {userAnouncement.map(
                                userAnouncement => (
                                    <UserAnouncementCard key={userAnouncement.idanuncio} data={userAnouncement} allData={userAnouncement} />
                                )
                            )
                            }
                        </Carousel>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
