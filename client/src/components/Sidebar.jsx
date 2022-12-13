import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar({ setAuth, isAuthorized }) {

  const logout = () => {
    localStorage.removeItem('token')
    setAuth(false)
  }

  return (
    <div className='sidebar'>
      <h1>Quizoff</h1>
      <ul>
        {!isAuthorized && 
        <ul>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
        </ul>}
        {isAuthorized && 
        <ul>
          <Link to='/myQuizes'>My Quizes</Link>
          <Link to='/quizList'>List of Quizes</Link>
          <Link to='/createQuiz'>Create new quiz</Link>
        </ul>}
        {isAuthorized && <button onClick={logout}>Log out</button>}
      </ul>
    </div>
  )
}
