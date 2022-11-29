import React, { useState, useEffect, useRef } from 'react'
import OptionAdding from './OptionAdding'

export default function QuestionAdding(props) {

    const [options, setOptions] = useState([])
    const [newOption, setNewOption] = useState('')
    const [correctOptions, setCorrectOptions] = useState([])

    useEffect(() => {
        console.log(correctOptions);
    })

    const addOption = () => {
        if (newOption !== '') {
            setOptions([...options, newOption])
            setNewOption('')
        }
    }

    // const setCorrectOption = (index) => {
    //     if (!correctOptions.includes(index)) {
    //         setCorrectOptions([...correctOptions, index])
    //     } else {
    //         const temp = correctOptions;
    //         temp.splice(temp.indexOf(index),1)
    //         setCorrectOptions([...temp])
    //     }
    // }

    return (
        <div>
            <input type="text" placeholder='put question here...' />
            {options.map((option, index) => {
                return <OptionAdding key={index} option={option} number={index+1}/>
            })}
            <div>
                <input type="text" onChange={(e)=>{setNewOption(e.target.value)}} value={newOption} placeholder='put option here...'/>
            </div>
            <button onClick={addOption}>Add new option</button>
            <button onClick={()=>{}}>Save question</button>
        </div>
    )
}
