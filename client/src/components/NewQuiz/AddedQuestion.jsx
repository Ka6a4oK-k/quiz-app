import React from 'react'

export default function AddedQuestion(props) {
  return (
    <div className='addedQuestion'>
      <div>
        <h4>Task#{props.id+1}</h4>
      </div>
      <div>
        <p>{props.question.question}</p>
      </div>
      <div>
        {
          props.question.options.map((option, index) => {
            return <p key={index}>{index+1}) {option.text} {`${option.isCorrect}`}</p>
          })
        }
      </div>
    </div>
  )
}
