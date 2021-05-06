import "./AllExpense.css";
import Expense from "./Expense";

function AllExpense(props) {
  return (
    <div className="expenses">
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
