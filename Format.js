//position of the foor loop, map, content 

import React, { Component } from 'react';

class Format extends Component {
    render() {


        //! right here
        let content = (<div>{ for loop, map ...} </div>)

        return (
            <div>
                //! {content}
            </div>
        );
    }
}

export default Format;


// when use a excute a function in an function/class compoent , always use an arrow function 
import React from 'react'

export default function Format() {
    return (
        <Person 
        update = {()=>props.update(args)}/>
    )
}

import React, { Component } from 'react'

export default class Format extends Component {
    render() {
        let person = ''
        person = (
            <div>
                [].map(()=>{
                    return <Person
                    update = {()=>this.update(args)}/>
                })
            </div>
        );
        return (
            <div>
                
            </div>
        )
    }
}


