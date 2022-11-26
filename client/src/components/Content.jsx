import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Registration from '../pages/Registration.jsx'
import '../styles/content.css'

export default function Content() {
  return (
    <div className='content'>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
    </div>
  )
}
