import React from 'react';
import './Char.css'

const Char = (props) => {
    return (
        <div className='Char'>
            <div onClick={props.click}>{props.char}</div>
        </div>
    );
}

export default Char;
