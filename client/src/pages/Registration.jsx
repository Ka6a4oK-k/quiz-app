import React, { useState, useEffect } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import '../styles/registration-login.css'
import { Navigate } from 'react-router-dom'

export default function Registration() {

  const USERNAME_REGX = /[a-zA-Z0-9]{4,20}$/
  const EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const PASSWORD_REGX = /[a-zA-Z0-9]{8,20}$/

  const [formValidation, setFormValidation] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    setFormValidation(formData.email.match(EMAIL_REGX) &&
      formData.username.match(USERNAME_REGX) &&
      formData.password.match(PASSWORD_REGX))
  }, [formData])

  const register = async (e) => {
    e.preventDefault()
    const hashedPass = await bcrypt.hash(formData.password, 10);
    const user = {...formData, password: hashedPass}
    try {
      await axios.post('http://localhost:3000/users', user)
      setFormData({
        username: '',
        email: '',
        password: ''
      })
    } catch (err) {
      console.log(err);
    }
  }

  const inputChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }
  

  return (
    <div className='registration'>
      <h1 className='form-title'>Registration</h1>
      <form onSubmit={(e) => { register(e) }}>
        <input type="username" onChange={inputChange} value={formData.username} name='username' placeholder='Username...' />
        <input type="email" onChange={inputChange} value={formData.email} name='email' placeholder='Email...' />
        <input type="password" onChange={inputChange} value={formData.password} name='password' placeholder='Password...' />
        <input disabled={!formValidation} type="submit" value='Sign up' />
      </form>
    </div>
  )
}