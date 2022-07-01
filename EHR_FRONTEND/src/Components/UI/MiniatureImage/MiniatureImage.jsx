


import React, { useEffect, useState } from 'react'
import './MiniatureImage.css'

export const MiniatureImage = ({ userdata }) => {

  const [userProfile, setUserProfile] = useState('https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png')

  const getImageUser = () => {
    if (userdata.length !== 0) {
      if (userdata[0].foto.length !== 1) {
        setUserProfile(userdata[0].foto)
      }
    }
  }

  useEffect(() => {
    getImageUser()
  })

  return (
    <div className="profile-user-image">
      <img src={userProfile} className='background-profile-image' alt="profile"></img>
    </div>
  )
}