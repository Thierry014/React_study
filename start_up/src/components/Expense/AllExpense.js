import "./AllExpense.css";
import React, { useState } from "react";
// import Expense from "./Expense";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from './ExpenseList'

function AllExpense(props) {
  const [year, setYear] = useState("2020");
  const expense_arr = props.items.filter(expense=>{return new Date(expense.date).getFullYear().toString() === year})

  const getYearFromFilter = (year) => {
    const yearFromFilter = year;
    setYear(year);
    console.log(yearFromFilter);
  };

  
  

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={year}
        passYearToExpense={getYearFromFilter}
      />
      <ExpenseList items={expense_arr}/>

      
    </div>
  );
}

export default AllExpense;
