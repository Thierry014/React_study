import "./Expense.css";

import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate'

function Expense(props) {
  const [title, setTitle] = useState(props.title)

  function changeTitle(){
    //change the tilte 
    
    setTitle('New Title')

  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
    
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={changeTitle} >Title change</button>
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

export default Expense;
