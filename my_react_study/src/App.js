import logo from './logo.svg';
import './App.css';

// import customize module
import Person from './Person/Person';


import React, {Component} from 'react'
import { render } from 'react-dom';

// way 1 to create react app/component

const App = () => {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Person></Person>
    </div>
  );
}


/*
class App extends Component {
  render(){
    return (
      <div className="App">
         <h1>Hello world</h1>
         <Person></Person>

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
