import React from 'react'

export default function TaskOption(props) {
    return (
        <div className='option'>
            <input type="checkbox" />
            {props.option.text}
        </div>
    )
}
