import React, { useState } from 'react'
import QuestionAdding from '../components/QuestionAdding'
import '../styles/newQuiz.css'

export default function NewQuiz() {

  const [newQuiz, setNewQuiz] = useState({})

  const onchange = (e) => {
    setNewQuiz({
      ...newQuiz,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='quiz-creation'>
      {/* <div className='quiz-creation title-description-stage'>
        <h1 className='form-title'>Create new Quiz</h1>
        <input type="text" name='quizTitle' onChange={onchange} placeholder='quiz title' />
        <textarea name="quizDescription" onChange={onchange} cols="30" rows="3"></textarea>
      </div> */}
      {/* <button >Add question</button> */}
       <QuestionAdding />
    </div>
  )
}
