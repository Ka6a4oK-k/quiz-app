import React, { useState } from 'react'
import axios from 'axios'
import '../styles/registration-login.css'

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const signUp = async () => {
    try {
      await axios.post('http://localhost:3000/login', formData)
        .then(res => console.log(res.data))
    } catch (err) {
      console.log(err);
    }
    setFormData({
      email: '',
      password: ''
    })
  }

  const inputChange = (e) => {
    e.preventDefault()
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value
    })
    )
  }

  return (
    <div className='login'>
      <h1 className='form-title'>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        signUp()
      }}>
        <input type="email" onChange={inputChange} value={formData.email} name='email' placeholder='Email...' />
        <input type="password" onChange={inputChange} value={formData.password} name='password' placeholder='Password...' />
        <input type="submit" value='Log in' />
      </form>
    </div>
  )
}
