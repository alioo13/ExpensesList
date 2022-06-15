import React , {useState} from 'react'
import './ExpenseItem.css';
import Expensedate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
  const [title, setfirst] = useState(props.title)
const cliclhandler = () => {

  setfirst(title + 'clicked')
}

  return (
    <li><Card className='expense-item'>
   <Expensedate date={props.date} />
      <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={cliclhandler} className="expense-item__edit-btn">Edit</button>
      </div>

    </Card></li>
  )
}

export default ExpenseItem
