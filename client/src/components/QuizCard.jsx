import React from 'react'
import { useState, useEffect } from 'react'

export default function QuizCard(props) {

    const [quiz, setQuiz] = useState()

    useEffect(() => {
        setQuiz(JSON.parse(props.quiz.quiz_json))
    }, [])
    
  return (
    <div>
        <p>{quiz && quiz.title}</p>
        <p>{quiz && quiz.description}</p>
    </div>
  )
}
