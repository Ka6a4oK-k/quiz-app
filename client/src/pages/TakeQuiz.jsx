import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import QuizTask from '../components/TakeQuiz/QuizTask'

export default function TakeQuiz() {

  const { quiz_id } = useParams()

  const [quiz, setQuiz] = useState({})
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [usersAnswers, setUsersAnswers] = useState([])

  useEffect(() => {


    const getQuiz = async () => {
      await axios.get(`http://localhost:3000/getQuiz/${quiz_id}`)
        .then(res => JSON.parse(res.data.quiz_json))
        .then(quiz => setQuiz(quiz))
        .catch(err => console.log(err))
    }
    getQuiz()
  }, [])

  useEffect(() => {
    const getAnswers = () => {
      if (quiz.questions) {
        setCorrectAnswers(quiz.questions.map(question => question.options.map(option => option.isCorrect)));
        setUsersAnswers(quiz.questions.map(question => question.options.map(option => false)))
      }
    }
    getAnswers()
  }, [quiz])

  return (
    <div className='takeQuiz'>
      <h1 onClick={() => console.log(quiz)}>TakeQuiz</h1>
      <h2 className='quizTitle'>{quiz.title}</h2>
      <p className='quizDescription'>{quiz.description}</p>
      <div className='taskList'>
        {quiz.questions && quiz.questions.map((question, index) => <QuizTask question={question} id={index} key={index} />)}
      </div>
      <button onClick={() => { }}>Finish quiz</button>
    </div>
  )
}
