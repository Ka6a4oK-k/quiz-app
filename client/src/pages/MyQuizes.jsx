import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QuizCard from '../components/QuizCard'

export default function MyQuizes() {

    const [quizes, setQuizes] = useState([])

    useEffect(()=> {
        const getQuizes = async () => {
            const token =  localStorage.getItem('token')
            await axios.get('http://localhost:3000/myQuizes', { headers: { Authorization: token } })
            .then(res => setQuizes(res.data))
            .catch(err => console.log(err))
        }
        getQuizes()
    }, [])

    return (
        <div>
            <h1>My Quizes</h1>
            <div className='quiz-card'>
                {Array.isArray(quizes) && quizes.map((quiz, index) => <QuizCard quiz={quiz} key={index}/> )}
            </div>
        </div>
    )
}
