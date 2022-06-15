import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle, setentredTitle] = useState('');
  const [entredAmount, setentredAmount] = useState('');
  const [entredDate, setentredDate] = useState('');

// const [userInput, setuserInput] = useState({
//     entredTitle: '',
//     entredAmount: '',
//     entredDate: ''
// });

  const titleChangeHandler = (event) => {
    setentredTitle(event.target.value);
    // setuserInput({...userInput, entredTitle: event.target.value});
    // setuserInput((prevState) => {
    //     return {...prevState, entredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setentredAmount(event.target.value);
    // setuserInput((prevState) => {
    //     return {...prevState, entredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setentredDate(event.target.value);
    // setuserInput((prevState) => {
    //     return {...prevState, entredDate: event.target.value };
    // });
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: entredTitle,
        amount: +entredAmount,
        date: new Date(entredDate)
    };
    props.onSaveExpenseData(expenseData);
    setentredTitle('');
    setentredAmount('');
    setentredDate('');
};
    
    return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={entredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={entredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={props.onCancelHandling}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
