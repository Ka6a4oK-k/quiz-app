import React from 'react'
import { useState } from 'react'

export default function OptionAdding(props) {

    return (
        <div >
            <p>{props.number}</p>
            <input onChange={() => {  }} type="checkbox" id='check' />
            <p>{props.option}</p>
            <button>delete option</button>
        </div>
    )
}
