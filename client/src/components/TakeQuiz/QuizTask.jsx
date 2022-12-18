import React from 'react'
import TaskOption from './TaskOption'

export default function QuizTask(props) {


    return (
        <div className='task'>
            <h4>Task#{props.id+1}</h4>
            <p className='questionText'>{props.question.question}</p>
            <div className='options'>
                {props.question.options && props.question.options.map((option, index) => <TaskOption option={option} id={index} key={index}/>)}
            </div>
        </div>
    )
}
