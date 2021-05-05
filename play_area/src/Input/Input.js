import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input onChange={props.change} type="text" value={props.text}></input>
        </div>
    )
}
