import React from 'react'
import './Person.css'

const person = (props) => {
    // const name = props.name

    return (
        <div className='Person'>
            <p onClick={props.click}>Hi {props.name}, Load Person app in {Math.floor(Math.random()*10)} secs</p>

            {/* show information in a Person element */}
            <p>{props.children}</p>

            {/* two way binding */}
            <input type="text" value={props.name} onChange={props.update}></input>
        </div>
    
    )
}


export default person