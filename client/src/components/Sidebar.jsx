import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>Quizoff</h1>
      <ul>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/createQuiz'>Create new quiz</Link>
      </ul>
    </div>
  )
}
