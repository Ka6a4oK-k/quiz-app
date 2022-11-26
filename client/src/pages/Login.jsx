import React, { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import '../styles/registration-login.css'

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const signUp = async (e) => {
    try {
      await axios.get('http://localhost:3000/users')
        .then(res => res.data)
        .then(users => users.find(user => user.email === formData.email))
        .then(user => {
          if (!user) {
            console.log('no user');
            return
          }
          if(bcrypt.compareSync(formData.password, user.password)){
            console.log('correct data');
          } else {
            console.log('incorrect data');
          }
        })
    } catch (err) {
      console.log(err);
    }
  }

  const inputChange = (e) => {
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
