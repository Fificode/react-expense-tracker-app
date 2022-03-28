import React, {useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    
  return (
    <>
    <div className='transaction-list-container'>
        <h4>History</h4>
        <div className='border-bottom'></div>
        <ul>
            {transactions.map(transaction => (
                <div className='list-container' key= {transaction.id}>
             <Transaction  transaction= {transaction} />    
            </div>
            ))}
           
        </ul>
    </div>
    </>
  )
}

export default TransactionList