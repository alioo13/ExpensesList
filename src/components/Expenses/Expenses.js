import React ,{useState}from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filtredyear, setfiltredyear] = useState('2020');

  const filterChanged = (filter) => {
    setfiltredyear(filter);  
    console.log(filter)
  };

  const filtredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtredyear;
  }
  );

  // let expensesContent = <p>No expenses found !</p>;

  // if(filtredExpenses.length > 0) {
  //   expensesContent =   filtredExpenses.map((expense) => ( 
  //     <ExpenseItem key={expense.id} title ={expense.title} amount={expense.amount} date={expense.date}  />
  //   ))}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filtredyear} onChangeFilter={filterChanged}/>
      {/* {expensesContent} */}
      <ExpensesChart expenses={filtredExpenses}/>
      <ExpensesList items= {filtredExpenses} />
      {/* {filtredExpenses.length === 0 && <p>No expenses found .</p>}
      {filtredExpenses.length > 0 && 
      filtredExpenses.map((expense) => ( 
        <ExpenseItem key={expense.id} title ={expense.title} amount={expense.amount} date={expense.date}  />
      ))} */}


      {/* {props.items.map((expense) => ( 
        <ExpenseItem key={expense.id} title ={expense.title} amount={expense.amount} date={expense.date}  />
      ))} */}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
