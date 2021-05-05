import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

import Input from './Input/Input'
import Valid from './Valid/Valid'
import Char from './Char/Char'

export default class App extends Component {

  state = {
    string_length: 0,
    str_content: ''
  }

  calcu_length = (event) => {

    let strlen = { ...this.state.string_length }
    strlen = event.target.value.length

    let strcontent = event.target.value
    this.setState({ string_length: strlen, str_content: strcontent })

    console.log(this.state)

  }

  delete = (index) =>{
    console.log('delete activate')
    // copy
    let str = this.state.str_content

    // copy remove char
    str = str.replace(str[index],'')

    // set state
    this.setState({str_content:str})

  }



  render() {


    let content = (
      <div>
        {
          this.state.str_content.split('').map((char,index) => <Char key={index} char={char} click={()=>this.delete(index)} />)
        }
      </div>
    )

    return (
      <div className="App">
        <h1>Code Here</h1>
        <Input text={this.state.str_content} change={(event) => this.calcu_length(event)} />
        <p>{this.state.string_length}</p>
        <Valid len={this.state.string_length} />

        {content}


      </div>
    )
  }
}



