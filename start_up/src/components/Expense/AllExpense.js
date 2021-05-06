import "./AllExpense.css";
import React, {useState} from 'react'
import Expense from "./Expense";
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'



function AllExpense(props) {

  const [year, setYear] = useState('2020')

  const getYearFromFilter = (year) =>{
    const yearFromFilter = year
    setYear(year)
    console.log(yearFromFilter)
  }

  return (
    
      <div className="expenses">
      <ExpensesFilter selectedYear={year} passYearToExpense={getYearFromFilter}/>

      <Expense
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <Expense
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <Expense
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <Expense
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      />
    </div>
    
  );
}

export default AllExpense;
