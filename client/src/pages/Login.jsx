import React from 'react'
import '../styles/registration-login.css'

export default function Login() {

  return (
    <div className='login'>
        <h1 className='form-title'>Login</h1>
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="email" name='email' placeholder='Email...'/>
            <input type="password" name='password' placeholder='Password...'/>
            <input type="submit" value='Log in'/>
        </form>
    </div>
  )
}
