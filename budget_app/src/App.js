import classes from './App.module.css';
// import customize components 
import Topbar from './Components/Topbar/Topbar'
import InputSection from './Components/InputSection/InputSection'
import BottomSection from './Components/BottomSection/BottomSection'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.desc_ref = React.createRef()
    this.amount_ref = React.createRef()
  }

  state = {
    income: [],
    expense: [],
    total_inc: 0,
    total_exp: 0,
    profit: 0,
    total_percent: 0,
    month: new Date().getMonth(),
    isIncome: true
  }

  updateBudget = (event) => {
    // console.log('clicked')
    event.preventDefault();
    // get +/-, description, value
    const type = this.state.isIncome
    const description = this.desc_ref.current.value;
    const amount = parseInt(this.amount_ref.current.value);
    

    // !check income info
    // console.log({ type, description, amount })

    // put it into state income / expense 
    if (type) {
      //TODO use setState 
      const income = this.state.income
      income.push({ description: description, amount: amount })
      this.setState({ income: income })
    }
    else {
      const expense = this.state.expense
      expense.push({ description: description, amount: amount, per: 0 })
      this.setState({ expense: expense })
    }


    this.updateRestData()
  }
  
  updateRestData(){
     // *  calculate total inc/exp, profit
     let total_inc = this.state.income.map((incomeobj) => incomeobj.amount)
    
     if (total_inc.length) {
       total_inc = total_inc.reduce((a, b) => a + b)
     }
     this.setState({ total_inc: total_inc })
 
     let total_exp = this.state.expense.map((expobj) => expobj.amount)

     if (total_exp.length) {

       //calculate 
       let exparr = this.state.expense
       total_exp = total_exp.reduce((a, b) => a + b)
       exparr.map((expobj)=>expobj.per = Math.floor(expobj.amount/total_exp*100))


     }
     this.setState({ total_exp: total_exp })
 
     this.setState({ profit: total_inc - total_exp })
 
     //TODO UPDATE total state
     let total_percent = Math.floor(total_exp / total_inc * 100)
     this.setState({ total_percent: total_percent })

  }

  changeType = () => {
    this.state.isIncome = !this.state.isIncome

  }

  deleteItem = (e) =>{
    //find the clicked item match item in state
    const id = e.target.id
    const type = id.split('-')[0]
    const index = id.split('-')[1]
    //make copy and remove 
    if(type ==='income'){
      const income = this.state.income
      income.splice(index,1)
      this.setState({income:income})
    }
    else{
      const exp = this.state.expense
      exp.splice(index,1)
      this.setState({expense:exp})

    }
    //setState

  console.log(this.state)
  this.updateRestData();
    
    
    
  }

  render() {
    return (
      <div className={classes.App}>
        <Topbar
          month={this.state.month}
          total_inc={this.state.total_inc}
          total_exp={this.state.total_exp}
          profit={this.state.profit}
          total_per={this.state.total_percent} />
        <InputSection
          submit={this.updateBudget}
          domDesc={this.desc_ref}
          domAmount={this.amount_ref}
          changeType={this.changeType} />
        <BottomSection
          income_arr={this.state.income}
          expense_arr={this.state.expense} 
          delete = {this.deleteItem}/>
      </div>
    )
  }
}



