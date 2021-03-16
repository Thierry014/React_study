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
    month: new Date().getMonth(),
    isIncome: true
  }

  updateBudget = (event) => {
    console.log('clicked')
    // get +/-, description, value
    const type = this.state.isIncome
    const description = this.desc_ref.current.value;
    const amount = parseInt(this.amount_ref.current.value);

    console.log({ type, description, amount })

    event.preventDefault();
    // put it into state income / expense 
    if (type) {
      //TODO use setState 
      const income = this.state.income
      income.push({ description: description, amount: amount })
      this.setState({ income: income })
    }
    else {
      const expense = this.state.expense
      expense.push({ description: description, amount: amount })
      this.setState({ expense: expense })
    }
    // ! check state update
    console.log(this.state)

    // *  calculate total inc/exp, profit
    let total_inc = this.state.income.map((incomeobj) => incomeobj.amount)
    if (total_inc.length) {
      total_inc = total_inc.reduce((a, b) => a + b)
    }
    this.setState({ total_inc: total_inc })

    let total_exp = this.state.expense.map((expobj) => expobj.amount)
    if (total_exp.length) {
      total_exp = total_exp.reduce((a, b) => a + b)
    }
    this.setState({ total_exp: total_exp })

    this.setState({ profit: total_inc - total_exp })
  }

  changeType = () => {
    this.state.isIncome = !this.state.isIncome
  }
  render() {
    return (
      <div className={classes.App}>
        <Topbar
          month={this.state.month}
          total_inc={this.state.total_inc}
          total_exp={this.state.total_exp}
          profit={this.state.profit} />
        <InputSection
          submit={this.updateBudget}
          selected='selected'
          domDesc={this.desc_ref}
          domAmount={this.amount_ref}
          changeType={this.changeType} />
        <BottomSection
          income_arr={this.state.income}
          expense_arr={this.state.expense} />
      </div>
    )
  }
}



