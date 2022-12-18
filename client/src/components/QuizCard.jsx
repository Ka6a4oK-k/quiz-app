import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/quizCard.css'

export default function QuizCard(props) {

  const [quiz, setQuiz] = useState()

  useEffect(() => {
    // console.log(props.isOwner);
    setQuiz(JSON.parse(props.quiz.quiz_json))
  }, [])

  return (
    <div className='quizCard'>
      <Link to={props.isOwner ? `/myQuizes/updateQuiz/${props.quiz.quiz_id}` : `/quizList/takeQuiz/${props.quiz.quiz_id}`}>
        <p>{quiz && quiz.title}</p>
        <p>{quiz && quiz.description}</p>
      </Link>
    </div>
  )
}
