import './ExpenseList.css'
import Expense from './Expense'


function ExpenseList(props){

    if (props.items.length === 0){
        return (<h2 className='expenses-list__fallback'> No Expense find</h2>)
    }

    return(
        props.items.map((expense) => {
            return (
              <Expense
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            );
          })
    )

}


export default ExpenseList