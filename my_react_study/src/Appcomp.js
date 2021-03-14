import logo from './logo.svg';
import './App.css';

// import customize module
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'


import { render } from 'react-dom';

// import hook to usState
import { useState } from 'react'
import React, { Component } from 'react'
import person from './Person/Person';


/**
 *  * NORMAL COMMENT
 *  ! TEST DATA
 *  ? QUESTION
 *  // 123 
 *  TODO 
 *  
 * ! Must use arrow function or bind to evoke a function with args 
 */

export default class Appcomp extends Component {


    state = {
        Person: [
            { name: 'Henry' },
            { name: 'Tracy' },
            { name: 'Simon' }
        ],

        showName: true

    }

    toggle = () => {
        const show = this.state.showName
        this.setState({ showName: !show })

        // ! toggle button test 
        console.log(this.state.showName)

    }

    delete = (deleteIndex) =>{
        //make a copy of array by using slice() or new_array = [... old array ]
        const person = this.state.Person.slice();
        person.splice(deleteIndex,1)
        this.setState({Person: person})

    }

    update = (event, index) =>{
        //find element in Person array
         //make a copy of the element 
        const personElement = {...this.state.Person[index]}

        //update name 
        personElement.name = event.target.value

        //make a copy of Person array
        const persons = [...this.state.Person]
        persons[index] = personElement

        //update Person based on copy 
        this.setState({Person:persons})

    }

    render() {

        let persons = null
        if (this.state.showName) {
            // * (JSX) in var
            persons = ( 
                /*
                    <div>
                        <Person
                            name={this.state.Person[0].name} />
                        <Person
                            name={this.state.Person[1].name} />
                    </div>
                    */
                <div>
                    {
                        this.state.Person.map((person,index) => {
                            return <Person 
                            name={person.name}
                            //click={()=>this.delete(index)}
                            click={this.delete.bind(this,index)}
                            update = {(event)=>this.update(event,index)}
                            key = {index} />
                        })
                    }
                </div>
            );


        }

        return (
            <div className="App">
                <h1>Component App</h1>
                <button onClick={this.toggle}>Toggle</button>
                <p>app comp</p>


                {/* {//* normal do condition} */}

                {/* { this.state.showName ?
                    <div>
                        <Person
                            name={this.state.Person[0].name} />
                        <Person
                            name={this.state.Person[1].name} />
                    </div> : null
                } */}

                {/* // * elegant way do it  */}
                {persons}




            </div>
        )
    }
}

