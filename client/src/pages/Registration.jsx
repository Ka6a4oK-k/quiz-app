import React from 'react'
import '../styles/registration-login.css'

export default function Registration() {



  return (
    <div className='registration'>
        <h1 className='form-title'>Registration</h1>
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" name='name' placeholder='Username...'/>
            <input type="email" name='email' placeholder='Email...'/>
            <input type="password" name='password' placeholder='Password...'/>
            <input type="submit" value='Sign up'/>
        </form>
    </div>
  )
}