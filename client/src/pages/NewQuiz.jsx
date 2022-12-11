import React, { useState, useEffect } from 'react'
import QuestionAdding from '../components/NewQuiz/QuestionAdding'
import AddedQuestion from '../components/NewQuiz/AddedQuestion'
import { NewQuestionContext } from '../components/context/NewQuestionContext'
import '../styles/newQuiz.css'
import axios from 'axios'

export default function NewQuiz() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [questions, setQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState()

  useEffect(()=>{
    if(newQuestion){
      setQuestions([...questions, newQuestion])
    }
  }, [newQuestion])

  const saveQuiz = async () => {
    if ((title.trim() !== '')
      && (description.trim() !== '')
      && (questions.length > 0)) {
      const quiz = {
        title,
        description,
        questions
      }
      const token = localStorage.getItem('token')
      await axios.post('http://localhost:3000/addQuiz', quiz, { headers: { Authorization: token } })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <NewQuestionContext.Provider value = {setNewQuestion}>
      <div className='quiz-creation'>
        <h1>New Quiz</h1>
        <div>
          <input
            className='quizTitle'
            onChange={(e) => { setTitle(e.target.value) }}
            value={title} type="text"
            placeholder='put quiz title here...'
          />
        </div>
        <div>
          <textarea
            className='quizDescription'
            onChange={(e) => { setDescription(e.target.value) }}
            value={description}
            cols="30"
            rows="4"
            placeholder='put quiz description here...'
          >
          </textarea>
        </div>
        <div className='addedQuestions'>
          {questions.map((question, index) => {
            return <AddedQuestion question={question} key={index} id={index}/>
          })}
        </div>
        <QuestionAdding />
        <div>
          <button onClick={saveQuiz}>Save Quiz</button>
        </div>
      </div>
    </NewQuestionContext.Provider>
  )
}
