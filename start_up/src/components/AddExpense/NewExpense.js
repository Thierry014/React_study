import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

function AddExpense(props){
    const getExpenseForm = (expenseData) => {
        const expense = {
            ...expenseData
        } 
        // console.log(expense)

        // send the expense to app.js
        props.getExpense(expense)


    }

    return (<div className='new-expense'>
        <ExpenseForm getNewExpense={getExpenseForm}/>
    </div>)
}

export default AddExpense