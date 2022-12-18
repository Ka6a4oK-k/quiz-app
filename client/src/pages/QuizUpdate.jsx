import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function QuizUpdate(props) {

  const {quiz_id} = useParams()

  useEffect(() => {
    // const getQuiz = async () => {
    //     const token = localStorage.getItem('token')
    //     await axios.get(`http://localhost:3000/getQuiz/${quiz_id}`, { headers: { Authorization: token } })
    //         .catch(err => console.log(err))
    // }
    // getQuiz()
}, [])

  return (
    <div>
        <h1>Update Quiz</h1>
    </div>
  )
}
