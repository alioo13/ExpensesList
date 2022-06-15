import React , {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const [isEdeting, setisEdeting] = useState(false);
    const onSaveExpenseData = (expenseData) => {
        const expensedata = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expensedata);
        setisEdeting(false);
    };

    const startEditingHandler = () => {
        setisEdeting(true);
    };

    const cancelEditingHandler = () => {
        setisEdeting(false);
    };
  return (
    <div className='new-expense'>
        {!isEdeting && <button onClick={startEditingHandler}>Add New Expense </button>}
        {isEdeting && <ExpenseForm onCancelHandling={cancelEditingHandler} onSaveExpenseData={onSaveExpenseData} />}
     </div>
  )
}

export default NewExpense