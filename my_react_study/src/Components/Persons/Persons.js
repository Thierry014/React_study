import React from 'react';
import Person from '../Person/Person'

const Persons = (props) => {
    return (
                        props.personArray.map((person,index) => {
                            return <Person 
                            name={person.name}
                            // click={()=>this.delete(index)}
                            click={(e)=>props.delete(index)}
                            update = {(e)=>props.update(e,index)}
                            key = {index} />
                        })
    
    );
}

export default Persons;
