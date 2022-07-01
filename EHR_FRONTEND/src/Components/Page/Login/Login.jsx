import React from 'react'
import { FormLogin } from '../../Layout/FormLogin/FormLogin'
import { Header } from '../../Layout/Header/Header'
import { Footer } from '../../Layout/Footer/Footer'
import './Login.css'


export const Login = () => {
  return (
    <div>
      <Header />
      < FormLogin />
      < Footer />
    </div>
  )
}
