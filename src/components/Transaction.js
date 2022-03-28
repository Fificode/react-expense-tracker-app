import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/Globalstate'

const Transaction = ({transaction}) => {
  const [style, setStyle] = useState({display: 'none'});
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
<li className={transaction.amount < 0 ? 'minus' : 'plus'}
   onMouseEnter = {e => {setStyle({display: 'block'})}}
  onMouseLeave = {e => {setStyle({display: 'none'})}}>
  
                  {transaction.text}
         <span className='transaction-value'>{sign}${Math.abs(transaction.amount)}
          </span>
               <button className='delete-btn' onClick = {() => deleteTransaction(transaction.id)} style={style}>x</button>
            </li>
    </>
  )
}

export default Transaction