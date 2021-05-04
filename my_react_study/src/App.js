import logo from './logo.svg';
import './App.module.css';

// import customize module
import Person from './Components/Person/Person';
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'


import React, {Component} from 'react'
import { render } from 'react-dom';

// import hook to usState
import {useState} from 'react'
// sperate state 
// 1. useState({object}) => return array [0: state array 1: function that can set state in[0] in an function  ]


// way 1 to create react app/component


const App = (props) => {

  const [personState, setPerson] = useState({
    person:[
      {name:'Tracy'},
      {name:'Jason'},
      {name:'Henry'}
    ]
  }) 

  const [userState, setUser] = useState({
    user:[
      {name:'Hi'}
    ]
  })

  // Event handler => functions 

  const InputchangeHandler = (e) =>{
    setUser({
      user:[
        {
        name:e.target.value
      }
    ]
    })
  }

  const switchName = (newName) =>{

    // use setPerson function to reset the personState array
    setPerson(
      {
        person:[
          {name:'Tracy'},
          {name:'Jason'},
          {name:newName}
        ]
      }
    )
  }

  const inputName = (e) =>{
    setPerson(
      {
        person:[
          {name:'Tracy'},
          {name:'Jason'},
          {name:e.target.value}
        ]
      }
    )
    
  }


  
  return (
    <div className="App">
      
{/* React syntax practice */}
{/* 
      <h1>Basic React syntax</h1> 

      <UserInput
      name = {userState.user[0].name}
      change = {InputchangeHandler}  />

      <UserOutput 
      name = {userState.user[0].name} />
*/}
    

    
      {/* <h1>Hello world</h1>
      <Person name ={personState.person[0].name}>Additional info</Person>
      <Person name ={personState.person[1].name}></Person>

      <Person 
      name = {personState.person[2].name}

      //use function with args  
      click = {switchName.bind(this,'max')}
      change = {inputName}>
      </Person>

      <Person name ='Henry'></Person>
      <button onClick = {switchName.bind(this,'Allan')}>Set state</button>
      */}


      {/* practice 1 basic syntax */}




    </div>
  );
}




/*
class App extends Component {

  // state can only be used in class based component based 
  state = {
    persons:[
      {name:'Jason'},
      {name:'Henry'}
    ]
  }

  clickhandler = () =>{
    // console.log('was clicked')

    this.setState({
      persons:[
        {name:'Jason update'}
      ]
    })
  }
//everytime when state change, all DOM element will re-render


  render(){
    return (
      <div className="App">
      <h1>Hello world</h1>
      <Person name ={this.state.persons[0].name}>Additional info</Person>
      <Person name ='Henry'></Person>
      <button onClick = {this.clickhandler}>Switch name</button>
    </div>
    );
  }
}

*/


// way 2

/*
class App extends Component {
  render(){
    return React.createElement('div', {className:'App'}, null,React.createElement('h1',null,'Hello Henry') )
    // at least 3 args => element, classname(o), config, children(o), content
  }
}
*/



export default App;
