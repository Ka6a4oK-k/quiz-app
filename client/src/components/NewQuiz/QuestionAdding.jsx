import React, { useState, useContext, useEffect } from 'react'
import { NewQuestionContext } from '../../components/context/NewQuestionContext'
import { OptionContext } from '../../components/context/OptionContext'
import OptionAdding from './OptionAdding'

export default function QuestionAdding(props) {

    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [newOption, setNewOption] = useState('')
    const setNewQuestion = useContext(NewQuestionContext)

    const acceptQuestion = () => {
        if ((options.length > 1)
            && (question.trim() !== '')
            && (options.filter(option => option.isCorrect).length !== 0)
            && (options.filter(option => option.isCorrect).length < options.length)) {
            setNewQuestion({
                question: question,
                options: options
            })
            setOptions([])
            setQuestion('')
        }
    }

    const addOption = () => {
        if (question.trim() !== '') {
            setOptions([...options, {
                text: newOption,
                isCorrect: false
            }])
            setNewOption('')
        }
    }

    return (
        <OptionContext.Provider value={{ options, setOptions }}>
            <div className='questionAdding'>
                <input type="text" onChange={(e) => { setQuestion(e.target.value) }} value={question} placeholder='put question here...' />
                {options.map((option, index) => {
                    return <OptionAdding key={index} option={option} id={index} />
                })}
                <div>
                    <input type="text" onChange={(e) => { setNewOption(e.target.value) }} value={newOption} placeholder='put option here...' />
                </div>
                <div>
                    <button onClick={addOption}>Add new option</button>
                </div>
                <div>
                    <button onClick={acceptQuestion} >Add new question</button>
                </div>
            </div>
        </OptionContext.Provider>
    )
}
