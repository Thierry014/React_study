import "./Expense.css";
function expense(props) {
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString().slice(0,10)}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
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
