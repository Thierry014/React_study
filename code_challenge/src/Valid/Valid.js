import React from 'react'


const Valid = (props) => {

    
    return (
        <div>
            { props.len < 5 ?
             <p>Too short</p>
             : <p>Long enough</p>
            }
           
        </div>
    );
}

export default Valid;

