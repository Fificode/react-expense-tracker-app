import React, {useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

const Balance = () => {
   const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(transaction => transaction.amount);
const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
<h2>
    YOUR BALANCE
</h2>
<h3>
    ${total}
</h3>
    </>
  )
}

export default Balance