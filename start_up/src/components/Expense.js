import "./Expense.css";

import ExpenseDate from './ExpenseDate'

function expense(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
    
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

/* arrrow function also works 
let exp = () =>{
    return (
        <div>Arrow</div>
    )
}
*/

export default expense;
