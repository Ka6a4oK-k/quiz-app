import React from 'react'
import QuizTask from './QuizTask'

export default function TaskList(props) {

    return (
        <div className='taskList'>
            {props.questions && props.questions.map((question, index) => <QuizTask question={question} id={index} key={index}/>)}
        </div>
    )
}