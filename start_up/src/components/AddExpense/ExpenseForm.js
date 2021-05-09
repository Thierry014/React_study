import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");

  // show expense
  const [showExpense, setshow] = useState(false);



  function titleHandler(e) {
    settitle(e.target.value);
  }
  function dateHandler(e) {
    setdate(e.target.value);
  }
  function amountHandler(e) {
    setamount(e.target.value);
  }

  function submitHander(e) {
    e.preventDefault();
    // get latest expense data
    const expense = {
      title: title,
      // date: new Date(date),
      date:date,
      amount: amount
    };

    //send expense to Parent component (NewExpense.js)
    props.getNewExpense(expense);

    // clear
    settitle('')
  }

  function showExpenseForm(e){
    e.preventDefault()
    setshow(!showExpense)
    console.log(showExpense)
  }

  return (
    <form onSubmit={submitHander}>
      {showExpense === false && <button onClick={showExpenseForm}>Add New Expense</button>}
      { showExpense === true &&
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandler}></input>
        </div>

        <div className="new-expense__actions">
          <button type='button' onClick={showExpenseForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
}
    </form>
  );
}

export default ExpenseForm;
