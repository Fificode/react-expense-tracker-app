import React, {useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = (amounts.filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0))
  .toFixed(2);

  const expense = (amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1)
  .toFixed(2);

  return (
      <>
    <div className='income-expense-container'>
   <div className='income-container'> 
       <h4>INCOME</h4>
       <p className='income-value'>{income}</p>
   </div>
   <div className="border"></div>
   <div className='expense-container'> 
       <h4>EXPENSE</h4>
       <p className='expense-value'>{expense}</p>
   </div>
    </div>
    </>
  )
}

export default IncomeExpenses