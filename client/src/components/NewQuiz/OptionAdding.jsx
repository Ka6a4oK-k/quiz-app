import React, { useContext } from 'react'
import { OptionContext } from '../../components/context/OptionContext'

export default function OptionAdding(props) {

    const {options, setOptions} = useContext(OptionContext)

    const deleteOption = () => {
        const newOptions = [...options]
        newOptions.splice(props.id, 1)
        setOptions(newOptions)
    }

    const setIsCorrect = (e) => {
        const newOptions = [...options]
        newOptions.splice(props.id, 1, {text: props.option.text, isCorrect: e.target.checked})
        setOptions(newOptions)
    }

    return (
        <div className='option'>
            <p>{props.id+1})</p>
            <input  onChange={(e) => setIsCorrect(e)} type="checkbox" />
            <p>{props.option.text}</p>
            <button onClick={deleteOption}>delete option</button>
        </div>
    )
}
