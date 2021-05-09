import './App.css';

import React,{useState} from 'react'
// import components 
// import Expense from './components/Expense'
import AllExpense from './components/Expense/AllExpense'
import AddExpense from './components/AddExpense/NewExpense'

const dummy_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpense] = useState(dummy_expense)
  function getExpenseFromNewExpense (exp){
    setExpense((previousState)=>{
      return[exp,...previousState]
    })
  }
  console.log(expenses)

  return (
    <div>
      <AddExpense getExpense={getExpenseFromNewExpense}/>
      <AllExpense items={expenses} />
    </div>
  );
}

export default App;
