import React from 'react';
import './UserOutput.css'

const UserOutput = (props) =>{
    return(
        <div className="Output">
            <p>{props.name}</p>
            <p>2</p>
        </div>
    )
}



export default UserOutput