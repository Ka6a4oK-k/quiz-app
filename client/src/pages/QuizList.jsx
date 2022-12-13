import React, {useEffect, useState} from 'react'
import QuizCard from '../components/QuizCard'
import axios from 'axios'

export default function QuizList() {

    const [quizes, setQuizes] = useState([])

    useEffect(()=> {
        const getQuizes = async () => {
            await axios.get('http://localhost:3000/allQuizes')
            .then(res => setQuizes(res.data))
            .catch(err => console.log(err))
        }
        getQuizes()
    }, [])

    return (
        <div>
            <h1>QuizList</h1>
            <div className='quiz_list'>
                {Array.isArray(quizes) && quizes.map((quiz, index) => <QuizCard quiz={quiz} key={index}/> )}
            </div>
        </div>
    )
}
