import React from 'react'
import IncomeList from './incomeList'
import ExpenseList from './expenseList'

export default function BottomSection(props) {
    return (
        <div className="container clearfix">
            <div className="income">
            <h2 className="icome__title">Income</h2>

                {props.income_arr.map((income, index) => {
                    return <IncomeList 
                    desc = {income.description} 
                    amount = {income.amount}/>
                })}

            </div>

            <div className="expenses">
            <h2 className="expenses__title">Expense</h2>

                {props.expense_arr.map((expense, index) => {
                    return <ExpenseList 
                    desc={expense.description} 
                    amount = {expense.amount}/>
                })}
            </div>
        </div>
    )
}

// TODO receive the state.budgets.income array and use prpos => incomeList Component
